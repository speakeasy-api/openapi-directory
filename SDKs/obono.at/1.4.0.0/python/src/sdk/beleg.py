import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Beleg:
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

    
    def add_beleg(self, request: operations.AddBelegRequest) -> operations.AddBelegResponse:
        r"""Signs a receipt and stores it in the \"Datenerfassungsprotokoll\".
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/registrierkassen/{registrierkasseUuid}/belege/{belegUuid}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddBelegResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 409:
            pass
        elif r.status_code == 415:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def create_abschluss(self, request: operations.CreateAbschlussRequest) -> operations.CreateAbschlussResponse:
        r"""Generates an `Abschlussbeleg`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/registrierkassen/{registrierkasseUuid}/abschluss", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAbschlussResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            

        return res

    
    def get_beleg(self, request: operations.GetBelegRequest) -> operations.GetBelegResponse:
        r"""Retrieves a particular `Beleg` from the \"Datenerfassungsprotokoll\".
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/registrierkassen/{registrierkasseUuid}/belege/{belegUuid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBelegResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Beleg])
                res.beleg = out
        elif r.status_code == 404:
            pass

        return res

    
    def get_belege(self, request: operations.GetBelegeRequest) -> operations.GetBelegeResponse:
        r"""Retrieves the `Beleg` collection from the \"Datenerfassungsprotokoll\".
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/registrierkassen/{registrierkasseUuid}/belege", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBelegeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Belege])
                res.belege = out

        return res

    
    def get_belege_beleg_uuid_(self, request: operations.GetBelegeBelegUUIDRequest) -> operations.GetBelegeBelegUUIDResponse:
        r"""Retrieves a particular `Beleg` from the \"Datenerfassungsprotokoll\".
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/belege/{belegUuid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBelegeBelegUUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Beleg])
                res.beleg = out
        elif r.status_code == 404:
            pass

        return res

    