"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations
from typing import Any, Optional

class CustomPerformanceClasses:
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
        
    def create_network_appliance_traffic_shaping_custom_performance_class(self, request: operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest) -> operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse:
        r"""Add a custom performance class for an MX network
        Add a custom performance class for an MX network
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest, base_url, '/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "request_body", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        
        client = self._security_client
        
        http_res = client.request('POST', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 201:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[dict[str, Any]])
                res.create_network_appliance_traffic_shaping_custom_performance_class_201_application_json_object = out

        return res

    def delete_network_appliance_traffic_shaping_custom_performance_class(self, request: operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest) -> operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse:
        r"""Delete a custom performance class from an MX network
        Delete a custom performance class from an MX network
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest, base_url, '/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId}', request)
        
        
        client = self._security_client
        
        http_res = client.request('DELETE', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        

        return res

    def get_network_appliance_traffic_shaping_custom_performance_class(self, request: operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest) -> operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse:
        r"""Return a custom performance class for an MX network
        Return a custom performance class for an MX network
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest, base_url, '/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId}', request)
        
        
        client = self._security_client
        
        http_res = client.request('GET', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[dict[str, Any]])
                res.get_network_appliance_traffic_shaping_custom_performance_class_200_application_json_object = out

        return res

    def get_network_appliance_traffic_shaping_custom_performance_classes(self, request: operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest) -> operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse:
        r"""List all custom performance classes for an MX network
        List all custom performance classes for an MX network
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest, base_url, '/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses', request)
        
        
        client = self._security_client
        
        http_res = client.request('GET', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[list[dict[str, Any]]])
                res.get_network_appliance_traffic_shaping_custom_performance_classes_200_application_json_objects = out

        return res

    def update_network_appliance_traffic_shaping_custom_performance_class(self, request: operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest) -> operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse:
        r"""Update a custom performance class for an MX network
        Update a custom performance class for an MX network
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest, base_url, '/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId}', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "request_body", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        
        client = self._security_client
        
        http_res = client.request('PUT', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[dict[str, Any]])
                res.update_network_appliance_traffic_shaping_custom_performance_class_200_application_json_object = out

        return res

    