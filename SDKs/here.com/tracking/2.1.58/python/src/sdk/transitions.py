import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Transitions:
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

    
    def get_transitions_v2_devices_tracking_id_(self, request: operations.GetTransitionsV2DevicesTrackingIDRequest) -> operations.GetTransitionsV2DevicesTrackingIDResponse:
        r"""Gets transitions for a device
        Gets all transitions that were recorded within a specific time range.
        You define the range with `before` and `after` timestamps. A successful
        response contains an array of transitions that were recorded after the
        first timestamp and before the second.
        
        Transitions are listed in descending order based on the timestamp.
        
        Note:
        ---
        
        To ensure a fast response, always provide both `before` and `after` timestamps.
        
        If no values are supplied `after` defaults to 0, and `before` defaults
        to the current system time.
        
        The `count` and `pageToken` parameters provide pagination for results
        where a large volume of data matches the given time range.
        
        In this case, `count` is the number of records returned per page along with
        a `pageToken` header in the returned HTTP response. The `pageToken` indicates
        the next available page in the matching result set. To get the next page of
        records, submit `pageToken` as a query parameter in your next request. The default
        number of records per page is 100, which is also the maximum number of
        records per page.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/transitions/v2/devices/{trackingId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTransitionsV2DevicesTrackingIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTransitionsV2DevicesTrackingID200ApplicationJSON])
                res.get_transitions_v2_devices_tracking_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTransitionsV2DevicesTrackingID400ApplicationJSON])
                res.get_transitions_v2_devices_tracking_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTransitionsV2DevicesTrackingID401ApplicationJSON])
                res.get_transitions_v2_devices_tracking_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTransitionsV2DevicesTrackingID403ApplicationJSON])
                res.get_transitions_v2_devices_tracking_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTransitionsV2DevicesTrackingID404ApplicationJSON])
                res.get_transitions_v2_devices_tracking_id_404_application_json_object = out

        return res

    
    def get_transitions_v2_health(self) -> operations.GetTransitionsV2HealthResponse:
        r"""Gets service health
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/transitions/v2/health"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTransitionsV2HealthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTransitionsV2Health200ApplicationJSON])
                res.get_transitions_v2_health_200_application_json_object = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_transitions_v2_version(self) -> operations.GetTransitionsV2VersionResponse:
        r"""Gets service version
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/transitions/v2/version"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTransitionsV2VersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_transitions_v2_version_200_application_json_any = out
        elif r.status_code == 500:
            pass

        return res

    