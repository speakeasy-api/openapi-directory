import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class DeviceAssociations:
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

    
    def get_device_associations_v2_health(self) -> operations.GetDeviceAssociationsV2HealthResponse:
        r"""Gets service health
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/device-associations/v2/health"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceAssociationsV2HealthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDeviceAssociationsV2Health200ApplicationJSON])
                res.get_device_associations_v2_health_200_application_json_object = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_device_associations_v2_version(self) -> operations.GetDeviceAssociationsV2VersionResponse:
        r"""Gets service version
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/device-associations/v2/version"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceAssociationsV2VersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_device_associations_v2_version_200_application_json_any = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_device_associations_v2_tracking_id_geofences(self, request: operations.GetDeviceAssociationsV2TrackingIDGeofencesRequest) -> operations.GetDeviceAssociationsV2TrackingIDGeofencesResponse:
        r"""Retrieves geofences associated with the device
        Returns all fences tracking id has been associated with
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/device-associations/v2/{trackingId}/geofences", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceAssociationsV2TrackingIDGeofencesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDeviceAssociationsV2TrackingIDGeofences200ApplicationJSON])
                res.get_device_associations_v2_tracking_id_geofences_200_application_json_object = out
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDeviceAssociationsV2TrackingIDGeofences400ApplicationJSON])
                res.get_device_associations_v2_tracking_id_geofences_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDeviceAssociationsV2TrackingIDGeofences401ApplicationJSON])
                res.get_device_associations_v2_tracking_id_geofences_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDeviceAssociationsV2TrackingIDGeofences403ApplicationJSON])
                res.get_device_associations_v2_tracking_id_geofences_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDeviceAssociationsV2TrackingIDGeofences404ApplicationJSON])
                res.get_device_associations_v2_tracking_id_geofences_404_application_json_object = out

        return res

    