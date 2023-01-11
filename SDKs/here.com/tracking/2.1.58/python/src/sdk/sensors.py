import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Sensors:
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

    
    def delete_sensors_v3(self, request: operations.DeleteSensorsV3Request) -> operations.DeleteSensorsV3Response:
        r"""Deletes all sensor rules
        Deletes all sensor rules created by the provided user account.
        
        As an extra safety measure, you must also supply the header `x-confirm`
        with the value `true`. If this header is not explicitly specified on a
        **Delete All** request, the request fails.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sensors/v3"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSensorsV3Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteSensorsV3400ApplicationJSON])
                res.delete_sensors_v3_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteSensorsV3401ApplicationJSON])
                res.delete_sensors_v3_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteSensorsV3403ApplicationJSON])
                res.delete_sensors_v3_403_application_json_object = out

        return res

    
    def delete_sensors_v3_sensor_rule_id_(self, request: operations.DeleteSensorsV3SensorRuleIDRequest) -> operations.DeleteSensorsV3SensorRuleIDResponse:
        r"""Deletes a sensor rule
        Deletes a single sensor rule definition based on the provided sensor rule ID.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sensors/v3/{sensorRuleId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSensorsV3SensorRuleIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteSensorsV3SensorRuleID400ApplicationJSON])
                res.delete_sensors_v3_sensor_rule_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteSensorsV3SensorRuleID401ApplicationJSON])
                res.delete_sensors_v3_sensor_rule_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteSensorsV3SensorRuleID403ApplicationJSON])
                res.delete_sensors_v3_sensor_rule_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteSensorsV3SensorRuleID404ApplicationJSON])
                res.delete_sensors_v3_sensor_rule_id_404_application_json_object = out

        return res

    
    def get_sensors_v3(self, request: operations.GetSensorsV3Request) -> operations.GetSensorsV3Response:
        r"""Gets all sensor rules
        Provides all sensor rule definitions in a paginated JSON object.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sensors/v3"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSensorsV3Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSensorsV3200ApplicationJSON])
                res.get_sensors_v3_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSensorsV3400ApplicationJSON])
                res.get_sensors_v3_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSensorsV3401ApplicationJSON])
                res.get_sensors_v3_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSensorsV3403ApplicationJSON])
                res.get_sensors_v3_403_application_json_object = out

        return res

    
    def get_sensors_v3_health(self) -> operations.GetSensorsV3HealthResponse:
        r"""Gets service health
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sensors/v3/health"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSensorsV3HealthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSensorsV3Health200ApplicationJSON])
                res.get_sensors_v3_health_200_application_json_object = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_sensors_v3_version(self) -> operations.GetSensorsV3VersionResponse:
        r"""Gets service version
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sensors/v3/version"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSensorsV3VersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_sensors_v3_version_200_application_json_any = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_sensors_v3_sensor_rule_id_(self, request: operations.GetSensorsV3SensorRuleIDRequest) -> operations.GetSensorsV3SensorRuleIDResponse:
        r"""Gets a single sensor rule
        Provides the details of a single sensor rule definition such as the shape,
        name and description.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sensors/v3/{sensorRuleId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSensorsV3SensorRuleIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSensorsV3SensorRuleID200ApplicationJSON])
                res.get_sensors_v3_sensor_rule_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSensorsV3SensorRuleID400ApplicationJSON])
                res.get_sensors_v3_sensor_rule_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSensorsV3SensorRuleID401ApplicationJSON])
                res.get_sensors_v3_sensor_rule_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSensorsV3SensorRuleID403ApplicationJSON])
                res.get_sensors_v3_sensor_rule_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSensorsV3SensorRuleID404ApplicationJSON])
                res.get_sensors_v3_sensor_rule_id_404_application_json_object = out

        return res

    
    def post_sensors_v3(self, request: operations.PostSensorsV3Request) -> operations.PostSensorsV3Response:
        r"""Creates a sensor rule
        Successful requests have the HTTP status 201 and the response body provides
        the ID of the created sensor rule.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sensors/v3"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSensorsV3Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostSensorsV3201ApplicationJSON])
                res.post_sensors_v3_201_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostSensorsV3400ApplicationJSON])
                res.post_sensors_v3_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostSensorsV3401ApplicationJSON])
                res.post_sensors_v3_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostSensorsV3403ApplicationJSON])
                res.post_sensors_v3_403_application_json_object = out

        return res

    
    def put_sensors_v3_sensor_rule_id_(self, request: operations.PutSensorsV3SensorRuleIDRequest) -> operations.PutSensorsV3SensorRuleIDResponse:
        r"""Updates a single sensor rule
        Update the sensor rule name, description and range. If some of the above properties are not provided in the request body, its value will be updated to null. After a successful update, the response provides updated sensor rule details.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sensors/v3/{sensorRuleId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSensorsV3SensorRuleIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutSensorsV3SensorRuleID200ApplicationJSON])
                res.put_sensors_v3_sensor_rule_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutSensorsV3SensorRuleID400ApplicationJSON])
                res.put_sensors_v3_sensor_rule_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutSensorsV3SensorRuleID401ApplicationJSON])
                res.put_sensors_v3_sensor_rule_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutSensorsV3SensorRuleID403ApplicationJSON])
                res.put_sensors_v3_sensor_rule_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutSensorsV3SensorRuleID404ApplicationJSON])
                res.put_sensors_v3_sensor_rule_id_404_application_json_object = out

        return res

    