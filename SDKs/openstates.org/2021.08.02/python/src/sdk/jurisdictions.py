import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Jurisdictions:
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

    
    def jurisdiction_detail_jurisdictions_jurisdiction_id_get(self, request: operations.JurisdictionDetailJurisdictionsJurisdictionIDGetRequest) -> operations.JurisdictionDetailJurisdictionsJurisdictionIDGetResponse:
        r"""Jurisdiction Detail
        Get details on a single Jurisdiction (e.g. state or municipality). 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jurisdictions/{jurisdiction_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JurisdictionDetailJurisdictionsJurisdictionIDGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Jurisdiction])
                res.jurisdiction = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def jurisdiction_list_jurisdictions_get(self, request: operations.JurisdictionListJurisdictionsGetRequest) -> operations.JurisdictionListJurisdictionsGetResponse:
        r"""Jurisdiction List
        Get list of supported Jurisdictions, a Jurisdiction is a state or municipality.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/jurisdictions"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JurisdictionListJurisdictionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.JurisdictionList])
                res.jurisdiction_list = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    