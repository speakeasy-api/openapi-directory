import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class PatientNotification:
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

    
    def post_v0_5_patients_sms_on_notify(self, request: operations.PostV05PatientsSmsOnNotifyRequest) -> operations.PostV05PatientsSmsOnNotifyResponse:
        r"""Acknowledgment response for SMS notification sent to patient by HIP
        If the SMS notification is successfully sent to patient then \"status\" will be \"ACKNOWLEDGED\" with no error.
        If the SMS notification is failed then \"status\" will be \"ERRORED\" with error.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v0.5/patients/sms/on-notify"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05PatientsSmsOnNotifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    