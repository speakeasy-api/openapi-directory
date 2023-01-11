import requests
from typing import Optional
from sdk.models import operations
from . import utils

class PortfolioAnalysis:
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

    
    def post_portfolio_analysis_alpha(self, request: operations.PostPortfolioAnalysisAlphaRequest) -> operations.PostPortfolioAnalysisAlphaResponse:
        r"""Alpha
        Compute the Jensen’s alpha of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).
        
        References
        * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution  
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/analysis/alpha"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisAlphaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisAlpha200ApplicationJSON])
                res.post_portfolio_analysis_alpha_200_application_json_object = out

        return res

    
    def post_portfolio_analysis_beta(self, request: operations.PostPortfolioAnalysisBetaRequest) -> operations.PostPortfolioAnalysisBetaResponse:
        r"""Beta
        Compute the beta of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM)..
        
        References
        * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution  
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/analysis/beta"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisBetaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisBeta200ApplicationJSON])
                res.post_portfolio_analysis_beta_200_application_json_object = out

        return res

    
    def post_portfolio_analysis_contributions_return(self, request: operations.PostPortfolioAnalysisContributionsReturnRequest) -> operations.PostPortfolioAnalysisContributionsReturnResponse:
        r"""Return Contributions
        Perform a return contribution analysis of one or several portfolio(s), optionally using groups of assets.
        
        References
        * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/analysis/contributions/return"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisContributionsReturnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisContributionsReturn200ApplicationJSON])
                res.post_portfolio_analysis_contributions_return_200_application_json_object = out

        return res

    
    def post_portfolio_analysis_contributions_risk(self, request: operations.PostPortfolioAnalysisContributionsRiskRequest) -> operations.PostPortfolioAnalysisContributionsRiskResponse:
        r"""Risk Contributions
        Perform a risk contribution analysis of one or several portfolio(s), optionally using groups of assets.
        
        References
        * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/analysis/contributions/risk"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisContributionsRiskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisContributionsRisk200ApplicationJSON])
                res.post_portfolio_analysis_contributions_risk_200_application_json_object = out

        return res

    
    def post_portfolio_analysis_diversification_ratio(self, request: operations.PostPortfolioAnalysisDiversificationRatioRequest) -> operations.PostPortfolioAnalysisDiversificationRatioResponse:
        r"""Diversification Ratio
        Compute the diversification ratio of one or several portfolio(s).
        
        References
        * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/analysis/diversification-ratio"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisDiversificationRatioResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisDiversificationRatio200ApplicationJSON])
                res.post_portfolio_analysis_diversification_ratio_200_application_json_object = out

        return res

    
    def post_portfolio_analysis_drawdowns(self, request: operations.PostPortfolioAnalysisDrawdownsRequest) -> operations.PostPortfolioAnalysisDrawdownsResponse:
        r"""Drawdowns
        Compute the drawdown function - also called the underwater equity curve -, as well as the worst 10 drawdowns of one or several portfolio(s).
        
        References
        * [Wikipedia, Drawdown](https://en.wikipedia.org/wiki/Drawdown_(economics))        
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/analysis/drawdowns"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisDrawdownsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisDrawdowns200ApplicationJSON])
                res.post_portfolio_analysis_drawdowns_200_application_json_object = out

        return res

    
    def post_portfolio_analysis_factor_exposures(self, request: operations.PostPortfolioAnalysisFactorExposuresRequest) -> operations.PostPortfolioAnalysisFactorExposuresResponse:
        r"""Factor Exposures
        Compute the exposures of one or several portfolio(s) to a set of factors, using a returns-based linear regression analysis.
        
        References
        * [Measuring Factor Exposures: Uses and Abuses, Ronen Israel and Adrienne Ross, The Journal of Alternative Investments Summer 2017, 20 (1) 10-25](https://jai.pm-research.com/content/20/1/10.short) 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/analysis/factor/exposures"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisFactorExposuresResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisFactorExposures200ApplicationJSON])
                res.post_portfolio_analysis_factor_exposures_200_application_json_object = out

        return res

    
    def post_portfolio_analysis_mean_variance_efficient_frontier(self, request: operations.PostPortfolioAnalysisMeanVarianceEfficientFrontierRequest) -> operations.PostPortfolioAnalysisMeanVarianceEfficientFrontierResponse:
        r"""Mean-Variance Efficient Frontier
        Compute the discretized mean-variance efficient frontier associated to a list of assets, optionally subject to:
        * Minimum and maximum weights constraints
        * Maximum group weights constraints
        * Minimum and maximum portfolio exposure constraint
        
        References
         * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/analysis/mean-variance/efficient-frontier"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisMeanVarianceEfficientFrontierResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJSON])
                res.post_portfolio_analysis_mean_variance_efficient_frontier_200_application_json_object = out

        return res

    
    def post_portfolio_analysis_mean_variance_minimum_variance_frontier(self, request: operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequest) -> operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierResponse:
        r"""Mean-Variance Minimum Variance Frontier
        Compute the discretized mean-variance minimum variance frontier associated to a list of assets, optionally subject to:
        * Minimum and maximum weights constraints
        * Maximum group weights constraints
        * Minimum and maximum portfolio exposure constraint
        
        > This endpoint is similar to the endpoint [`/portfolio/analysis/mean-variance/efficient-frontier`](#post-/portfolio/analysis/mean-variance/efficient-frontier), because the mean-variance efficient frontier is the \"top\" portion of the mean-variance minimum variance frontier.
        
        References
         * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/analysis/mean-variance/minimum-variance-frontier"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJSON])
                res.post_portfolio_analysis_mean_variance_minimum_variance_frontier_200_application_json_object = out

        return res

    
    def post_portfolio_analysis_return(self, request: operations.PostPortfolioAnalysisReturnRequest) -> operations.PostPortfolioAnalysisReturnResponse:
        r"""Arithmetic Return
        Compute the arithmetic return of one or several portfolio(s) from either:  
        * Portfolio assets arithmetic returns
        * Portfolio values
        
        References
        * [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return)
        * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/analysis/return"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisReturnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisReturn200ApplicationJSON])
                res.post_portfolio_analysis_return_200_application_json_object = out

        return res

    
    def post_portfolio_analysis_returns_average(self, request: operations.PostPortfolioAnalysisReturnsAverageRequest) -> operations.PostPortfolioAnalysisReturnsAverageResponse:
        r"""Arithmetic Average Return
        Compute the arithmetic average of the arithmetic return(s) of one or several portfolio(s).
        
        References
        * [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/analysis/returns/average"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisReturnsAverageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisReturnsAverage200ApplicationJSON])
                res.post_portfolio_analysis_returns_average_200_application_json_object = out

        return res

    
    def post_portfolio_analysis_sharpe_ratio(self, request: operations.PostPortfolioAnalysisSharpeRatioRequest) -> operations.PostPortfolioAnalysisSharpeRatioResponse:
        r"""Sharpe Ratio
        Compute the Sharpe ratio of one or several portfolio(s) from either:
        * Portfolio assets arithmetic returns and assets covariance matrix
        * Portfolio values
        
        References
        * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
        * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/analysis/sharpe-ratio"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisSharpeRatioResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisSharpeRatio200ApplicationJSON])
                res.post_portfolio_analysis_sharpe_ratio_200_application_json_object = out

        return res

    
    def post_portfolio_analysis_tracking_error(self, request: operations.PostPortfolioAnalysisTrackingErrorRequest) -> operations.PostPortfolioAnalysisTrackingErrorResponse:
        r"""Tracking Error
        Compute the tracking error between a benchmark and one or several portfolio(s).
        
        References
        * [Wikipedia, Tracking error](https://en.wikipedia.org/wiki/Tracking_error) 
        * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/analysis/tracking-error"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisTrackingErrorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisTrackingError200ApplicationJSON])
                res.post_portfolio_analysis_tracking_error_200_application_json_object = out

        return res

    
    def post_portfolio_analysis_volatility(self, request: operations.PostPortfolioAnalysisVolatilityRequest) -> operations.PostPortfolioAnalysisVolatilityResponse:
        r"""Volatility
        Compute the volatility (i.e., standard deviation) of one or several portfolio(s) from either:  
        * Portfolio assets covariance matrix
        * Portfolio values
        
        References
        * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation#Finance)
        * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
        * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/portfolio/analysis/volatility"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAnalysisVolatilityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPortfolioAnalysisVolatility200ApplicationJSON])
                res.post_portfolio_analysis_volatility_200_application_json_object = out

        return res

    