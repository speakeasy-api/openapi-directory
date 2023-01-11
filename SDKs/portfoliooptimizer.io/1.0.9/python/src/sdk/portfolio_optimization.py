import requests
from typing import Optional
from sdk.models import operations
from . import utils

class PortfolioOptimization:
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

    
    def post_portfolio_optimization_equal_risk_contributions(self, request: operations.PostPortfolioOptimizationEqualRiskContributionsRequest) -> operations.PostPortfolioOptimizationEqualRiskContributionsResponse:
        r"""Equal Risk Contributions Portfolio
        Compute the assets weights of the equal risk contributions portfolio, optionally subject to:  
        * Minimum and maximum weights constraints  
        
        References
         * [Richard, Jean-Charles and Roncalli, Thierry, Constrained Risk Budgeting Portfolios: Theory, Algorithms, Applications & Puzzles](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3331184)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/optimization/equal-risk-contributions"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationEqualRiskContributionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationEqualRiskContributions200ApplicationJSON])
                res.post_portfolio_optimization_equal_risk_contributions_200_application_json_object = out

        return res

    
    def post_portfolio_optimization_equal_sharpe_ratio_contributions(self, request: operations.PostPortfolioOptimizationEqualSharpeRatioContributionsRequest) -> operations.PostPortfolioOptimizationEqualSharpeRatioContributionsResponse:
        r"""Equal Sharpe Ratio Contributions Portfolio
        Compute the assets weights of the equal Sharpe Ratio contributions portfolio.
        
        References
         * [Andreas Steiner, Sharpe Ratio Contribution and Attribution Analysis](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1839166\")
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/optimization/equal-sharpe-ratio-contributions"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationEqualSharpeRatioContributionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJSON])
                res.post_portfolio_optimization_equal_sharpe_ratio_contributions_200_application_json_object = out

        return res

    
    def post_portfolio_optimization_equal_weighted(self, request: operations.PostPortfolioOptimizationEqualWeightedRequest) -> operations.PostPortfolioOptimizationEqualWeightedResponse:
        r"""Equal Weighted Portfolio
        Compute the assets weights of the equal-weighted portfolio.
        
        References
         * [Victor DeMiguel and al., Optimal Versus Naive Diversification: How Inefficient is the 1/N Portfolio Strategy?](https://academic.oup.com/rfs/article-abstract/22/5/1915/1592901?redirectedFrom=fulltext)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/optimization/equal-weighted"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationEqualWeightedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationEqualWeighted200ApplicationJSON])
                res.post_portfolio_optimization_equal_weighted_200_application_json_object = out

        return res

    
    def post_portfolio_optimization_inverse_variance_weighted(self, request: operations.PostPortfolioOptimizationInverseVarianceWeightedRequest) -> operations.PostPortfolioOptimizationInverseVarianceWeightedResponse:
        r"""Inverse Variance Weighted Portfolio
        Compute the assets weights of the inverse variance-weighted portfolio.
        
        References
         * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/optimization/inverse-variance-weighted"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationInverseVarianceWeightedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationInverseVarianceWeighted200ApplicationJSON])
                res.post_portfolio_optimization_inverse_variance_weighted_200_application_json_object = out

        return res

    
    def post_portfolio_optimization_inverse_volatility_weighted(self, request: operations.PostPortfolioOptimizationInverseVolatilityWeightedRequest) -> operations.PostPortfolioOptimizationInverseVolatilityWeightedResponse:
        r"""Inverse Volatility Weighted Portfolio
        Compute the assets weights of the inverse volatility-weighted portfolio, also known as the naive-risk parity portfolio.
        
        References
         * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/optimization/inverse-volatility-weighted"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationInverseVolatilityWeightedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationInverseVolatilityWeighted200ApplicationJSON])
                res.post_portfolio_optimization_inverse_volatility_weighted_200_application_json_object = out

        return res

    
    def post_portfolio_optimization_market_capitalization_weighted(self, request: operations.PostPortfolioOptimizationMarketCapitalizationWeightedRequest) -> operations.PostPortfolioOptimizationMarketCapitalizationWeightedResponse:
        r"""Market Capitalization Weighted Portfolio
        Compute the assets weights of the market capitalization-weighted portfolio.
        
        References
         * [Wikipedia, Capitalization-weighted Index](https://en.wikipedia.org/wiki/Capitalization-weighted_index)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/optimization/market-capitalization-weighted"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationMarketCapitalizationWeightedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJSON])
                res.post_portfolio_optimization_market_capitalization_weighted_200_application_json_object = out

        return res

    
    def post_portfolio_optimization_maximum_decorrelation(self, request: operations.PostPortfolioOptimizationMaximumDecorrelationRequest) -> operations.PostPortfolioOptimizationMaximumDecorrelationResponse:
        r"""Maximum Decorrelation Portfolio
        Compute the assets weights of the maximum decorrelation portfolio, optionally subject to:  
        * Minimum and maximum weights constraints
        * Maximum group weights constraints
        * Minimum and maximum portfolio exposure constraints
        
        References
         * [F. Goltz, S. Sivasubramanian, Scientific Beta Maximum Decorrelation Indices](http://www.scientificbeta.com/download/file/scientific-beta-max-decorrelation-indices)
        
        https://docs.portfoliooptimizer.io/#maximum-decorrelation-portfolio
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/optimization/maximum-decorrelation"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationMaximumDecorrelationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationMaximumDecorrelation200ApplicationJSON])
                res.post_portfolio_optimization_maximum_decorrelation_200_application_json_object = out

        return res

    
    def post_portfolio_optimization_maximum_return(self, request: operations.PostPortfolioOptimizationMaximumReturnRequest) -> operations.PostPortfolioOptimizationMaximumReturnResponse:
        r"""Maximum Return Portfolio
        Compute the assets weights of the maximum return portfolio, optionally subject to:  
        * Minimum and maximum weights constraints
        * Maximum group weights constraints
        * Minimum and maximum portfolio exposure constraints
        
        References
         * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/optimization/maximum-return"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationMaximumReturnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationMaximumReturn200ApplicationJSON])
                res.post_portfolio_optimization_maximum_return_200_application_json_object = out

        return res

    
    def post_portfolio_optimization_maximum_sharpe_ratio(self, request: operations.PostPortfolioOptimizationMaximumSharpeRatioRequest) -> operations.PostPortfolioOptimizationMaximumSharpeRatioResponse:
        r"""Maximum Sharpe Ratio Portfolio
        Compute the assets weights of the maximum Sharpe ratio portfolio, optionally subject to:  
        * Minimum and maximum weights constraints
        * Maximum group weights constraints
        * Minimum and maximum portfolio exposure constraints
        
        References
         * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/optimization/maximum-sharpe-ratio"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationMaximumSharpeRatioResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationMaximumSharpeRatio200ApplicationJSON])
                res.post_portfolio_optimization_maximum_sharpe_ratio_200_application_json_object = out

        return res

    
    def post_portfolio_optimization_mean_variance_efficient(self, request: operations.PostPortfolioOptimizationMeanVarianceEfficientRequest) -> operations.PostPortfolioOptimizationMeanVarianceEfficientResponse:
        r"""Mean-Variance Efficient Portfolio
        Compute the assets weights of a mean-variance efficient portfolio, optionally subject to:  
        * Minimum and maximum weights constraints
        * Maximum group weights constraints
        * Minimum and maximum portfolio exposure constraints
        
        > A mean-variance efficient portfolio is a portfolio belonging to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier).
        
        References
         * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/optimization/mean-variance-efficient"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationMeanVarianceEfficientResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationMeanVarianceEfficient200ApplicationJSON])
                res.post_portfolio_optimization_mean_variance_efficient_200_application_json_object = out

        return res

    
    def post_portfolio_optimization_minimum_correlation(self, request: operations.PostPortfolioOptimizationMinimumCorrelationRequest) -> operations.PostPortfolioOptimizationMinimumCorrelationResponse:
        r"""Minimum Correlation Portfolio
        Compute the assets weights of the (heuristic) minimum correlation portfolio, which is a portfolio built using the Minimum Correlation Algorithm discovered by [David Varadi](https://cssanalytics.wordpress.com/).
        
        References
         * [CSSA, Minimum Correlation Algorithm Paper Release](https://cssanalytics.wordpress.com/2012/09/21/minimum-correlation-algorithm-paper-release/)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/optimization/minimum-correlation"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationMinimumCorrelationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationMinimumCorrelation200ApplicationJSON])
                res.post_portfolio_optimization_minimum_correlation_200_application_json_object = out

        return res

    
    def post_portfolio_optimization_minimum_variance(self, request: operations.PostPortfolioOptimizationMinimumVarianceRequest) -> operations.PostPortfolioOptimizationMinimumVarianceResponse:
        r"""Minimum Variance Portfolio
        Compute the assets weights of the minimum variance portfolio, optionally subject to:  
        * Minimum and maximum weights constraints
        * Maximum group weights constraints
        * Minimum and maximum portfolio exposure constraints
        
        References
         * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/optimization/minimum-variance"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationMinimumVarianceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationMinimumVariance200ApplicationJSON])
                res.post_portfolio_optimization_minimum_variance_200_application_json_object = out

        return res

    
    def post_portfolio_optimization_most_diversified(self, request: operations.PostPortfolioOptimizationMostDiversifiedRequest) -> operations.PostPortfolioOptimizationMostDiversifiedResponse:
        r"""Most Diversified Portfolio
        Compute the assets weights of the most diversified portfolio, optionally subject to:  
        * Minimum and maximum weights constraints
        * Maximum group weights constraints
        * Minimum and maximum portfolio exposure constraints
        
        References
         * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/optimization/most-diversified"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioOptimizationMostDiversifiedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioOptimizationMostDiversified200ApplicationJSON])
                res.post_portfolio_optimization_most_diversified_200_application_json_object = out

        return res

    