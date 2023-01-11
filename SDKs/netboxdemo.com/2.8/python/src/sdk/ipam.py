import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Ipam:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def ipam_aggregates_create(self, request: operations.IpamAggregatesCreateRequest) -> operations.IpamAggregatesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/aggregates/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamAggregatesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Aggregate])
                res.aggregate = out

        return res

    
    def ipam_aggregates_delete(self, request: operations.IpamAggregatesDeleteRequest) -> operations.IpamAggregatesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/aggregates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamAggregatesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def ipam_aggregates_list(self, request: operations.IpamAggregatesListRequest) -> operations.IpamAggregatesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/aggregates/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamAggregatesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.IpamAggregatesList200ApplicationJSON])
                res.ipam_aggregates_list_200_application_json_object = out

        return res

    
    def ipam_aggregates_partial_update(self, request: operations.IpamAggregatesPartialUpdateRequest) -> operations.IpamAggregatesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/aggregates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamAggregatesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Aggregate])
                res.aggregate = out

        return res

    
    def ipam_aggregates_read(self, request: operations.IpamAggregatesReadRequest) -> operations.IpamAggregatesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/aggregates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamAggregatesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Aggregate])
                res.aggregate = out

        return res

    
    def ipam_aggregates_update(self, request: operations.IpamAggregatesUpdateRequest) -> operations.IpamAggregatesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/aggregates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamAggregatesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Aggregate])
                res.aggregate = out

        return res

    
    def ipam_ip_addresses_create(self, request: operations.IpamIPAddressesCreateRequest) -> operations.IpamIPAddressesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/ip-addresses/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamIPAddressesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IPAddress])
                res.ip_address = out

        return res

    
    def ipam_ip_addresses_delete(self, request: operations.IpamIPAddressesDeleteRequest) -> operations.IpamIPAddressesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/ip-addresses/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamIPAddressesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def ipam_ip_addresses_list(self, request: operations.IpamIPAddressesListRequest) -> operations.IpamIPAddressesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/ip-addresses/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamIPAddressesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.IpamIPAddressesList200ApplicationJSON])
                res.ipam_ip_addresses_list_200_application_json_object = out

        return res

    
    def ipam_ip_addresses_partial_update(self, request: operations.IpamIPAddressesPartialUpdateRequest) -> operations.IpamIPAddressesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/ip-addresses/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamIPAddressesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IPAddress])
                res.ip_address = out

        return res

    
    def ipam_ip_addresses_read(self, request: operations.IpamIPAddressesReadRequest) -> operations.IpamIPAddressesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/ip-addresses/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamIPAddressesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IPAddress])
                res.ip_address = out

        return res

    
    def ipam_ip_addresses_update(self, request: operations.IpamIPAddressesUpdateRequest) -> operations.IpamIPAddressesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/ip-addresses/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamIPAddressesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IPAddress])
                res.ip_address = out

        return res

    
    def ipam_prefixes_available_ips_create(self, request: operations.IpamPrefixesAvailableIpsCreateRequest) -> operations.IpamPrefixesAvailableIpsCreateResponse:
        r"""A convenience method for returning available IP addresses within a prefix. By default, the number of IPs
        returned will be equivalent to PAGINATE_COUNT. An arbitrary limit (up to MAX_PAGE_SIZE, if set) may be passed,
        however results will not be paginated.
        
        The advisory lock decorator uses a PostgreSQL advisory lock to prevent this API from being
        invoked in parallel, which results in a race condition where multiple insertions can occur.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/prefixes/{id}/available-ips/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamPrefixesAvailableIpsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AvailableIP]])
                res.available_ips = out

        return res

    
    def ipam_prefixes_available_ips_read(self, request: operations.IpamPrefixesAvailableIpsReadRequest) -> operations.IpamPrefixesAvailableIpsReadResponse:
        r"""A convenience method for returning available IP addresses within a prefix. By default, the number of IPs
        returned will be equivalent to PAGINATE_COUNT. An arbitrary limit (up to MAX_PAGE_SIZE, if set) may be passed,
        however results will not be paginated.
        
        The advisory lock decorator uses a PostgreSQL advisory lock to prevent this API from being
        invoked in parallel, which results in a race condition where multiple insertions can occur.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/prefixes/{id}/available-ips/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamPrefixesAvailableIpsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AvailableIP]])
                res.available_ips = out

        return res

    
    def ipam_prefixes_available_prefixes_create(self, request: operations.IpamPrefixesAvailablePrefixesCreateRequest) -> operations.IpamPrefixesAvailablePrefixesCreateResponse:
        r"""A convenience method for returning available child prefixes within a parent.
        The advisory lock decorator uses a PostgreSQL advisory lock to prevent this API from being
        invoked in parallel, which results in a race condition where multiple insertions can occur.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/prefixes/{id}/available-prefixes/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamPrefixesAvailablePrefixesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AvailablePrefix]])
                res.available_prefixes = out

        return res

    
    def ipam_prefixes_available_prefixes_read(self, request: operations.IpamPrefixesAvailablePrefixesReadRequest) -> operations.IpamPrefixesAvailablePrefixesReadResponse:
        r"""A convenience method for returning available child prefixes within a parent.
        The advisory lock decorator uses a PostgreSQL advisory lock to prevent this API from being
        invoked in parallel, which results in a race condition where multiple insertions can occur.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/prefixes/{id}/available-prefixes/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamPrefixesAvailablePrefixesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AvailablePrefix]])
                res.available_prefixes = out

        return res

    
    def ipam_prefixes_create(self, request: operations.IpamPrefixesCreateRequest) -> operations.IpamPrefixesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/prefixes/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamPrefixesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Prefix])
                res.prefix = out

        return res

    
    def ipam_prefixes_delete(self, request: operations.IpamPrefixesDeleteRequest) -> operations.IpamPrefixesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/prefixes/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamPrefixesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def ipam_prefixes_list(self, request: operations.IpamPrefixesListRequest) -> operations.IpamPrefixesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/prefixes/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamPrefixesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.IpamPrefixesList200ApplicationJSON])
                res.ipam_prefixes_list_200_application_json_object = out

        return res

    
    def ipam_prefixes_partial_update(self, request: operations.IpamPrefixesPartialUpdateRequest) -> operations.IpamPrefixesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/prefixes/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamPrefixesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Prefix])
                res.prefix = out

        return res

    
    def ipam_prefixes_read(self, request: operations.IpamPrefixesReadRequest) -> operations.IpamPrefixesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/prefixes/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamPrefixesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Prefix])
                res.prefix = out

        return res

    
    def ipam_prefixes_update(self, request: operations.IpamPrefixesUpdateRequest) -> operations.IpamPrefixesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/prefixes/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamPrefixesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Prefix])
                res.prefix = out

        return res

    
    def ipam_rirs_create(self, request: operations.IpamRirsCreateRequest) -> operations.IpamRirsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/rirs/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRirsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Rir])
                res.rir = out

        return res

    
    def ipam_rirs_delete(self, request: operations.IpamRirsDeleteRequest) -> operations.IpamRirsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/rirs/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRirsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def ipam_rirs_list(self, request: operations.IpamRirsListRequest) -> operations.IpamRirsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/rirs/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRirsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.IpamRirsList200ApplicationJSON])
                res.ipam_rirs_list_200_application_json_object = out

        return res

    
    def ipam_rirs_partial_update(self, request: operations.IpamRirsPartialUpdateRequest) -> operations.IpamRirsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/rirs/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRirsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Rir])
                res.rir = out

        return res

    
    def ipam_rirs_read(self, request: operations.IpamRirsReadRequest) -> operations.IpamRirsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/rirs/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRirsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Rir])
                res.rir = out

        return res

    
    def ipam_rirs_update(self, request: operations.IpamRirsUpdateRequest) -> operations.IpamRirsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/rirs/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRirsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Rir])
                res.rir = out

        return res

    
    def ipam_roles_create(self, request: operations.IpamRolesCreateRequest) -> operations.IpamRolesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/roles/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRolesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Role])
                res.role = out

        return res

    
    def ipam_roles_delete(self, request: operations.IpamRolesDeleteRequest) -> operations.IpamRolesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/roles/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRolesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def ipam_roles_list(self, request: operations.IpamRolesListRequest) -> operations.IpamRolesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/roles/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRolesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.IpamRolesList200ApplicationJSON])
                res.ipam_roles_list_200_application_json_object = out

        return res

    
    def ipam_roles_partial_update(self, request: operations.IpamRolesPartialUpdateRequest) -> operations.IpamRolesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/roles/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRolesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Role])
                res.role = out

        return res

    
    def ipam_roles_read(self, request: operations.IpamRolesReadRequest) -> operations.IpamRolesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/roles/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRolesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Role])
                res.role = out

        return res

    
    def ipam_roles_update(self, request: operations.IpamRolesUpdateRequest) -> operations.IpamRolesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/roles/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRolesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Role])
                res.role = out

        return res

    
    def ipam_services_create(self, request: operations.IpamServicesCreateRequest) -> operations.IpamServicesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/services/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamServicesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Service])
                res.service = out

        return res

    
    def ipam_services_delete(self, request: operations.IpamServicesDeleteRequest) -> operations.IpamServicesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/services/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamServicesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def ipam_services_list(self, request: operations.IpamServicesListRequest) -> operations.IpamServicesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/services/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamServicesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.IpamServicesList200ApplicationJSON])
                res.ipam_services_list_200_application_json_object = out

        return res

    
    def ipam_services_partial_update(self, request: operations.IpamServicesPartialUpdateRequest) -> operations.IpamServicesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/services/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamServicesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Service])
                res.service = out

        return res

    
    def ipam_services_read(self, request: operations.IpamServicesReadRequest) -> operations.IpamServicesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/services/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamServicesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Service])
                res.service = out

        return res

    
    def ipam_services_update(self, request: operations.IpamServicesUpdateRequest) -> operations.IpamServicesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/services/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamServicesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Service])
                res.service = out

        return res

    
    def ipam_vlan_groups_create(self, request: operations.IpamVlanGroupsCreateRequest) -> operations.IpamVlanGroupsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/vlan-groups/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlanGroupsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VlanGroup])
                res.vlan_group = out

        return res

    
    def ipam_vlan_groups_delete(self, request: operations.IpamVlanGroupsDeleteRequest) -> operations.IpamVlanGroupsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/vlan-groups/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlanGroupsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def ipam_vlan_groups_list(self, request: operations.IpamVlanGroupsListRequest) -> operations.IpamVlanGroupsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/vlan-groups/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlanGroupsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.IpamVlanGroupsList200ApplicationJSON])
                res.ipam_vlan_groups_list_200_application_json_object = out

        return res

    
    def ipam_vlan_groups_partial_update(self, request: operations.IpamVlanGroupsPartialUpdateRequest) -> operations.IpamVlanGroupsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/vlan-groups/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlanGroupsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VlanGroup])
                res.vlan_group = out

        return res

    
    def ipam_vlan_groups_read(self, request: operations.IpamVlanGroupsReadRequest) -> operations.IpamVlanGroupsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/vlan-groups/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlanGroupsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VlanGroup])
                res.vlan_group = out

        return res

    
    def ipam_vlan_groups_update(self, request: operations.IpamVlanGroupsUpdateRequest) -> operations.IpamVlanGroupsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/vlan-groups/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlanGroupsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VlanGroup])
                res.vlan_group = out

        return res

    
    def ipam_vlans_create(self, request: operations.IpamVlansCreateRequest) -> operations.IpamVlansCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/vlans/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlansCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Vlan])
                res.vlan = out

        return res

    
    def ipam_vlans_delete(self, request: operations.IpamVlansDeleteRequest) -> operations.IpamVlansDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/vlans/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlansDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def ipam_vlans_list(self, request: operations.IpamVlansListRequest) -> operations.IpamVlansListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/vlans/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlansListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.IpamVlansList200ApplicationJSON])
                res.ipam_vlans_list_200_application_json_object = out

        return res

    
    def ipam_vlans_partial_update(self, request: operations.IpamVlansPartialUpdateRequest) -> operations.IpamVlansPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/vlans/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlansPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Vlan])
                res.vlan = out

        return res

    
    def ipam_vlans_read(self, request: operations.IpamVlansReadRequest) -> operations.IpamVlansReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/vlans/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlansReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Vlan])
                res.vlan = out

        return res

    
    def ipam_vlans_update(self, request: operations.IpamVlansUpdateRequest) -> operations.IpamVlansUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/vlans/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlansUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Vlan])
                res.vlan = out

        return res

    
    def ipam_vrfs_create(self, request: operations.IpamVrfsCreateRequest) -> operations.IpamVrfsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/vrfs/"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVrfsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Vrf])
                res.vrf = out

        return res

    
    def ipam_vrfs_delete(self, request: operations.IpamVrfsDeleteRequest) -> operations.IpamVrfsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/vrfs/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVrfsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def ipam_vrfs_list(self, request: operations.IpamVrfsListRequest) -> operations.IpamVrfsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/vrfs/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVrfsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.IpamVrfsList200ApplicationJSON])
                res.ipam_vrfs_list_200_application_json_object = out

        return res

    
    def ipam_vrfs_partial_update(self, request: operations.IpamVrfsPartialUpdateRequest) -> operations.IpamVrfsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/vrfs/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVrfsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Vrf])
                res.vrf = out

        return res

    
    def ipam_vrfs_read(self, request: operations.IpamVrfsReadRequest) -> operations.IpamVrfsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/vrfs/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVrfsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Vrf])
                res.vrf = out

        return res

    
    def ipam_vrfs_update(self, request: operations.IpamVrfsUpdateRequest) -> operations.IpamVrfsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/vrfs/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVrfsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Vrf])
                res.vrf = out

        return res

    