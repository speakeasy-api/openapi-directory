import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Transcript:
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

    
    def get_transcript_by_id(self, request: operations.GetTranscriptByIDRequest) -> operations.GetTranscriptByIDResponse:
        r"""Get Transcript By Id
        Returns the transcript for a completed transcription job. Transcript can be returned as either JSON or plaintext format. Transcript output format can be specified in the `Accept` header. Returns JSON by default.
        ***
        Note: For streaming jobs, transient failure of our storage during a live session may prevent the final hypothesis elements from saving properly, resulting in an incomplete transcript. This is rare, but not impossible. To guarantee 100% completeness, we recommend capturing all final hypothesis when you receive them on the client.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{id}/transcript", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTranscriptByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.rev.transcript.v1.0+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Transcript])
                res.transcript = out
            if utils.match_content_type(content_type, "text/plain"):
                res.transcript_text = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_transcript_by_id_401_application_problem_plus_json_any = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTranscriptByID404ApplicationProblemPlusJSON])
                res.get_transcript_by_id_404_application_problem_plus_json_object = out
        elif r.status_code == 406:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTranscriptByID406ApplicationProblemPlusJSON])
                res.get_transcript_by_id_406_application_problem_plus_json_object = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTranscriptByID409ApplicationProblemPlusJSON])
                res.get_transcript_by_id_409_application_problem_plus_json_object = out

        return res

    