import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class GeofenceAssociations:
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

    
    def delete_geofence_associations_v2_geofence_id_tracking_id_(self, request: operations.DeleteGeofenceAssociationsV2GeofenceIDTrackingIDRequest) -> operations.DeleteGeofenceAssociationsV2GeofenceIDTrackingIDResponse:
        r"""Disassociates a device and a geofence
        Notification will no longer be generated when the device enters or exits this geofence.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/geofence-associations/v2/{geofenceId}/{trackingId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteGeofenceAssociationsV2GeofenceIDTrackingIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteGeofenceAssociationsV2GeofenceIDTrackingID400ApplicationJSON])
                res.delete_geofence_associations_v2_geofence_id_tracking_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteGeofenceAssociationsV2GeofenceIDTrackingID401ApplicationJSON])
                res.delete_geofence_associations_v2_geofence_id_tracking_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteGeofenceAssociationsV2GeofenceIDTrackingID403ApplicationJSON])
                res.delete_geofence_associations_v2_geofence_id_tracking_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteGeofenceAssociationsV2GeofenceIDTrackingID404ApplicationJSON])
                res.delete_geofence_associations_v2_geofence_id_tracking_id_404_application_json_object = out

        return res

    
    def get_geofence_associations_v2_health(self) -> operations.GetGeofenceAssociationsV2HealthResponse:
        r"""Gets service health
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/geofence-associations/v2/health"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeofenceAssociationsV2HealthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetGeofenceAssociationsV2Health200ApplicationJSON])
                res.get_geofence_associations_v2_health_200_application_json_object = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_geofence_associations_v2_version(self) -> operations.GetGeofenceAssociationsV2VersionResponse:
        r"""Gets service version
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/geofence-associations/v2/version"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeofenceAssociationsV2VersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_geofence_associations_v2_version_200_application_json_any = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_geofence_associations_v2_geofence_id_devices(self, request: operations.GetGeofenceAssociationsV2GeofenceIDDevicesRequest) -> operations.GetGeofenceAssociationsV2GeofenceIDDevicesResponse:
        r"""Gets devices associated with this geofence
        This returns a list of devices that are associated with this geofence.
        
        Note: A device appearing in this list does not mean the device is inside the geofence.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/geofence-associations/v2/{geofenceId}/devices", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeofenceAssociationsV2GeofenceIDDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetGeofenceAssociationsV2GeofenceIDDevices200ApplicationJSON])
                res.get_geofence_associations_v2_geofence_id_devices_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetGeofenceAssociationsV2GeofenceIDDevices400ApplicationJSON])
                res.get_geofence_associations_v2_geofence_id_devices_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetGeofenceAssociationsV2GeofenceIDDevices401ApplicationJSON])
                res.get_geofence_associations_v2_geofence_id_devices_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetGeofenceAssociationsV2GeofenceIDDevices403ApplicationJSON])
                res.get_geofence_associations_v2_geofence_id_devices_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetGeofenceAssociationsV2GeofenceIDDevices404ApplicationJSON])
                res.get_geofence_associations_v2_geofence_id_devices_404_application_json_object = out

        return res

    
    def put_geofence_associations_v2_geofence_id_tracking_id_(self, request: operations.PutGeofenceAssociationsV2GeofenceIDTrackingIDRequest) -> operations.PutGeofenceAssociationsV2GeofenceIDTrackingIDResponse:
        r"""Associates a device with a geofence
        Notifications will be generated when the device enters or exits this geofence
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/geofence-associations/v2/{geofenceId}/{trackingId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutGeofenceAssociationsV2GeofenceIDTrackingIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 201:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutGeofenceAssociationsV2GeofenceIDTrackingID400ApplicationJSON])
                res.put_geofence_associations_v2_geofence_id_tracking_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutGeofenceAssociationsV2GeofenceIDTrackingID401ApplicationJSON])
                res.put_geofence_associations_v2_geofence_id_tracking_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutGeofenceAssociationsV2GeofenceIDTrackingID403ApplicationJSON])
                res.put_geofence_associations_v2_geofence_id_tracking_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutGeofenceAssociationsV2GeofenceIDTrackingID404ApplicationJSON])
                res.put_geofence_associations_v2_geofence_id_tracking_id_404_application_json_object = out

        return res

    