import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Traces:
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

    
    def delete_traces_v2_tracking_id_(self, request: operations.DeleteTracesV2TrackingIDRequest) -> operations.DeleteTracesV2TrackingIDResponse:
        r"""Deletes the entire history of the device. This will also trigger deletion of the entire event history of the device.
        Deletes all historical data for a device including **traces** and **transitions**.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/traces/v2/{trackingId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTracesV2TrackingIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteTracesV2TrackingID400ApplicationJSON])
                res.delete_traces_v2_tracking_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteTracesV2TrackingID401ApplicationJSON])
                res.delete_traces_v2_tracking_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteTracesV2TrackingID403ApplicationJSON])
                res.delete_traces_v2_tracking_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteTracesV2TrackingID404ApplicationJSON])
                res.delete_traces_v2_tracking_id_404_application_json_object = out

        return res

    
    def get_traces_v2_health(self) -> operations.GetTracesV2HealthResponse:
        r"""Gets service health
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/traces/v2/health"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTracesV2HealthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTracesV2Health200ApplicationJSON])
                res.get_traces_v2_health_200_application_json_object = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_traces_v2_version(self) -> operations.GetTracesV2VersionResponse:
        r"""Gets service version
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/traces/v2/version"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTracesV2VersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_traces_v2_version_200_application_json_any = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_traces_v2_tracking_id_(self, request: operations.GetTracesV2TrackingIDRequest) -> operations.GetTracesV2TrackingIDResponse:
        r"""Gets the trace within a specified time range
        Gets all traces that were recorded within the specified time range. Define the range with
        `before` and `after` timestamps. A successful response contains an array of traces that
        were recorded between (and including) `before` and `after` timestamps.
        
        If the trackingId is substituted with a valid shipmentId, the returned trace response is a
        composition of the traces of each segment. Traces are only returned for segments in
        `ongoing` and `completed` state.
        
        The `outliers` parameter can be used to select only traces that have
        been marked as outliers (if the parameter value is true), or only traces
        that have not been marked as outliers (if the parameter value is false).
        If the `outliers` parameter is not present, all traces will be returned,
        both nonoutliers and outliers.
        
        Traces are returned as an array in descending order based on timestamp.
        
        Note:
        ---
        To ensure a fast response, always provide both `before` and `after` timestamps.
        
        If no values are supplied `after` defaults to 0, and `before` defaults to the current
        system time.
        
        The `count` and `pageToken` parameters provide pagination for results where a large volume
        of data matches the given time range.
        
        In this case, `count` is the number of records returned per page along with a `pageToken`
        property in the returned HTTP response. The `pageToken` indicates the next available page
        in the matching result set. To get the next page of records, submit `pageToken` as a query
        parameter in your next request. Using the `pageToken` query parameter will override any
        additional `before` and `after` parameters.
        
        The default number of records per page is 1000, which is also the maximum number of records
        per page.
        
        In case of success, the response body contains an array of trace samples between the given
        timestamps (after <= timestamp <= before).
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/traces/v2/{trackingId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTracesV2TrackingIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTracesV2TrackingID200ApplicationJSON])
                res.get_traces_v2_tracking_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTracesV2TrackingID400ApplicationJSON])
                res.get_traces_v2_tracking_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTracesV2TrackingID401ApplicationJSON])
                res.get_traces_v2_tracking_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTracesV2TrackingID403ApplicationJSON])
                res.get_traces_v2_tracking_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTracesV2TrackingID404ApplicationJSON])
                res.get_traces_v2_tracking_id_404_application_json_object = out

        return res

    