import requests
from typing import Optional
from sdk.models import operations
from . import utils

class PortfolioSimulation:
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

    
    def post_portfolio_simulation_rebalancing_drift_weight(self, request: operations.PostPortfolioSimulationRebalancingDriftWeightRequest) -> operations.PostPortfolioSimulationRebalancingDriftWeightResponse:
        r"""Drift-weight Portfolio Rebalancing
        Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being never rebalanced (a.k.a. buy and hold).
        
        References
        * [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract=2746471)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/simulation/rebalancing/drift-weight"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioSimulationRebalancingDriftWeightResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioSimulationRebalancingDriftWeight200ApplicationJSON])
                res.post_portfolio_simulation_rebalancing_drift_weight_200_application_json_object = out

        return res

    
    def post_portfolio_simulation_rebalancing_fixed_weight(self, request: operations.PostPortfolioSimulationRebalancingFixedWeightRequest) -> operations.PostPortfolioSimulationRebalancingFixedWeightResponse:
        r"""Fixed-weight Portfolio Rebalancing
        Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward fixed weights at the beginning of each time period.
        
        References
        * [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract=2746471)        
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/simulation/rebalancing/fixed-weight"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioSimulationRebalancingFixedWeightResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioSimulationRebalancingFixedWeight200ApplicationJSON])
                res.post_portfolio_simulation_rebalancing_fixed_weight_200_application_json_object = out

        return res

    
    def post_portfolio_simulation_rebalancing_random_weight(self, request: operations.PostPortfolioSimulationRebalancingRandomWeightRequest) -> operations.PostPortfolioSimulationRebalancingRandomWeightResponse:
        r"""Random-weight Portfolio Rebalancing
        Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward random weights at the beginning of each time period.
        
        References
        * [R Stein, Not fooled by randomness: Using random portfolios to analyse investment funds, Investment Analysts Journal, 43:79, 1-15, DOI: 10.1080/10293523.2014.11082564](https://www.tandfonline.com/doi/abs/10.1080/10293523.2014.11082564)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/simulation/rebalancing/random-weight"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioSimulationRebalancingRandomWeightResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioSimulationRebalancingRandomWeight200ApplicationJSON])
                res.post_portfolio_simulation_rebalancing_random_weight_200_application_json_object = out

        return res

    