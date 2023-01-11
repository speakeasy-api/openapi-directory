import requests
from typing import Optional
from sdk.models import operations
from . import utils

class AssetsReturns:
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

    
    def post_assets_returns(self, request: operations.PostAssetsReturnsRequest) -> operations.PostAssetsReturnsResponse:
        r"""Arithmetic Returns
        Compute the arithmetic return(s) of one or several asset(s) for one or several time period(s).
        
        References
        * [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/assets/returns"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsReturnsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsReturns200ApplicationJSON])
                res.post_assets_returns_200_application_json_object = out

        return res

    
    def post_assets_returns_average(self, request: operations.PostAssetsReturnsAverageRequest) -> operations.PostAssetsReturnsAverageResponse:
        r"""Arithmetic Average Return
        Compute the arithmetic average of the return(s) of one or several asset(s).
        
        References
        * [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/assets/returns/average"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAssetsReturnsAverageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAssetsReturnsAverage200ApplicationJSON])
                res.post_assets_returns_average_200_application_json_object = out

        return res

    