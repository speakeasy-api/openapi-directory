import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class CustomMusic:
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

    
    def create_audio_renders(self, request: operations.CreateAudioRendersRequest) -> operations.CreateAudioRendersResponse:
        r"""Create rendered audio
        This endpoint creates rendered audio from timeline data. It returns a render ID that you can use to download the finished audio when it is ready. The render ID is valid for up to 48 hours.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/ai/audio/renders"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAudioRendersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.audio_renders_list_results = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def fetch_renders(self, request: operations.FetchRendersRequest) -> operations.FetchRendersResponse:
        r"""Get details about audio renders
        This endpoint shows the status of one or more audio renders, including download links for completed audio.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/ai/audio/renders"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchRendersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.audio_renders_list_results = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def list_custom_descriptors(self, request: operations.ListCustomDescriptorsRequest) -> operations.ListCustomDescriptorsResponse:
        r"""List computer audio descriptors
        This endpoint lists the descriptors that you can use in the audio regions in an audio render.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/ai/audio/descriptors"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCustomDescriptorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescriptorsListResult])
                res.descriptors_list_result = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def list_custom_instruments(self, request: operations.ListCustomInstrumentsRequest) -> operations.ListCustomInstrumentsResponse:
        r"""List computer audio instruments
        This endpoint lists the instruments that you can include in computer audio. If you specify more than one search parameter, the API uses an AND condition.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/ai/audio/instruments"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCustomInstrumentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InstrumentsListResult])
                res.instruments_list_result = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    