import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Sim:
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

    
    def get_annotation_score(self, request: operations.GetAnnotationScoreRequest) -> operations.GetAnnotationScoreResponse:
        r"""Get annotation score
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sim/score"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnnotationScoreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SufficiencyOutput])
                res.sufficiency_output = out

        return res

    
    def get_sim_compare(self, request: operations.GetSimCompareRequest) -> operations.GetSimCompareResponse:
        r"""Compare a reference profile vs one profiles
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sim/compare"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSimCompareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SimResult])
                res.sim_result = out

        return res

    
    def get_sim_search(self, request: operations.GetSimSearchRequest) -> operations.GetSimSearchResponse:
        r"""Search for phenotypically similar diseases or model genes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sim/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSimSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SimResult])
                res.sim_result = out

        return res

    
    def post_annotation_score(self, request: operations.PostAnnotationScoreRequest) -> operations.PostAnnotationScoreResponse:
        r"""Get annotation score
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sim/score"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAnnotationScoreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SufficiencyOutput])
                res.sufficiency_output = out

        return res

    
    def post_sim_compare(self, request: operations.PostSimCompareRequest) -> operations.PostSimCompareResponse:
        r"""Compare a reference profile vs one or more profiles
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sim/compare"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSimCompareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SimResult])
                res.sim_result = out

        return res

    