"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations
from typing import Optional

class PrimaryIPs:
    r"""Primary IPs help you to create more flexible networking setups. You can assign at most one Primary IP of type `ipv4` and one of type `ipv6` per Server. This Server then uses these IPs.
    
    You can only unassign a Primary IP from a Server when it's powered off. This Primary IP can then be assigned to a different powered off Server, or you can keep it around for later use.
    
    Primary IPs are bound to a specific Datacenter. You can not assign a Primary IP from one Datacenter to a Server in a different Datacenter. If you need this capability use Floating IPs instead.
    
    If your Server's operating system supports cloud-init there is no further configuration needed to make Primary IPs work.
    
    Primary IPs of type `ipv4` use a single IPv4 address as their `ip` property. Primary IPs of type `ipv6` use a /64 network such as `fc00::/64` as their `ip` property. Any IP address within that network can be used on your host.
    
    Primary IPs are billed on an hourly basis.
    """
    _client: requests_http.Session
    _security_client: requests_http.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests_http.Session, security_client: requests_http.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version
        
    def delete_primary_ips_id_(self, request: operations.DeletePrimaryIpsIDRequest) -> operations.DeletePrimaryIpsIDResponse:
        r"""Delete a Primary IP
        Deletes a Primary IP.
        
        The Primary IP may be assigned to a Server. In this case it is unassigned automatically. The Server must be powered off (status `off`) in order for this operation to succeed.
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.DeletePrimaryIpsIDRequest, base_url, '/primary_ips/{id}', request)
        
        
        client = self._client
        
        http_res = client.request('DELETE', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DeletePrimaryIpsIDResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        

        return res

    def get_primary_ips(self, request: operations.GetPrimaryIpsRequest) -> operations.GetPrimaryIpsResponse:
        r"""Get all Primary IPs
        Returns all Primary IP objects.
        """
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/primary_ips'
        
        query_params = utils.get_query_params(operations.GetPrimaryIpsRequest, request)
        
        client = self._client
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetPrimaryIpsResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.GetPrimaryIpsPrimaryIPsResponse])
                res.primary_i_ps_response = out

        return res

    def get_primary_ips_id_(self, request: operations.GetPrimaryIpsIDRequest) -> operations.GetPrimaryIpsIDResponse:
        r"""Get a Primary IP
        Returns a specific Primary IP object.
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetPrimaryIpsIDRequest, base_url, '/primary_ips/{id}', request)
        
        
        client = self._client
        
        http_res = client.request('GET', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetPrimaryIpsIDResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.GetPrimaryIpsIDPrimaryIPResponse])
                res.primary_ip_response = out

        return res

    def post_primary_ips(self, request: operations.PostPrimaryIpsCreatePrimaryIPRequest) -> operations.PostPrimaryIpsResponse:
        r"""Create a Primary IP
        Creates a new Primary IP, optionally assigned to a Server.
        
        If you want to create a Primary IP that is not assigned to a Server, you need to provide the `datacenter` key instead of `assignee_id`. This can be either the ID or the name of the Datacenter this Primary IP shall be created in.
        
        Note that a Primary IP can only be assigned to a Server in the same Datacenter later on.
        
        #### Call specific error codes
        
        | Code                          | Description                                                   |
        |------------------------------ |-------------------------------------------------------------- |
        | `server_not_stopped`          | The specified server is running, but needs to be powered off  |
        | `server_has_ipv4`             | The server already has an ipv4 address                        |
        | `server_has_ipv6`             | The server already has an ipv6 address                        |
        """
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/primary_ips'
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "request", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        
        client = self._client
        
        http_res = client.request('POST', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.PostPrimaryIpsResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 201:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.PostPrimaryIpsCreatePrimaryIPResponse])
                res.create_primary_ip_response = out

        return res

    def put_primary_ips_id_(self, request: operations.PutPrimaryIpsIDRequest) -> operations.PutPrimaryIpsIDResponse:
        r"""Update a Primary IP
        Updates the Primary IP.
        
        Note that when updating labels, the Primary IP's current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
        
        If the Primary IP object changes during the request, the response will be a “conflict” error.
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.PutPrimaryIpsIDRequest, base_url, '/primary_ips/{id}', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "request_body", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        
        client = self._client
        
        http_res = client.request('PUT', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.PutPrimaryIpsIDResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.PutPrimaryIpsIDPrimaryIPResponse])
                res.primary_ip_response = out

        return res

    