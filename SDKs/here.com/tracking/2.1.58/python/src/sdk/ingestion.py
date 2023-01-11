import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Ingestion:
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

    
    def get_v2_health(self) -> operations.GetV2HealthResponse:
        r"""Gets service health
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/health"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV2HealthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetV2Health200ApplicationJSON])
                res.get_v2_health_200_application_json_object = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_v2_timestamp(self, request: operations.GetV2TimestampRequest) -> operations.GetV2TimestampResponse:
        r"""Gets the current timestamp
        Returns the server timestamp in seconds used to check the validity of a device's
        OAuth 1.0 header. Devices must synchronise with this timestamp to avoid
        clock skew.
        
        Tracking APIs use timestamp in milliseconds.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/timestamp"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV2TimestampResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetV2Timestamp200ApplicationJSON])
                res.get_v2_timestamp_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetV2Timestamp400ApplicationJSON])
                res.get_v2_timestamp_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetV2Timestamp401ApplicationJSON])
                res.get_v2_timestamp_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetV2Timestamp403ApplicationJSON])
                res.get_v2_timestamp_403_application_json_object = out

        return res

    
    def get_v2_version(self) -> operations.GetV2VersionResponse:
        r"""Gets service version
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/version"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV2VersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_v2_version_200_application_json_any = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_v3_health(self) -> operations.GetV3HealthResponse:
        r"""Gets service health
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/health"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3HealthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetV3Health200ApplicationJSON])
                res.get_v3_health_200_application_json_object = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_v3_version(self) -> operations.GetV3VersionResponse:
        r"""Gets service version
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/version"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3VersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_v3_version_200_application_json_any = out
        elif r.status_code == 500:
            pass

        return res

    
    def post_v2_(self, request: operations.PostV2Request) -> operations.PostV2Response:
        r"""Sends data and receives shadow
        A device uses its access token to send data to HERE Tracking.
        
        If the request is set to be synchronous, the response will be
        the desired state of the device shadow. If the request is set
        to be asynchronous, the response will be empty.
        
        To have a position associated with a device, the request body must contain
        either a `position` or a `scan` object (see the object definitions for
        details). If both are provided, the `scan` is resolved to a `position`. The
        more accurate of the two positions (provided and resolved) is used as the
        device's position.
        
        If a `scan` is provided, HERE Tracking will resolve the position asynchronously
        and return the desired state. The reported shadow will then be updated
        immediately after responding.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV2Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostV2200ApplicationJSON])
                res.post_v2_200_application_json_object = out
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostV2400ApplicationJSON])
                res.post_v2_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostV2401ApplicationJSON])
                res.post_v2_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostV2403ApplicationJSON])
                res.post_v2_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostV2404ApplicationJSON])
                res.post_v2_404_application_json_object = out
        elif r.status_code == 413:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostV2413ApplicationJSON])
                res.post_v2_413_application_json_object = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostV2429ApplicationJSON])
                res.post_v2_429_application_json_object = out

        return res

    
    def post_v2_token(self, request: operations.PostV2TokenRequest) -> operations.PostV2TokenResponse:
        r"""Requests a token for a registered device
        HERE Tracking requires that you sign your requests for tokens.
        The signature method uses the OAuth 1.0 standard. For more
        information on this standard, see the [OAuth Core
        1.0](https://oauth.net/core/1.0/) specification.
        
        > See the Authentication section for details on how to generate a signed token request.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/token"
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV2TokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostV2Token200ApplicationJSON])
                res.post_v2_token_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostV2Token400ApplicationJSON])
                res.post_v2_token_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostV2Token401ApplicationJSON])
                res.post_v2_token_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostV2Token403ApplicationJSON])
                res.post_v2_token_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostV2Token404ApplicationJSON])
                res.post_v2_token_404_application_json_object = out
        elif r.status_code == 412:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostV2Token412ApplicationJSON])
                res.post_v2_token_412_application_json_object = out

        return res

    
    def post_v3_(self, request: operations.PostV3Request) -> operations.PostV3Response:
        r"""Sends data for a device and receives shadow
        A device uses its access token to send data to HERE Tracking or owner sends data on behalf of a device.
        
        If owner ingests data on behalf of a device, the device can be either real or virtual device. Real device is identified with a tracking ID obtained from HERE Tracking. Virtual device is identified with application specific external ID and App ID which identifies the application.
        
        By default the request is synchronous and the response will be the desired state of the device shadow. If the request is set to be asynchronous, the response will be empty.
        
        To have a position associated with a device, the request body must contain either a `position` or a `scan` object (see the object definitions for details). If both are provided, the `scan` is resolved to a `position`. The more accurate of the two positions (provided and resolved) is used as the device's position.
        
        If a `scan` is provided, HERE Tracking will resolve the position asynchronously and return the desired state. The reported shadow will then be updated immediately after responding.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV3Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostV3200ApplicationJSON])
                res.post_v3_200_application_json_object = out
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostV3400ApplicationJSON])
                res.post_v3_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostV3401ApplicationJSON])
                res.post_v3_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostV3403ApplicationJSON])
                res.post_v3_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostV3404ApplicationJSON])
                res.post_v3_404_application_json_object = out
        elif r.status_code == 413:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostV3413ApplicationJSON])
                res.post_v3_413_application_json_object = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostV3429ApplicationJSON])
                res.post_v3_429_application_json_object = out

        return res

    
    def post_v3_batch(self, request: operations.PostV3BatchRequest) -> operations.PostV3BatchResponse:
        r"""Sends data for multiple devices
        Owner sends data to HERE Tracking on behalf of multiple devices.
        
        Single request can contain data for multiple devices. If the devices are virtual devices, they are identified with application specific external ID and App ID which identifies the application. Real devices are identified with tracking ID obtained from HERE Tracking.
        
        To have a position associated with a device, the request body must contain either a `position` or a `scan` object (see the object definitions for details). If both are provided, the `scan` is resolved to a `position`. The more accurate of the two positions (provided and resolved) is used as the device's position.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/batch"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV3BatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostV3Batch400ApplicationJSON])
                res.post_v3_batch_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostV3Batch401ApplicationJSON])
                res.post_v3_batch_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostV3Batch403ApplicationJSON])
                res.post_v3_batch_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostV3Batch404ApplicationJSON])
                res.post_v3_batch_404_application_json_object = out
        elif r.status_code == 413:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostV3Batch413ApplicationJSON])
                res.post_v3_batch_413_application_json_object = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostV3Batch429ApplicationJSON])
                res.post_v3_batch_429_application_json_object = out

        return res

    