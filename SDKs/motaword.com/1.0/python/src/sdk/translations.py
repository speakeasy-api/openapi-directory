import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Translations:
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

    
    def get_document_translations(self, request: operations.GetDocumentTranslationsRequest) -> operations.GetDocumentTranslationsResponse:
        r"""Get a list of strings and its translations in the document.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/documents/{documentId}/translations", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDocumentTranslationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StringList])
                res.string_list = out

        return res

    
    def get_document_translations_for_language(self, request: operations.GetDocumentTranslationsForLanguageRequest) -> operations.GetDocumentTranslationsForLanguageResponse:
        r"""Get a list of strings and its translations in the document for this target language of the project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/documents/{documentId}/translations/{language}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDocumentTranslationsForLanguageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StringList])
                res.string_list = out

        return res

    
    def get_project_translations(self, request: operations.GetProjectTranslationsRequest) -> operations.GetProjectTranslationsResponse:
        r"""Deprecated. Use /projects/{projectId}/strings instead.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/translations", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProjectTranslationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StringList])
                res.string_list = out

        return res

    
    def get_project_translations_for_language(self, request: operations.GetProjectTranslationsForLanguageRequest) -> operations.GetProjectTranslationsForLanguageResponse:
        r"""Deprecated. use /projects/{projectId}/strings/{language} instead.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/translations/{language}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProjectTranslationsForLanguageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StringList])
                res.string_list = out

        return res

    