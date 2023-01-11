import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class General:
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

    
    def name_type(self, request: operations.NameTypeRequest) -> operations.NameTypeResponse:
        r"""Infer the likely type of a proper noun (personal name, brand name, place name etc.)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/nameType/{properNoun}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.NameTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProperNounCategorizedOut])
                res.proper_noun_categorized_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def name_type_batch(self, request: operations.NameTypeBatchRequest) -> operations.NameTypeBatchResponse:
        r"""Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/nameTypeBatch"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.NameTypeBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchProperNounCategorizedOut])
                res.batch_proper_noun_categorized_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def name_type_geo(self, request: operations.NameTypeGeoRequest) -> operations.NameTypeGeoResponse:
        r"""Infer the likely type of a proper noun (personal name, brand name, place name etc.)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/nameTypeGeo/{properNoun}/{countryIso2}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.NameTypeGeoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProperNounCategorizedOut])
                res.proper_noun_categorized_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def name_type_geo_batch(self, request: operations.NameTypeGeoBatchRequest) -> operations.NameTypeGeoBatchResponse:
        r"""Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/nameTypeGeoBatch"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.NameTypeGeoBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchProperNounCategorizedOut])
                res.batch_proper_noun_categorized_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    