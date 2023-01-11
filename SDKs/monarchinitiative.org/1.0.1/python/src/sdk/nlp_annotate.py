import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class NlpAnnotate:
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

    
    def get_annotate(self, request: operations.GetAnnotateRequest) -> operations.GetAnnotateResponse:
        r"""Annotate a given text using SciGraph annotator
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/nlp/annotate/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnnotateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_annotate_entities(self, request: operations.GetAnnotateEntitiesRequest) -> operations.GetAnnotateEntitiesResponse:
        r"""Annotate a given content using SciGraph annotator and get all entities from content
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/nlp/annotate/entities"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnnotateEntitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EntityAnnotationResult])
                res.entity_annotation_result = out

        return res

    
    def post_annotate(self, request: operations.PostAnnotateRequest) -> operations.PostAnnotateResponse:
        r"""Annotate a given text using SciGraph annotator
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/nlp/annotate/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAnnotateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_annotate_entities(self, request: operations.PostAnnotateEntitiesRequest) -> operations.PostAnnotateEntitiesResponse:
        r"""Annotate a given content using SciGraph annotator and get all entities from content
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/nlp/annotate/entities"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAnnotateEntitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EntityAnnotationResult])
                res.entity_annotation_result = out

        return res

    