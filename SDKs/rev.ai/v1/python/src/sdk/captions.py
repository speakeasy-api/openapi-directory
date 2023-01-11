import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Captions:
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

    
    def get_captions(self, request: operations.GetCaptionsRequest) -> operations.GetCaptionsResponse:
        r"""Get Captions
        Returns the caption output for a transcription job. We currently support SubRip (SRT) and Web Video Text Tracks (VTT) output.
        Caption output format can be specified in the `Accept` header. Returns SRT by default.
        ***
        Note: For streaming jobs, transient failure of our storage during a live session may prevent the final hypothesis elements from saving properly, resulting in an incomplete caption file. This is rare, but not impossible.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{id}/captions", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCaptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/x-subrip"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/vtt"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_captions_401_application_problem_plus_json_any = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCaptions404ApplicationProblemPlusJSON])
                res.get_captions_404_application_problem_plus_json_object = out
        elif r.status_code == 405:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCaptions405ApplicationProblemPlusJSON])
                res.get_captions_405_application_problem_plus_json_object = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCaptions406ApplicationProblemPlusJSON])
                res.get_captions_406_application_problem_plus_json_object = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCaptions409ApplicationProblemPlusJSON])
                res.get_captions_409_application_problem_plus_json_object = out

        return res

    