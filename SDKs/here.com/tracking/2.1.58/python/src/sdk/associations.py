import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Associations:
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

    
    def delete_associations_v3_tracking_id_geofences_geofence_id_(self, request: operations.DeleteAssociationsV3TrackingIDGeofencesGeofenceIDRequest) -> operations.DeleteAssociationsV3TrackingIDGeofencesGeofenceIDResponse:
        r"""Disassociates a device and a geofence
        Deletes an association between a geofence and a device based on the provided geofenceId and
        trackingId.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/associations/v3/{trackingId}/geofences/{geofenceId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAssociationsV3TrackingIDGeofencesGeofenceIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAssociationsV3TrackingIDGeofencesGeofenceID400ApplicationJSON])
                res.delete_associations_v3_tracking_id_geofences_geofence_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAssociationsV3TrackingIDGeofencesGeofenceID401ApplicationJSON])
                res.delete_associations_v3_tracking_id_geofences_geofence_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAssociationsV3TrackingIDGeofencesGeofenceID403ApplicationJSON])
                res.delete_associations_v3_tracking_id_geofences_geofence_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAssociationsV3TrackingIDGeofencesGeofenceID404ApplicationJSON])
                res.delete_associations_v3_tracking_id_geofences_geofence_id_404_application_json_object = out

        return res

    
    def delete_associations_v3_tracking_id_rules_rule_id_(self, request: operations.DeleteAssociationsV3TrackingIDRulesRuleIDRequest) -> operations.DeleteAssociationsV3TrackingIDRulesRuleIDResponse:
        r"""Disassociates a device and a rule
        Deletes an association between a rule and a device based on the provided ruleId and trackingId.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/associations/v3/{trackingId}/rules/{ruleId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAssociationsV3TrackingIDRulesRuleIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAssociationsV3TrackingIDRulesRuleID400ApplicationJSON])
                res.delete_associations_v3_tracking_id_rules_rule_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAssociationsV3TrackingIDRulesRuleID401ApplicationJSON])
                res.delete_associations_v3_tracking_id_rules_rule_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAssociationsV3TrackingIDRulesRuleID403ApplicationJSON])
                res.delete_associations_v3_tracking_id_rules_rule_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAssociationsV3TrackingIDRulesRuleID404ApplicationJSON])
                res.delete_associations_v3_tracking_id_rules_rule_id_404_application_json_object = out

        return res

    
    def delete_associations_v3_tracking_id_sensors_sensor_rule_id_(self, request: operations.DeleteAssociationsV3TrackingIDSensorsSensorRuleIDRequest) -> operations.DeleteAssociationsV3TrackingIDSensorsSensorRuleIDResponse:
        r"""Disassociates a device and a sensor rule
        Deletes the association between sensor rule and device based on the provided
        sensorRuleId and trackingId.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/associations/v3/{trackingId}/sensors/{sensorRuleId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAssociationsV3TrackingIDSensorsSensorRuleIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAssociationsV3TrackingIDSensorsSensorRuleID400ApplicationJSON])
                res.delete_associations_v3_tracking_id_sensors_sensor_rule_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAssociationsV3TrackingIDSensorsSensorRuleID401ApplicationJSON])
                res.delete_associations_v3_tracking_id_sensors_sensor_rule_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAssociationsV3TrackingIDSensorsSensorRuleID403ApplicationJSON])
                res.delete_associations_v3_tracking_id_sensors_sensor_rule_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAssociationsV3TrackingIDSensorsSensorRuleID404ApplicationJSON])
                res.delete_associations_v3_tracking_id_sensors_sensor_rule_id_404_application_json_object = out

        return res

    
    def get_associations_v3_geofences_geofence_id_(self, request: operations.GetAssociationsV3GeofencesGeofenceIDRequest) -> operations.GetAssociationsV3GeofencesGeofenceIDResponse:
        r"""Gets all devices associated with a geofence
        Returns all devices associated with the geofence in a paginated JSON object.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/associations/v3/geofences/{geofenceId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAssociationsV3GeofencesGeofenceIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAssociationsV3GeofencesGeofenceID200ApplicationJSON])
                res.get_associations_v3_geofences_geofence_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAssociationsV3GeofencesGeofenceID400ApplicationJSON])
                res.get_associations_v3_geofences_geofence_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAssociationsV3GeofencesGeofenceID401ApplicationJSON])
                res.get_associations_v3_geofences_geofence_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAssociationsV3GeofencesGeofenceID403ApplicationJSON])
                res.get_associations_v3_geofences_geofence_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAssociationsV3GeofencesGeofenceID404ApplicationJSON])
                res.get_associations_v3_geofences_geofence_id_404_application_json_object = out

        return res

    
    def get_associations_v3_health(self) -> operations.GetAssociationsV3HealthResponse:
        r"""Gets service health
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/associations/v3/health"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAssociationsV3HealthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAssociationsV3Health200ApplicationJSON])
                res.get_associations_v3_health_200_application_json_object = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_associations_v3_rules_rule_id_(self, request: operations.GetAssociationsV3RulesRuleIDRequest) -> operations.GetAssociationsV3RulesRuleIDResponse:
        r"""Gets all devices associated with a rule
        Returns all devices associated with the rule in a paginated JSON object.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/associations/v3/rules/{ruleId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAssociationsV3RulesRuleIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAssociationsV3RulesRuleID200ApplicationJSON])
                res.get_associations_v3_rules_rule_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAssociationsV3RulesRuleID400ApplicationJSON])
                res.get_associations_v3_rules_rule_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAssociationsV3RulesRuleID401ApplicationJSON])
                res.get_associations_v3_rules_rule_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAssociationsV3RulesRuleID403ApplicationJSON])
                res.get_associations_v3_rules_rule_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAssociationsV3RulesRuleID404ApplicationJSON])
                res.get_associations_v3_rules_rule_id_404_application_json_object = out

        return res

    
    def get_associations_v3_sensors_sensor_rule_id_(self, request: operations.GetAssociationsV3SensorsSensorRuleIDRequest) -> operations.GetAssociationsV3SensorsSensorRuleIDResponse:
        r"""Gets all devices associated with a sensor rule
        Returns all devices associated with the sensor rule in a paginated JSON object.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/associations/v3/sensors/{sensorRuleId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAssociationsV3SensorsSensorRuleIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAssociationsV3SensorsSensorRuleID200ApplicationJSON])
                res.get_associations_v3_sensors_sensor_rule_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAssociationsV3SensorsSensorRuleID400ApplicationJSON])
                res.get_associations_v3_sensors_sensor_rule_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAssociationsV3SensorsSensorRuleID401ApplicationJSON])
                res.get_associations_v3_sensors_sensor_rule_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAssociationsV3SensorsSensorRuleID403ApplicationJSON])
                res.get_associations_v3_sensors_sensor_rule_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAssociationsV3SensorsSensorRuleID404ApplicationJSON])
                res.get_associations_v3_sensors_sensor_rule_id_404_application_json_object = out

        return res

    
    def get_associations_v3_version(self) -> operations.GetAssociationsV3VersionResponse:
        r"""Gets service version
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/associations/v3/version"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAssociationsV3VersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_associations_v3_version_200_application_json_any = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_associations_v3_tracking_id_geofences(self, request: operations.GetAssociationsV3TrackingIDGeofencesRequest) -> operations.GetAssociationsV3TrackingIDGeofencesResponse:
        r"""Gets geofences associated with the device
        Returns a list of geofences associated with the device.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/associations/v3/{trackingId}/geofences", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAssociationsV3TrackingIDGeofencesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAssociationsV3TrackingIDGeofences200ApplicationJSON])
                res.get_associations_v3_tracking_id_geofences_200_application_json_object = out
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAssociationsV3TrackingIDGeofences400ApplicationJSON])
                res.get_associations_v3_tracking_id_geofences_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAssociationsV3TrackingIDGeofences401ApplicationJSON])
                res.get_associations_v3_tracking_id_geofences_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAssociationsV3TrackingIDGeofences403ApplicationJSON])
                res.get_associations_v3_tracking_id_geofences_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAssociationsV3TrackingIDGeofences404ApplicationJSON])
                res.get_associations_v3_tracking_id_geofences_404_application_json_object = out

        return res

    
    def get_associations_v3_tracking_id_rules(self, request: operations.GetAssociationsV3TrackingIDRulesRequest) -> operations.GetAssociationsV3TrackingIDRulesResponse:
        r"""Gets all rules associated with the device
        Returns a list of rules associated with the device.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/associations/v3/{trackingId}/rules", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAssociationsV3TrackingIDRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAssociationsV3TrackingIDRules200ApplicationJSON])
                res.get_associations_v3_tracking_id_rules_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAssociationsV3TrackingIDRules400ApplicationJSON])
                res.get_associations_v3_tracking_id_rules_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAssociationsV3TrackingIDRules401ApplicationJSON])
                res.get_associations_v3_tracking_id_rules_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAssociationsV3TrackingIDRules403ApplicationJSON])
                res.get_associations_v3_tracking_id_rules_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAssociationsV3TrackingIDRules404ApplicationJSON])
                res.get_associations_v3_tracking_id_rules_404_application_json_object = out

        return res

    
    def get_associations_v3_tracking_id_sensors(self, request: operations.GetAssociationsV3TrackingIDSensorsRequest) -> operations.GetAssociationsV3TrackingIDSensorsResponse:
        r"""Gets sensor rules associated with the device
        Returns a list of sensor rules associated with the device.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/associations/v3/{trackingId}/sensors", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAssociationsV3TrackingIDSensorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAssociationsV3TrackingIDSensors200ApplicationJSON])
                res.get_associations_v3_tracking_id_sensors_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAssociationsV3TrackingIDSensors400ApplicationJSON])
                res.get_associations_v3_tracking_id_sensors_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAssociationsV3TrackingIDSensors401ApplicationJSON])
                res.get_associations_v3_tracking_id_sensors_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAssociationsV3TrackingIDSensors403ApplicationJSON])
                res.get_associations_v3_tracking_id_sensors_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAssociationsV3TrackingIDSensors404ApplicationJSON])
                res.get_associations_v3_tracking_id_sensors_404_application_json_object = out

        return res

    
    def put_associations_v3_tracking_id_geofences_geofence_id_(self, request: operations.PutAssociationsV3TrackingIDGeofencesGeofenceIDRequest) -> operations.PutAssociationsV3TrackingIDGeofencesGeofenceIDResponse:
        r"""Associates a device to a geofence
        Associates a device to a geofence. Whenever the device enters or exits the associated
        geofence, an event is generated.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/associations/v3/{trackingId}/geofences/{geofenceId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAssociationsV3TrackingIDGeofencesGeofenceIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 201:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutAssociationsV3TrackingIDGeofencesGeofenceID400ApplicationJSON])
                res.put_associations_v3_tracking_id_geofences_geofence_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutAssociationsV3TrackingIDGeofencesGeofenceID401ApplicationJSON])
                res.put_associations_v3_tracking_id_geofences_geofence_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutAssociationsV3TrackingIDGeofencesGeofenceID403ApplicationJSON])
                res.put_associations_v3_tracking_id_geofences_geofence_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutAssociationsV3TrackingIDGeofencesGeofenceID404ApplicationJSON])
                res.put_associations_v3_tracking_id_geofences_geofence_id_404_application_json_object = out

        return res

    
    def put_associations_v3_tracking_id_rules_rule_id_(self, request: operations.PutAssociationsV3TrackingIDRulesRuleIDRequest) -> operations.PutAssociationsV3TrackingIDRulesRuleIDResponse:
        r"""Associates a device to a rule
        Associates a device to a rule. Whenever it breaks the rule, an event is generated.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/associations/v3/{trackingId}/rules/{ruleId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAssociationsV3TrackingIDRulesRuleIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 201:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutAssociationsV3TrackingIDRulesRuleID400ApplicationJSON])
                res.put_associations_v3_tracking_id_rules_rule_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutAssociationsV3TrackingIDRulesRuleID401ApplicationJSON])
                res.put_associations_v3_tracking_id_rules_rule_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutAssociationsV3TrackingIDRulesRuleID403ApplicationJSON])
                res.put_associations_v3_tracking_id_rules_rule_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutAssociationsV3TrackingIDRulesRuleID404ApplicationJSON])
                res.put_associations_v3_tracking_id_rules_rule_id_404_application_json_object = out

        return res

    
    def put_associations_v3_tracking_id_sensors_sensor_rule_id_(self, request: operations.PutAssociationsV3TrackingIDSensorsSensorRuleIDRequest) -> operations.PutAssociationsV3TrackingIDSensorsSensorRuleIDResponse:
        r"""Associates a device with a sensor rule
        Associates a device with a sensor rule.
        
        The associated rule is communicated to the `desired.system.sensorAlarmConfig` in device
        shadow.
        
        A single tracker can only have one sensor rule per sensor type associated.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/associations/v3/{trackingId}/sensors/{sensorRuleId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAssociationsV3TrackingIDSensorsSensorRuleIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 201:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutAssociationsV3TrackingIDSensorsSensorRuleID400ApplicationJSON])
                res.put_associations_v3_tracking_id_sensors_sensor_rule_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutAssociationsV3TrackingIDSensorsSensorRuleID401ApplicationJSON])
                res.put_associations_v3_tracking_id_sensors_sensor_rule_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutAssociationsV3TrackingIDSensorsSensorRuleID403ApplicationJSON])
                res.put_associations_v3_tracking_id_sensors_sensor_rule_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutAssociationsV3TrackingIDSensorsSensorRuleID404ApplicationJSON])
                res.put_associations_v3_tracking_id_sensors_sensor_rule_id_404_application_json_object = out

        return res

    