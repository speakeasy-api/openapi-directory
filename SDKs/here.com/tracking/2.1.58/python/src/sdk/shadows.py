import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Shadows:
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

    
    def delete_shadows_v2_tracking_id_(self, request: operations.DeleteShadowsV2TrackingIDRequest) -> operations.DeleteShadowsV2TrackingIDResponse:
        r"""Clears the device shadow
        Deletes the information inside a device's shadow object. The shadow object
        itself is retained, but all values for `desired` and `reported`
        properties are cleared.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/shadows/v2/{trackingId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteShadowsV2TrackingIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteShadowsV2TrackingID400ApplicationJSON])
                res.delete_shadows_v2_tracking_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteShadowsV2TrackingID401ApplicationJSON])
                res.delete_shadows_v2_tracking_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteShadowsV2TrackingID403ApplicationJSON])
                res.delete_shadows_v2_tracking_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteShadowsV2TrackingID404ApplicationJSON])
                res.delete_shadows_v2_tracking_id_404_application_json_object = out

        return res

    
    def get_shadows_v2_health(self) -> operations.GetShadowsV2HealthResponse:
        r"""Gets service health
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/shadows/v2/health"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShadowsV2HealthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShadowsV2Health200ApplicationJSON])
                res.get_shadows_v2_health_200_application_json_object = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_shadows_v2_version(self) -> operations.GetShadowsV2VersionResponse:
        r"""Gets service version
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/shadows/v2/version"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShadowsV2VersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_shadows_v2_version_200_application_json_any = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_shadows_v2_tracking_id_(self, request: operations.GetShadowsV2TrackingIDRequest) -> operations.GetShadowsV2TrackingIDResponse:
        r"""Gets the device shadow
        Provides a shadow object that contains `reported` and `desired` properties for a device.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/shadows/v2/{trackingId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShadowsV2TrackingIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShadowsV2TrackingID200ApplicationJSON])
                res.get_shadows_v2_tracking_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShadowsV2TrackingID400ApplicationJSON])
                res.get_shadows_v2_tracking_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShadowsV2TrackingID401ApplicationJSON])
                res.get_shadows_v2_tracking_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShadowsV2TrackingID403ApplicationJSON])
                res.get_shadows_v2_tracking_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShadowsV2TrackingID404ApplicationJSON])
                res.get_shadows_v2_tracking_id_404_application_json_object = out

        return res

    
    def get_shadows_v2_tracking_id_state_(self, request: operations.GetShadowsV2TrackingIDStateRequest) -> operations.GetShadowsV2TrackingIDStateResponse:
        r"""Gets the value for a property
        Gets the value for the requested state. You can use request either
        `desired` or `reported` device state.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/shadows/v2/{trackingId}/{state}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShadowsV2TrackingIDStateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_shadows_v2_tracking_id_state_200_application_json_any_of = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShadowsV2TrackingIDState400ApplicationJSON])
                res.get_shadows_v2_tracking_id_state_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShadowsV2TrackingIDState401ApplicationJSON])
                res.get_shadows_v2_tracking_id_state_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShadowsV2TrackingIDState403ApplicationJSON])
                res.get_shadows_v2_tracking_id_state_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShadowsV2TrackingIDState404ApplicationJSON])
                res.get_shadows_v2_tracking_id_state_404_application_json_object = out

        return res

    
    def get_shadows_v2_tracking_id_state_selector_(self, request: operations.GetShadowsV2TrackingIDStateSelectorRequest) -> operations.GetShadowsV2TrackingIDStateSelectorResponse:
        r"""Gets the value for a property
        Gets the value for a single property in the given state. You can use
        JSON selectors to select values for `desired` or `reported` properties.
        You can also reference a property by name, but if the property contains
        an object, the entire object is returned rather than a distinct value.
        
        The JSON selector can be nested like this: `payload/time/minutes`
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/shadows/v2/{trackingId}/{state}/{selector}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShadowsV2TrackingIDStateSelectorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_shadows_v2_tracking_id_state_selector_200_application_json_one_of = out
            if utils.match_content_type(content_type, "text/plain"):
                res.get_shadows_v2_tracking_id_state_selector_200_text_plain_string = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShadowsV2TrackingIDStateSelector400ApplicationJSON])
                res.get_shadows_v2_tracking_id_state_selector_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShadowsV2TrackingIDStateSelector401ApplicationJSON])
                res.get_shadows_v2_tracking_id_state_selector_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShadowsV2TrackingIDStateSelector403ApplicationJSON])
                res.get_shadows_v2_tracking_id_state_selector_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShadowsV2TrackingIDStateSelector404ApplicationJSON])
                res.get_shadows_v2_tracking_id_state_selector_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShadowsV2TrackingIDStateSelector422ApplicationJSON])
                res.get_shadows_v2_tracking_id_state_selector_422_application_json_object = out

        return res

    
    def get_shadows_v4(self, request: operations.GetShadowsV4Request) -> operations.GetShadowsV4Response:
        r"""Get all shadows
        Provides all shadow objects of a project in a paginated JSON object.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/shadows/v4"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShadowsV4Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShadowsV4200ApplicationJSON])
                res.get_shadows_v4_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShadowsV4400ApplicationJSON])
                res.get_shadows_v4_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShadowsV4401ApplicationJSON])
                res.get_shadows_v4_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetShadowsV4403ApplicationJSON])
                res.get_shadows_v4_403_application_json_object = out

        return res

    
    def post_shadows_v2_batch(self, request: operations.PostShadowsV2BatchRequest) -> operations.PostShadowsV2BatchResponse:
        r"""Gets a batch of device shadows
        Provides shadow objects for multiple devices. You can get shadows for a
        maximum of 100 devices per request.
        
        By providing `after` timestamp parameter the request will return only
        those shadow objects that were modified at or after the timestamp given
        in `after`. If `after` is not supplied it defaults to 0.
        
        Each returned shadow object consists of these properties:
        
        * `body` - The data that Shadows persists for the device (included on success)
        * `statusCode` - HTTP status code of the Shadows data, 200 indicates success, other values an error
        * `trackingId` - Tracking ID of the device the data is associated with (included when `appId` is not provided)
        * `appId` - Application identifier (included when `appId` is provided)
        * `externalId` - Application specific external ID (included when `appId` is provided)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/shadows/v2/batch"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostShadowsV2BatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[operations.PostShadowsV2Batch200ApplicationJSON]])
                res.post_shadows_v2_batch_200_application_json_objects = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostShadowsV2Batch400ApplicationJSON])
                res.post_shadows_v2_batch_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostShadowsV2Batch401ApplicationJSON])
                res.post_shadows_v2_batch_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostShadowsV2Batch403ApplicationJSON])
                res.post_shadows_v2_batch_403_application_json_object = out

        return res

    
    def put_shadows_v2_tracking_id_(self, request: operations.PutShadowsV2TrackingIDRequest) -> operations.PutShadowsV2TrackingIDResponse:
        r"""Updates the device shadow
        Updates the device shadow desired that is stored in HERE Tracking.
        
        The device shadow contains 'reported' and 'desired' configuration states
        for a device. Only 'desired' state can be updated with this end-point.
        Reported state is updated using ingestion end-point.
        
        Request
        ---
        
        The body is a shadow object with an update to `desired` configuration state.
        
        Response
        ---
        The response example shows the response to the previous request example
        where the `desired` state was updated.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/shadows/v2/{trackingId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutShadowsV2TrackingIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutShadowsV2TrackingID200ApplicationJSON])
                res.put_shadows_v2_tracking_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutShadowsV2TrackingID400ApplicationJSON])
                res.put_shadows_v2_tracking_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutShadowsV2TrackingID401ApplicationJSON])
                res.put_shadows_v2_tracking_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutShadowsV2TrackingID403ApplicationJSON])
                res.put_shadows_v2_tracking_id_403_application_json_object = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutShadowsV2TrackingID409ApplicationJSON])
                res.put_shadows_v2_tracking_id_409_application_json_object = out
        elif r.status_code == 413:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutShadowsV2TrackingID413ApplicationJSON])
                res.put_shadows_v2_tracking_id_413_application_json_object = out

        return res

    