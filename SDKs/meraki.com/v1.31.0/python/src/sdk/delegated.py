"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations
from typing import Any, Optional

class Delegated:
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
        
    def create_network_appliance_prefixes_delegated_static(self, request: operations.CreateNetworkAppliancePrefixesDelegatedStaticRequest) -> operations.CreateNetworkAppliancePrefixesDelegatedStaticResponse:
        r"""Add a static delegated prefix from a network
        Add a static delegated prefix from a network
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.CreateNetworkAppliancePrefixesDelegatedStaticRequest, base_url, '/networks/{networkId}/appliance/prefixes/delegated/statics', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "request_body", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        
        client = self._security_client
        
        http_res = client.request('POST', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.CreateNetworkAppliancePrefixesDelegatedStaticResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 201:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[dict[str, Any]])
                res.create_network_appliance_prefixes_delegated_static_201_application_json_object = out

        return res

    def delete_network_appliance_prefixes_delegated_static(self, request: operations.DeleteNetworkAppliancePrefixesDelegatedStaticRequest) -> operations.DeleteNetworkAppliancePrefixesDelegatedStaticResponse:
        r"""Delete a static delegated prefix from a network
        Delete a static delegated prefix from a network
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.DeleteNetworkAppliancePrefixesDelegatedStaticRequest, base_url, '/networks/{networkId}/appliance/prefixes/delegated/statics/{staticDelegatedPrefixId}', request)
        
        
        client = self._security_client
        
        http_res = client.request('DELETE', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DeleteNetworkAppliancePrefixesDelegatedStaticResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        

        return res

    def get_device_appliance_prefixes_delegated(self, request: operations.GetDeviceAppliancePrefixesDelegatedRequest) -> operations.GetDeviceAppliancePrefixesDelegatedResponse:
        r"""Return current delegated IPv6 prefixes on an appliance.
        Return current delegated IPv6 prefixes on an appliance.
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetDeviceAppliancePrefixesDelegatedRequest, base_url, '/devices/{serial}/appliance/prefixes/delegated', request)
        
        
        client = self._security_client
        
        http_res = client.request('GET', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetDeviceAppliancePrefixesDelegatedResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[list[dict[str, Any]]])
                res.get_device_appliance_prefixes_delegated_200_application_json_objects = out

        return res

    def get_device_appliance_prefixes_delegated_vlan_assignments(self, request: operations.GetDeviceAppliancePrefixesDelegatedVlanAssignmentsRequest) -> operations.GetDeviceAppliancePrefixesDelegatedVlanAssignmentsResponse:
        r"""Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
        Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetDeviceAppliancePrefixesDelegatedVlanAssignmentsRequest, base_url, '/devices/{serial}/appliance/prefixes/delegated/vlanAssignments', request)
        
        
        client = self._security_client
        
        http_res = client.request('GET', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetDeviceAppliancePrefixesDelegatedVlanAssignmentsResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[list[dict[str, Any]]])
                res.get_device_appliance_prefixes_delegated_vlan_assignments_200_application_json_objects = out

        return res

    def get_network_appliance_prefixes_delegated_static(self, request: operations.GetNetworkAppliancePrefixesDelegatedStaticRequest) -> operations.GetNetworkAppliancePrefixesDelegatedStaticResponse:
        r"""Return a static delegated prefix from a network
        Return a static delegated prefix from a network
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetNetworkAppliancePrefixesDelegatedStaticRequest, base_url, '/networks/{networkId}/appliance/prefixes/delegated/statics/{staticDelegatedPrefixId}', request)
        
        
        client = self._security_client
        
        http_res = client.request('GET', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetNetworkAppliancePrefixesDelegatedStaticResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.GetNetworkAppliancePrefixesDelegatedStatic200ApplicationJSON])
                res.get_network_appliance_prefixes_delegated_static_200_application_json_object = out

        return res

    def get_network_appliance_prefixes_delegated_statics(self, request: operations.GetNetworkAppliancePrefixesDelegatedStaticsRequest) -> operations.GetNetworkAppliancePrefixesDelegatedStaticsResponse:
        r"""List static delegated prefixes for a network
        List static delegated prefixes for a network
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetNetworkAppliancePrefixesDelegatedStaticsRequest, base_url, '/networks/{networkId}/appliance/prefixes/delegated/statics', request)
        
        
        client = self._security_client
        
        http_res = client.request('GET', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetNetworkAppliancePrefixesDelegatedStaticsResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[list[operations.GetNetworkAppliancePrefixesDelegatedStatics200ApplicationJSON]])
                res.get_network_appliance_prefixes_delegated_statics_200_application_json_objects = out

        return res

    def update_network_appliance_prefixes_delegated_static(self, request: operations.UpdateNetworkAppliancePrefixesDelegatedStaticRequest) -> operations.UpdateNetworkAppliancePrefixesDelegatedStaticResponse:
        r"""Update a static delegated prefix from a network
        Update a static delegated prefix from a network
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.UpdateNetworkAppliancePrefixesDelegatedStaticRequest, base_url, '/networks/{networkId}/appliance/prefixes/delegated/statics/{staticDelegatedPrefixId}', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "request_body", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        
        client = self._security_client
        
        http_res = client.request('PUT', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.UpdateNetworkAppliancePrefixesDelegatedStaticResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[dict[str, Any]])
                res.update_network_appliance_prefixes_delegated_static_200_application_json_object = out

        return res

    