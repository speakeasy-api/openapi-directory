import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Rules:
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

    
    def delete_rules_v4(self, request: operations.DeleteRulesV4Request) -> operations.DeleteRulesV4Response:
        r"""Deletes all rules
        Deletes all rules of the project.
        
        As an extra safety measure, you must also supply the header `x-confirm`
        with the value `true`. If this header is not explicitly specified on a
        **Delete All** request, the request fails.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/rules/v4"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRulesV4Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteRulesV4400ApplicationJSON])
                res.delete_rules_v4_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteRulesV4401ApplicationJSON])
                res.delete_rules_v4_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteRulesV4403ApplicationJSON])
                res.delete_rules_v4_403_application_json_object = out

        return res

    
    def delete_rules_v4_rule_id_(self, request: operations.DeleteRulesV4RuleIDRequest) -> operations.DeleteRulesV4RuleIDResponse:
        r"""Deletes a rule
        Deletes a single rule definition based on the provided rule ID.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/rules/v4/{ruleId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRulesV4RuleIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteRulesV4RuleID400ApplicationJSON])
                res.delete_rules_v4_rule_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteRulesV4RuleID401ApplicationJSON])
                res.delete_rules_v4_rule_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteRulesV4RuleID403ApplicationJSON])
                res.delete_rules_v4_rule_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteRulesV4RuleID404ApplicationJSON])
                res.delete_rules_v4_rule_id_404_application_json_object = out

        return res

    
    def get_rules_v4(self, request: operations.GetRulesV4Request) -> operations.GetRulesV4Response:
        r"""Gets all rules
        Provides all rule definitions in a paginated JSON object.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/rules/v4"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRulesV4Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRulesV4200ApplicationJSON])
                res.get_rules_v4_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRulesV4400ApplicationJSON])
                res.get_rules_v4_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRulesV4401ApplicationJSON])
                res.get_rules_v4_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRulesV4403ApplicationJSON])
                res.get_rules_v4_403_application_json_object = out

        return res

    
    def get_rules_v4_health(self) -> operations.GetRulesV4HealthResponse:
        r"""Gets service health
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/rules/v4/health"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRulesV4HealthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRulesV4Health200ApplicationJSON])
                res.get_rules_v4_health_200_application_json_object = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_rules_v4_version(self) -> operations.GetRulesV4VersionResponse:
        r"""Gets service version
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/rules/v4/version"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRulesV4VersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_rules_v4_version_200_application_json_any = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_rules_v4_rule_id_(self, request: operations.GetRulesV4RuleIDRequest) -> operations.GetRulesV4RuleIDResponse:
        r"""Gets a single rule
        Provides the details of a single rule definition.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/rules/v4/{ruleId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRulesV4RuleIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRulesV4RuleID200ApplicationJSON])
                res.get_rules_v4_rule_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRulesV4RuleID400ApplicationJSON])
                res.get_rules_v4_rule_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRulesV4RuleID401ApplicationJSON])
                res.get_rules_v4_rule_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRulesV4RuleID403ApplicationJSON])
                res.get_rules_v4_rule_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRulesV4RuleID404ApplicationJSON])
                res.get_rules_v4_rule_id_404_application_json_object = out

        return res

    
    def post_rules_v4(self, request: operations.PostRulesV4Request) -> operations.PostRulesV4Response:
        r"""Creates a rule
        Specify rule type and define threshold.
        
        Detention rule
        ---
        A detention rule can be created by defining the rule type to be `detention` and providing a
        threshold duration in seconds.
        When detention rule is associated to a device, a `DETENTION_STARTED` event gets triggered when
        the device has been continuously stationary longer than the threshold duration.
        `DETENTION_ENDED` event will be generated when the device starts moving again.
        
        Utilization rule
        ---
        A utilization rule can be created by defining the rule type to be `utilization` and providing a
        threshold duration in seconds.
        When utilization rule is associated to a device, a `UTILIZED` event is triggered when the asset
        starts moving to indicate the asset is utilized, and `UNUTILIZED` event will be generated when
        the asset stops moving and has been stationary longer than the threshold duration to indicate
        the asset is unutilized.
        
        Dwelling rule
        ---
        A dwelling rule can be created by defining the rule type to be `dwelling` and providing a
        threshold duration in seconds.
        When dwelling rule is associated to a device, a `DWELLING_STARTED` event gets triggered when
        the dwelling time inside any associated geofence exceeds the threshold duration.
        When the device then exits the geofence, `DWELLING_ENDED` event will be generated.
        
        Stock rule
        ---
        Stock rule can be created by defining rule type to be `stock`, providing a
        `geofenceId` and a threshold for `minVolume` and/or `maxVolume`.
        When the number of assets inside the specified geofence exceeds `maxVolume`, an `OVERSTOCK`
        event will be generated. Similarly when the number of assets inside the specified geofence
        goes below `minVolume`, an `UNDERSTOCK` event will be generated. When the number of
        assets inside the specified geofence is between `minVolume` and `maxVolume`, a `NORMAL_VOLUME`
        event will be generated. Note that the stock rule only detects the assets that are associated
        to the specified geofence.
        
        Successful requests have the HTTP status 201 and the response body provides the ID of the created rule.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/rules/v4"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRulesV4Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostRulesV4201ApplicationJSON])
                res.post_rules_v4_201_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostRulesV4400ApplicationJSON])
                res.post_rules_v4_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostRulesV4401ApplicationJSON])
                res.post_rules_v4_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostRulesV4403ApplicationJSON])
                res.post_rules_v4_403_application_json_object = out

        return res

    
    def put_rules_v4_rule_id_(self, request: operations.PutRulesV4RuleIDRequest) -> operations.PutRulesV4RuleIDResponse:
        r"""Updates a single rule
        Updates the rule name, description and rule evaluation details. Rule type cannot be updated. If some of the above properties are not provided in the request body, its value will be updated to null.
        
        After a successful update, the response provides updated rule details.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/rules/v4/{ruleId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRulesV4RuleIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutRulesV4RuleID200ApplicationJSON])
                res.put_rules_v4_rule_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutRulesV4RuleID400ApplicationJSON])
                res.put_rules_v4_rule_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutRulesV4RuleID401ApplicationJSON])
                res.put_rules_v4_rule_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutRulesV4RuleID403ApplicationJSON])
                res.put_rules_v4_rule_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutRulesV4RuleID404ApplicationJSON])
                res.put_rules_v4_rule_id_404_application_json_object = out

        return res

    