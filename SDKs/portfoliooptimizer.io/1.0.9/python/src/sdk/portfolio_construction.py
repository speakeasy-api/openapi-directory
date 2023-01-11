import requests
from typing import Optional
from sdk.models import operations
from . import utils

class PortfolioConstruction:
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

    
    def post_portfolio_construction_investable(self, request: operations.PostPortfolioConstructionInvestableRequest) -> operations.PostPortfolioConstructionInvestableResponse:
        r"""Investable Portfolio
        Compute an investable portfolio as close as possible, in terms of assets weights, to a desired portfolio, taking into account:
        * The desired assets weights
        * The desired assets groups weights
        * The desired maximum assets groups weights
        * The prices of the assets
        * The portfolio value
        * The requirement to purchase some assets by round lots or by odd lots
        * The possibility to purchase some assets by a fractional quantity of shares
        * The requirement to purchase a minimum number of shares, or a minimum monetary value, for some assets
        
        References
        * [Steiner, Andreas, Accuracy and Rounding in Portfolio Construction](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2261131)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/construction/investable"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioConstructionInvestableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioConstructionInvestable200ApplicationJSON])
                res.post_portfolio_construction_investable_200_application_json_object = out

        return res

    
    def post_portfolio_construction_mimicking(self, request: operations.PostPortfolioConstructionMimickingRequest) -> operations.PostPortfolioConstructionMimickingResponse:
        r"""Mimicking Portfolio
        Construct a portfolio as close as possible, in terms of returns, to a benchmark, optionally subject to:
        * Minimum and maximum weights constraints
        * Maximum group weights constraints
        * Minimum and maximum portfolio exposure constraints
        
        References 
        * Konstantinos Benidis, Yiyong Feng, Daniel P. Palomar, Optimization Methods for Financial Index Tracking: From Theory to Practice, now publishers Inc (7 juin 2018)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/construction/mimicking"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioConstructionMimickingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioConstructionMimicking200ApplicationJSON])
                res.post_portfolio_construction_mimicking_200_application_json_object = out

        return res

    
    def post_portfolio_construction_random(self, request: operations.PostPortfolioConstructionRandomRequest) -> operations.PostPortfolioConstructionRandomResponse:
        r"""Random Portfolio
        Construct one or several random portfolio(s), optionally subject to:       
        * Minimum and maximum weights constraints
        * Minimum and maximum portfolio exposure constraints
        
        > Because of the nature of the endpoint, subsequent calls with the same input data will result in different output data.
        
        References
        * [William Thornton Shaw, Monte Carlo Portfolio Optimization for General Investor Risk-Return Objectives and Arbitrary Return Distributions: A Solution for Long-Only Portfolios](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1680224)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/construction/random"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioConstructionRandomResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioConstructionRandom200ApplicationJSON])
                res.post_portfolio_construction_random_200_application_json_object = out

        return res

    