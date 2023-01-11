import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Metadata:
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

    
    def delete_metadata_v2_devices_tracking_id_(self, request: operations.DeleteMetadataV2DevicesTrackingIDRequest) -> operations.DeleteMetadataV2DevicesTrackingIDResponse:
        r"""Deletes all metadata associated with a tracker
        Deletes all the metadata associated with the tracker
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/metadata/v2/devices/{trackingId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMetadataV2DevicesTrackingIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteMetadataV2DevicesTrackingID400ApplicationJSON])
                res.delete_metadata_v2_devices_tracking_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteMetadataV2DevicesTrackingID401ApplicationJSON])
                res.delete_metadata_v2_devices_tracking_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteMetadataV2DevicesTrackingID403ApplicationJSON])
                res.delete_metadata_v2_devices_tracking_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteMetadataV2DevicesTrackingID404ApplicationJSON])
                res.delete_metadata_v2_devices_tracking_id_404_application_json_object = out

        return res

    
    def delete_metadata_v2_geofences_geofence_id_(self, request: operations.DeleteMetadataV2GeofencesGeofenceIDRequest) -> operations.DeleteMetadataV2GeofencesGeofenceIDResponse:
        r"""Deletes all metadata associated with a geofence
        Deletes all the metadata associated with the geofence
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/metadata/v2/geofences/{geofenceId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMetadataV2GeofencesGeofenceIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteMetadataV2GeofencesGeofenceID400ApplicationJSON])
                res.delete_metadata_v2_geofences_geofence_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteMetadataV2GeofencesGeofenceID401ApplicationJSON])
                res.delete_metadata_v2_geofences_geofence_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteMetadataV2GeofencesGeofenceID403ApplicationJSON])
                res.delete_metadata_v2_geofences_geofence_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteMetadataV2GeofencesGeofenceID404ApplicationJSON])
                res.delete_metadata_v2_geofences_geofence_id_404_application_json_object = out

        return res

    
    def delete_metadata_v2_sensor_rules_sensor_rule_id_(self, request: operations.DeleteMetadataV2SensorRulesSensorRuleIDRequest) -> operations.DeleteMetadataV2SensorRulesSensorRuleIDResponse:
        r"""Deletes all metadata associated with a sensor rule
        Delete all the metadata associated with the sensor rule
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/metadata/v2/sensorRules/{sensorRuleId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMetadataV2SensorRulesSensorRuleIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteMetadataV2SensorRulesSensorRuleID400ApplicationJSON])
                res.delete_metadata_v2_sensor_rules_sensor_rule_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteMetadataV2SensorRulesSensorRuleID401ApplicationJSON])
                res.delete_metadata_v2_sensor_rules_sensor_rule_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteMetadataV2SensorRulesSensorRuleID403ApplicationJSON])
                res.delete_metadata_v2_sensor_rules_sensor_rule_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteMetadataV2SensorRulesSensorRuleID404ApplicationJSON])
                res.delete_metadata_v2_sensor_rules_sensor_rule_id_404_application_json_object = out

        return res

    
    def get_metadata_v2_devices_tracking_id_(self, request: operations.GetMetadataV2DevicesTrackingIDRequest) -> operations.GetMetadataV2DevicesTrackingIDResponse:
        r"""Gets metadata associated with the trackingId
        Provides metadata as a JSON object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/metadata/v2/devices/{trackingId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMetadataV2DevicesTrackingIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMetadataV2DevicesTrackingID200ApplicationJSON])
                res.get_metadata_v2_devices_tracking_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMetadataV2DevicesTrackingID400ApplicationJSON])
                res.get_metadata_v2_devices_tracking_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMetadataV2DevicesTrackingID401ApplicationJSON])
                res.get_metadata_v2_devices_tracking_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMetadataV2DevicesTrackingID403ApplicationJSON])
                res.get_metadata_v2_devices_tracking_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMetadataV2DevicesTrackingID404ApplicationJSON])
                res.get_metadata_v2_devices_tracking_id_404_application_json_object = out

        return res

    
    def get_metadata_v2_geofences_geofence_id_(self, request: operations.GetMetadataV2GeofencesGeofenceIDRequest) -> operations.GetMetadataV2GeofencesGeofenceIDResponse:
        r"""Gets metadata associated with the geofence
        Provides metadata as a JSON object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/metadata/v2/geofences/{geofenceId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMetadataV2GeofencesGeofenceIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMetadataV2GeofencesGeofenceID200ApplicationJSON])
                res.get_metadata_v2_geofences_geofence_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMetadataV2GeofencesGeofenceID400ApplicationJSON])
                res.get_metadata_v2_geofences_geofence_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMetadataV2GeofencesGeofenceID401ApplicationJSON])
                res.get_metadata_v2_geofences_geofence_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMetadataV2GeofencesGeofenceID403ApplicationJSON])
                res.get_metadata_v2_geofences_geofence_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMetadataV2GeofencesGeofenceID404ApplicationJSON])
                res.get_metadata_v2_geofences_geofence_id_404_application_json_object = out

        return res

    
    def get_metadata_v2_health(self) -> operations.GetMetadataV2HealthResponse:
        r"""Gets service health
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/metadata/v2/health"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMetadataV2HealthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMetadataV2Health200ApplicationJSON])
                res.get_metadata_v2_health_200_application_json_object = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_metadata_v2_sensor_rules_sensor_rule_id_(self, request: operations.GetMetadataV2SensorRulesSensorRuleIDRequest) -> operations.GetMetadataV2SensorRulesSensorRuleIDResponse:
        r"""Gets metadata associated with the sensor rule
        Provides metadata as a JSON object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/metadata/v2/sensorRules/{sensorRuleId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMetadataV2SensorRulesSensorRuleIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMetadataV2SensorRulesSensorRuleID200ApplicationJSON])
                res.get_metadata_v2_sensor_rules_sensor_rule_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMetadataV2SensorRulesSensorRuleID400ApplicationJSON])
                res.get_metadata_v2_sensor_rules_sensor_rule_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMetadataV2SensorRulesSensorRuleID401ApplicationJSON])
                res.get_metadata_v2_sensor_rules_sensor_rule_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMetadataV2SensorRulesSensorRuleID403ApplicationJSON])
                res.get_metadata_v2_sensor_rules_sensor_rule_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMetadataV2SensorRulesSensorRuleID404ApplicationJSON])
                res.get_metadata_v2_sensor_rules_sensor_rule_id_404_application_json_object = out

        return res

    
    def get_metadata_v2_version(self) -> operations.GetMetadataV2VersionResponse:
        r"""Gets service version
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/metadata/v2/version"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMetadataV2VersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_metadata_v2_version_200_application_json_any = out
        elif r.status_code == 500:
            pass

        return res

    
    def post_metadata_v2_devices_batch(self, request: operations.PostMetadataV2DevicesBatchRequest) -> operations.PostMetadataV2DevicesBatchResponse:
        r"""Gets a batch of metadata associated with the devices
        Provides metadata as a JSON object.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/metadata/v2/devices/batch"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMetadataV2DevicesBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostMetadataV2DevicesBatch200ApplicationJSON])
                res.post_metadata_v2_devices_batch_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostMetadataV2DevicesBatch400ApplicationJSON])
                res.post_metadata_v2_devices_batch_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostMetadataV2DevicesBatch401ApplicationJSON])
                res.post_metadata_v2_devices_batch_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostMetadataV2DevicesBatch403ApplicationJSON])
                res.post_metadata_v2_devices_batch_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostMetadataV2DevicesBatch404ApplicationJSON])
                res.post_metadata_v2_devices_batch_404_application_json_object = out

        return res

    
    def post_metadata_v2_geofences_batch(self, request: operations.PostMetadataV2GeofencesBatchRequest) -> operations.PostMetadataV2GeofencesBatchResponse:
        r"""Gets a batch of metadata associated with the geofence
        Provides metadata as a JSON object.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/metadata/v2/geofences/batch"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMetadataV2GeofencesBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostMetadataV2GeofencesBatch200ApplicationJSON])
                res.post_metadata_v2_geofences_batch_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostMetadataV2GeofencesBatch400ApplicationJSON])
                res.post_metadata_v2_geofences_batch_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostMetadataV2GeofencesBatch401ApplicationJSON])
                res.post_metadata_v2_geofences_batch_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostMetadataV2GeofencesBatch403ApplicationJSON])
                res.post_metadata_v2_geofences_batch_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostMetadataV2GeofencesBatch404ApplicationJSON])
                res.post_metadata_v2_geofences_batch_404_application_json_object = out

        return res

    
    def post_metadata_v2_sensor_rules_batch(self, request: operations.PostMetadataV2SensorRulesBatchRequest) -> operations.PostMetadataV2SensorRulesBatchResponse:
        r"""Gets a batch of metadata associated with the sensor rules
        Provides metadata as a JSON object.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/metadata/v2/sensorRules/batch"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMetadataV2SensorRulesBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostMetadataV2SensorRulesBatch200ApplicationJSON])
                res.post_metadata_v2_sensor_rules_batch_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostMetadataV2SensorRulesBatch400ApplicationJSON])
                res.post_metadata_v2_sensor_rules_batch_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostMetadataV2SensorRulesBatch401ApplicationJSON])
                res.post_metadata_v2_sensor_rules_batch_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostMetadataV2SensorRulesBatch403ApplicationJSON])
                res.post_metadata_v2_sensor_rules_batch_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostMetadataV2SensorRulesBatch404ApplicationJSON])
                res.post_metadata_v2_sensor_rules_batch_404_application_json_object = out

        return res

    
    def put_metadata_v2_devices_tracking_id_(self, request: operations.PutMetadataV2DevicesTrackingIDRequest) -> operations.PutMetadataV2DevicesTrackingIDResponse:
        r"""Updates metadata object associated with a tracker
        Update the metadata object for the device. Provided metadata is
        merged with the existing metadata object (empty object in
        case there are no existing meta data); new keys are added, and
        the value of the existing keys is updated with the provided value.
        Adding value 'null' for a key deletes it from the metadata object.
        Successful request body contains the updated metadata object.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/metadata/v2/devices/{trackingId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutMetadataV2DevicesTrackingIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutMetadataV2DevicesTrackingID200ApplicationJSON])
                res.put_metadata_v2_devices_tracking_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutMetadataV2DevicesTrackingID400ApplicationJSON])
                res.put_metadata_v2_devices_tracking_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutMetadataV2DevicesTrackingID401ApplicationJSON])
                res.put_metadata_v2_devices_tracking_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutMetadataV2DevicesTrackingID403ApplicationJSON])
                res.put_metadata_v2_devices_tracking_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutMetadataV2DevicesTrackingID404ApplicationJSON])
                res.put_metadata_v2_devices_tracking_id_404_application_json_object = out

        return res

    
    def put_metadata_v2_geofences_geofence_id_(self, request: operations.PutMetadataV2GeofencesGeofenceIDRequest) -> operations.PutMetadataV2GeofencesGeofenceIDResponse:
        r"""Updates metadata object associated with a geofence
        Update the metadata object for the geofence. Provided metadata is
        merged with the existing metadata object (empty object in
        case there are no existing meta data); new keys are added, and
        the value of the existing keys is updated with the provided value.
        Adding value 'null' for a key deletes it from the metadata object.
        Successful request body contains the updated metadata object.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/metadata/v2/geofences/{geofenceId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutMetadataV2GeofencesGeofenceIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutMetadataV2GeofencesGeofenceID200ApplicationJSON])
                res.put_metadata_v2_geofences_geofence_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutMetadataV2GeofencesGeofenceID400ApplicationJSON])
                res.put_metadata_v2_geofences_geofence_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutMetadataV2GeofencesGeofenceID401ApplicationJSON])
                res.put_metadata_v2_geofences_geofence_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutMetadataV2GeofencesGeofenceID403ApplicationJSON])
                res.put_metadata_v2_geofences_geofence_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutMetadataV2GeofencesGeofenceID404ApplicationJSON])
                res.put_metadata_v2_geofences_geofence_id_404_application_json_object = out

        return res

    
    def put_metadata_v2_sensor_rules_sensor_rule_id_(self, request: operations.PutMetadataV2SensorRulesSensorRuleIDRequest) -> operations.PutMetadataV2SensorRulesSensorRuleIDResponse:
        r"""Updates metadata object associated with a sensor rule
        Update the metadata object for the sensor rule. Provided metadata is
        merged with the existing metadata object (empty object in
        case there are no existing meta data); new keys are added, and
        the value of the existing keys is updated with the provided value.
        Adding value 'null' for a key deletes it from the metadata object.
        Successful request body contains the updated metadata object.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/metadata/v2/sensorRules/{sensorRuleId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutMetadataV2SensorRulesSensorRuleIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutMetadataV2SensorRulesSensorRuleID200ApplicationJSON])
                res.put_metadata_v2_sensor_rules_sensor_rule_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutMetadataV2SensorRulesSensorRuleID400ApplicationJSON])
                res.put_metadata_v2_sensor_rules_sensor_rule_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutMetadataV2SensorRulesSensorRuleID401ApplicationJSON])
                res.put_metadata_v2_sensor_rules_sensor_rule_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutMetadataV2SensorRulesSensorRuleID403ApplicationJSON])
                res.put_metadata_v2_sensor_rules_sensor_rule_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutMetadataV2SensorRulesSensorRuleID404ApplicationJSON])
                res.put_metadata_v2_sensor_rules_sensor_rule_id_404_application_json_object = out

        return res

    