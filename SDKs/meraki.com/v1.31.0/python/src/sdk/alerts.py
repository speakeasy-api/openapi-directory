"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations
from typing import Any, Optional

class Alerts:
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
        
    def create_network_sensor_alerts_profile(self, request: operations.CreateNetworkSensorAlertsProfileRequest) -> operations.CreateNetworkSensorAlertsProfileResponse:
        r"""Creates a sensor alert profile for a network.
        Creates a sensor alert profile for a network.
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.CreateNetworkSensorAlertsProfileRequest, base_url, '/networks/{networkId}/sensor/alerts/profiles', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "request_body", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        
        client = self._security_client
        
        http_res = client.request('POST', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.CreateNetworkSensorAlertsProfileResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.CreateNetworkSensorAlertsProfile200ApplicationJSON])
                res.create_network_sensor_alerts_profile_200_application_json_object = out

        return res

    def create_organization_alerts_profile(self, request: operations.CreateOrganizationAlertsProfileRequest) -> operations.CreateOrganizationAlertsProfileResponse:
        r"""Create an organization-wide alert configuration
        Create an organization-wide alert configuration
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.CreateOrganizationAlertsProfileRequest, base_url, '/organizations/{organizationId}/alerts/profiles', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "request_body", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        
        client = self._security_client
        
        http_res = client.request('POST', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.CreateOrganizationAlertsProfileResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 201:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[dict[str, Any]])
                res.create_organization_alerts_profile_201_application_json_object = out

        return res

    def delete_network_sensor_alerts_profile(self, request: operations.DeleteNetworkSensorAlertsProfileRequest) -> operations.DeleteNetworkSensorAlertsProfileResponse:
        r"""Deletes a sensor alert profile from a network.
        Deletes a sensor alert profile from a network.
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.DeleteNetworkSensorAlertsProfileRequest, base_url, '/networks/{networkId}/sensor/alerts/profiles/{id}', request)
        
        
        client = self._security_client
        
        http_res = client.request('DELETE', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DeleteNetworkSensorAlertsProfileResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        

        return res

    def delete_organization_alerts_profile(self, request: operations.DeleteOrganizationAlertsProfileRequest) -> operations.DeleteOrganizationAlertsProfileResponse:
        r"""Removes an organization-wide alert config
        Removes an organization-wide alert config
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.DeleteOrganizationAlertsProfileRequest, base_url, '/organizations/{organizationId}/alerts/profiles/{alertConfigId}', request)
        
        
        client = self._security_client
        
        http_res = client.request('DELETE', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DeleteOrganizationAlertsProfileResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        

        return res

    def get_network_alerts_history(self, request: operations.GetNetworkAlertsHistoryRequest) -> operations.GetNetworkAlertsHistoryResponse:
        r"""Return the alert history for this network
        Return the alert history for this network
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetNetworkAlertsHistoryRequest, base_url, '/networks/{networkId}/alerts/history', request)
        
        query_params = utils.get_query_params(operations.GetNetworkAlertsHistoryRequest, request)
        
        client = self._security_client
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetNetworkAlertsHistoryResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            res.headers = http_res.headers
            
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[list[operations.GetNetworkAlertsHistory200ApplicationJSON]])
                res.get_network_alerts_history_200_application_json_objects = out

        return res

    def get_network_alerts_settings(self, request: operations.GetNetworkAlertsSettingsRequest) -> operations.GetNetworkAlertsSettingsResponse:
        r"""Return the alert configuration for this network
        Return the alert configuration for this network
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetNetworkAlertsSettingsRequest, base_url, '/networks/{networkId}/alerts/settings', request)
        
        
        client = self._security_client
        
        http_res = client.request('GET', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetNetworkAlertsSettingsResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[dict[str, Any]])
                res.get_network_alerts_settings_200_application_json_object = out

        return res

    def get_network_health_alerts(self, request: operations.GetNetworkHealthAlertsRequest) -> operations.GetNetworkHealthAlertsResponse:
        r"""Return all global alerts on this network
        Return all global alerts on this network
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetNetworkHealthAlertsRequest, base_url, '/networks/{networkId}/health/alerts', request)
        
        
        client = self._security_client
        
        http_res = client.request('GET', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetNetworkHealthAlertsResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[list[operations.GetNetworkHealthAlerts200ApplicationJSON]])
                res.get_network_health_alerts_200_application_json_objects = out

        return res

    def get_network_sensor_alerts_current_overview_by_metric(self, request: operations.GetNetworkSensorAlertsCurrentOverviewByMetricRequest) -> operations.GetNetworkSensorAlertsCurrentOverviewByMetricResponse:
        r"""Return an overview of currently alerting sensors by metric
        Return an overview of currently alerting sensors by metric
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetNetworkSensorAlertsCurrentOverviewByMetricRequest, base_url, '/networks/{networkId}/sensor/alerts/current/overview/byMetric', request)
        
        
        client = self._security_client
        
        http_res = client.request('GET', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetNetworkSensorAlertsCurrentOverviewByMetricResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.GetNetworkSensorAlertsCurrentOverviewByMetric200ApplicationJSON])
                res.get_network_sensor_alerts_current_overview_by_metric_200_application_json_object = out

        return res

    def get_network_sensor_alerts_overview_by_metric(self, request: operations.GetNetworkSensorAlertsOverviewByMetricRequest) -> operations.GetNetworkSensorAlertsOverviewByMetricResponse:
        r"""Return an overview of alert occurrences over a timespan, by metric
        Return an overview of alert occurrences over a timespan, by metric
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetNetworkSensorAlertsOverviewByMetricRequest, base_url, '/networks/{networkId}/sensor/alerts/overview/byMetric', request)
        
        query_params = utils.get_query_params(operations.GetNetworkSensorAlertsOverviewByMetricRequest, request)
        
        client = self._security_client
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetNetworkSensorAlertsOverviewByMetricResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[list[operations.GetNetworkSensorAlertsOverviewByMetric200ApplicationJSON]])
                res.get_network_sensor_alerts_overview_by_metric_200_application_json_objects = out

        return res

    def get_network_sensor_alerts_profile(self, request: operations.GetNetworkSensorAlertsProfileRequest) -> operations.GetNetworkSensorAlertsProfileResponse:
        r"""Show details of a sensor alert profile for a network.
        Show details of a sensor alert profile for a network.
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetNetworkSensorAlertsProfileRequest, base_url, '/networks/{networkId}/sensor/alerts/profiles/{id}', request)
        
        
        client = self._security_client
        
        http_res = client.request('GET', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetNetworkSensorAlertsProfileResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.GetNetworkSensorAlertsProfile200ApplicationJSON])
                res.get_network_sensor_alerts_profile_200_application_json_object = out

        return res

    def get_network_sensor_alerts_profiles(self, request: operations.GetNetworkSensorAlertsProfilesRequest) -> operations.GetNetworkSensorAlertsProfilesResponse:
        r"""Lists all sensor alert profiles for a network.
        Lists all sensor alert profiles for a network.
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetNetworkSensorAlertsProfilesRequest, base_url, '/networks/{networkId}/sensor/alerts/profiles', request)
        
        
        client = self._security_client
        
        http_res = client.request('GET', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetNetworkSensorAlertsProfilesResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[list[operations.GetNetworkSensorAlertsProfiles200ApplicationJSON]])
                res.get_network_sensor_alerts_profiles_200_application_json_objects = out

        return res

    def get_organization_alerts_profiles(self, request: operations.GetOrganizationAlertsProfilesRequest) -> operations.GetOrganizationAlertsProfilesResponse:
        r"""List all organization-wide alert configurations
        List all organization-wide alert configurations
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetOrganizationAlertsProfilesRequest, base_url, '/organizations/{organizationId}/alerts/profiles', request)
        
        
        client = self._security_client
        
        http_res = client.request('GET', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetOrganizationAlertsProfilesResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[list[dict[str, Any]]])
                res.get_organization_alerts_profiles_200_application_json_objects = out

        return res

    def update_network_alerts_settings(self, request: operations.UpdateNetworkAlertsSettingsRequest) -> operations.UpdateNetworkAlertsSettingsResponse:
        r"""Update the alert configuration for this network
        Update the alert configuration for this network
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.UpdateNetworkAlertsSettingsRequest, base_url, '/networks/{networkId}/alerts/settings', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "request_body", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        
        client = self._security_client
        
        http_res = client.request('PUT', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.UpdateNetworkAlertsSettingsResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[dict[str, Any]])
                res.update_network_alerts_settings_200_application_json_object = out

        return res

    def update_network_sensor_alerts_profile(self, request: operations.UpdateNetworkSensorAlertsProfileRequest) -> operations.UpdateNetworkSensorAlertsProfileResponse:
        r"""Updates a sensor alert profile for a network.
        Updates a sensor alert profile for a network.
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.UpdateNetworkSensorAlertsProfileRequest, base_url, '/networks/{networkId}/sensor/alerts/profiles/{id}', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "request_body", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        
        client = self._security_client
        
        http_res = client.request('PUT', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.UpdateNetworkSensorAlertsProfileResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.UpdateNetworkSensorAlertsProfile200ApplicationJSON])
                res.update_network_sensor_alerts_profile_200_application_json_object = out

        return res

    def update_organization_alerts_profile(self, request: operations.UpdateOrganizationAlertsProfileRequest) -> operations.UpdateOrganizationAlertsProfileResponse:
        r"""Update an organization-wide alert config
        Update an organization-wide alert config
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.UpdateOrganizationAlertsProfileRequest, base_url, '/organizations/{organizationId}/alerts/profiles/{alertConfigId}', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "request_body", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        
        client = self._security_client
        
        http_res = client.request('PUT', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.UpdateOrganizationAlertsProfileResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[dict[str, Any]])
                res.update_organization_alerts_profile_200_application_json_object = out

        return res

    