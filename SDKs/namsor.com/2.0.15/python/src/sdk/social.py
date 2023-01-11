import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Social:
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

    
    def phone_code(self, request: operations.PhoneCodeRequest) -> operations.PhoneCodeResponse:
        r"""[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, given a personal name and formatted / unformatted phone number.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/phoneCode/{firstName}/{lastName}/{phoneNumber}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PhoneCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirstLastNamePhoneCodedOut])
                res.first_last_name_phone_coded_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def phone_code_batch(self, request: operations.PhoneCodeBatchRequest) -> operations.PhoneCodeBatchResponse:
        r"""[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, detecting automatically the local context given a name and formatted / unformatted phone number.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/phoneCodeBatch"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PhoneCodeBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchFirstLastNamePhoneCodedOut])
                res.batch_first_last_name_phone_coded_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def phone_code_geo(self, request: operations.PhoneCodeGeoRequest) -> operations.PhoneCodeGeoResponse:
        r"""[USES 11 UNITS PER NAME] Infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/phoneCodeGeo/{firstName}/{lastName}/{phoneNumber}/{countryIso2}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PhoneCodeGeoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirstLastNamePhoneCodedOut])
                res.first_last_name_phone_coded_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def phone_code_geo_batch(self, request: operations.PhoneCodeGeoBatchRequest) -> operations.PhoneCodeGeoBatchResponse:
        r"""[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, with a local context (ISO2 country of residence).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/phoneCodeGeoBatch"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PhoneCodeGeoBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchFirstLastNamePhoneCodedOut])
                res.batch_first_last_name_phone_coded_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def phone_code_geo_feedback_loop(self, request: operations.PhoneCodeGeoFeedbackLoopRequest) -> operations.PhoneCodeGeoFeedbackLoopResponse:
        r"""[CREDITS 1 UNIT] Feedback loop to better infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/phoneCodeGeoFeedbackLoop/{firstName}/{lastName}/{phoneNumber}/{phoneNumberE164}/{countryIso2}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PhoneCodeGeoFeedbackLoopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirstLastNamePhoneCodedOut])
                res.first_last_name_phone_coded_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    