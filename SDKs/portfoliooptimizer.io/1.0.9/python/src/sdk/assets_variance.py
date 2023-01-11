import requests
from typing import Optional
from sdk.models import operations
from . import utils

class AssetsVariance:
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

    
    def post_assets_variance(self, request: operations.PostAssetsVarianceRequest) -> operations.PostAssetsVarianceResponse:
        r"""Variance
        Compute the variance of one or several asset(s) from either:  
        * The asset(s) returns
        * The assets covariance matrix
        * The asset(s) volatility
        
        References
        * [Wikipedia, Variance](https://en.wikipedia.org/wiki/Variance)        
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/assets/variance"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsVarianceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsVariance200ApplicationJSON])
                res.post_assets_variance_200_application_json_object = out

        return res

    
    def post_assets_variance_sample(self, request: operations.PostAssetsVarianceSampleRequest) -> operations.PostAssetsVarianceSampleResponse:
        r"""Sample variance
        Compute the sample variance of one or several asset(s) from the asset(s) returns.
                
        > This endpoint is similar to the endpoint [`/assets/variance`](#post-/assets/variance), but uses [Bessel's correction](https://en.wikipedia.org/wiki/Bessel%27s_correction) to compute the variance.
        
        References
        * [Wikipedia, Variance](https://en.wikipedia.org/wiki/Variance)        
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/assets/variance/sample"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsVarianceSampleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsVarianceSample200ApplicationJSON])
                res.post_assets_variance_sample_200_application_json_object = out

        return res

    