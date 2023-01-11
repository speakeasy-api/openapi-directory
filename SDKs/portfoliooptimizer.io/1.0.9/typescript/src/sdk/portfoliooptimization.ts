import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class PortfolioOptimization {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * postPortfolioOptimizationEqualRiskContributions - Equal Risk Contributions Portfolio
   *
   * Compute the assets weights of the equal risk contributions portfolio, optionally subject to:  
   * * Minimum and maximum weights constraints  
   * 
   * References
   *  * [Richard, Jean-Charles and Roncalli, Thierry, Constrained Risk Budgeting Portfolios: Theory, Algorithms, Applications & Puzzles](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3331184)
   * 
  **/
  postPortfolioOptimizationEqualRiskContributions(
    req: operations.PostPortfolioOptimizationEqualRiskContributionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioOptimizationEqualRiskContributionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioOptimizationEqualRiskContributionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/optimization/equal-risk-contributions";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioOptimizationEqualRiskContributionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.postPortfolioOptimizationEqualRiskContributions200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postPortfolioOptimizationEqualSharpeRatioContributions - Equal Sharpe Ratio Contributions Portfolio
   *
   * Compute the assets weights of the equal Sharpe Ratio contributions portfolio.
   * 
   * References
   *  * [Andreas Steiner, Sharpe Ratio Contribution and Attribution Analysis](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1839166")
   * 
  **/
  postPortfolioOptimizationEqualSharpeRatioContributions(
    req: operations.PostPortfolioOptimizationEqualSharpeRatioContributionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioOptimizationEqualSharpeRatioContributionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioOptimizationEqualSharpeRatioContributionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/optimization/equal-sharpe-ratio-contributions";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioOptimizationEqualSharpeRatioContributionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.postPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postPortfolioOptimizationEqualWeighted - Equal Weighted Portfolio
   *
   * Compute the assets weights of the equal-weighted portfolio.
   * 
   * References
   *  * [Victor DeMiguel and al., Optimal Versus Naive Diversification: How Inefficient is the 1/N Portfolio Strategy?](https://academic.oup.com/rfs/article-abstract/22/5/1915/1592901?redirectedFrom=fulltext)
   * 
  **/
  postPortfolioOptimizationEqualWeighted(
    req: operations.PostPortfolioOptimizationEqualWeightedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioOptimizationEqualWeightedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioOptimizationEqualWeightedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/optimization/equal-weighted";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioOptimizationEqualWeightedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.postPortfolioOptimizationEqualWeighted200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postPortfolioOptimizationInverseVarianceWeighted - Inverse Variance Weighted Portfolio
   *
   * Compute the assets weights of the inverse variance-weighted portfolio.
   * 
   * References
   *  * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056)
   * 
  **/
  postPortfolioOptimizationInverseVarianceWeighted(
    req: operations.PostPortfolioOptimizationInverseVarianceWeightedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioOptimizationInverseVarianceWeightedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioOptimizationInverseVarianceWeightedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/optimization/inverse-variance-weighted";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioOptimizationInverseVarianceWeightedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.postPortfolioOptimizationInverseVarianceWeighted200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postPortfolioOptimizationInverseVolatilityWeighted - Inverse Volatility Weighted Portfolio
   *
   * Compute the assets weights of the inverse volatility-weighted portfolio, also known as the naive-risk parity portfolio.
   * 
   * References
   *  * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056)
   * 
  **/
  postPortfolioOptimizationInverseVolatilityWeighted(
    req: operations.PostPortfolioOptimizationInverseVolatilityWeightedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioOptimizationInverseVolatilityWeightedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioOptimizationInverseVolatilityWeightedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/optimization/inverse-volatility-weighted";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioOptimizationInverseVolatilityWeightedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.postPortfolioOptimizationInverseVolatilityWeighted200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postPortfolioOptimizationMarketCapitalizationWeighted - Market Capitalization Weighted Portfolio
   *
   * Compute the assets weights of the market capitalization-weighted portfolio.
   * 
   * References
   *  * [Wikipedia, Capitalization-weighted Index](https://en.wikipedia.org/wiki/Capitalization-weighted_index)
   * 
  **/
  postPortfolioOptimizationMarketCapitalizationWeighted(
    req: operations.PostPortfolioOptimizationMarketCapitalizationWeightedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioOptimizationMarketCapitalizationWeightedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioOptimizationMarketCapitalizationWeightedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/optimization/market-capitalization-weighted";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioOptimizationMarketCapitalizationWeightedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.postPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postPortfolioOptimizationMaximumDecorrelation - Maximum Decorrelation Portfolio
   *
   * Compute the assets weights of the maximum decorrelation portfolio, optionally subject to:  
   * * Minimum and maximum weights constraints
   * * Maximum group weights constraints
   * * Minimum and maximum portfolio exposure constraints
   * 
   * References
   *  * [F. Goltz, S. Sivasubramanian, Scientific Beta Maximum Decorrelation Indices](http://www.scientificbeta.com/download/file/scientific-beta-max-decorrelation-indices)
   * 
   *
   * https://docs.portfoliooptimizer.io/#maximum-decorrelation-portfolio
  **/
  postPortfolioOptimizationMaximumDecorrelation(
    req: operations.PostPortfolioOptimizationMaximumDecorrelationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioOptimizationMaximumDecorrelationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioOptimizationMaximumDecorrelationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/optimization/maximum-decorrelation";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioOptimizationMaximumDecorrelationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.postPortfolioOptimizationMaximumDecorrelation200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postPortfolioOptimizationMaximumReturn - Maximum Return Portfolio
   *
   * Compute the assets weights of the maximum return portfolio, optionally subject to:  
   * * Minimum and maximum weights constraints
   * * Maximum group weights constraints
   * * Minimum and maximum portfolio exposure constraints
   * 
   * References
   *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
   * 
  **/
  postPortfolioOptimizationMaximumReturn(
    req: operations.PostPortfolioOptimizationMaximumReturnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioOptimizationMaximumReturnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioOptimizationMaximumReturnRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/optimization/maximum-return";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioOptimizationMaximumReturnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.postPortfolioOptimizationMaximumReturn200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postPortfolioOptimizationMaximumSharpeRatio - Maximum Sharpe Ratio Portfolio
   *
   * Compute the assets weights of the maximum Sharpe ratio portfolio, optionally subject to:  
   * * Minimum and maximum weights constraints
   * * Maximum group weights constraints
   * * Minimum and maximum portfolio exposure constraints
   * 
   * References
   *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
   * 
  **/
  postPortfolioOptimizationMaximumSharpeRatio(
    req: operations.PostPortfolioOptimizationMaximumSharpeRatioRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioOptimizationMaximumSharpeRatioResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioOptimizationMaximumSharpeRatioRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/optimization/maximum-sharpe-ratio";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioOptimizationMaximumSharpeRatioResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.postPortfolioOptimizationMaximumSharpeRatio200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postPortfolioOptimizationMeanVarianceEfficient - Mean-Variance Efficient Portfolio
   *
   * Compute the assets weights of a mean-variance efficient portfolio, optionally subject to:  
   * * Minimum and maximum weights constraints
   * * Maximum group weights constraints
   * * Minimum and maximum portfolio exposure constraints
   * 
   * > A mean-variance efficient portfolio is a portfolio belonging to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier).
   * 
   * References
   *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
   * 
  **/
  postPortfolioOptimizationMeanVarianceEfficient(
    req: operations.PostPortfolioOptimizationMeanVarianceEfficientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioOptimizationMeanVarianceEfficientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioOptimizationMeanVarianceEfficientRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/optimization/mean-variance-efficient";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioOptimizationMeanVarianceEfficientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.postPortfolioOptimizationMeanVarianceEfficient200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postPortfolioOptimizationMinimumCorrelation - Minimum Correlation Portfolio
   *
   * Compute the assets weights of the (heuristic) minimum correlation portfolio, which is a portfolio built using the Minimum Correlation Algorithm discovered by [David Varadi](https://cssanalytics.wordpress.com/).
   * 
   * References
   *  * [CSSA, Minimum Correlation Algorithm Paper Release](https://cssanalytics.wordpress.com/2012/09/21/minimum-correlation-algorithm-paper-release/)
   * 
  **/
  postPortfolioOptimizationMinimumCorrelation(
    req: operations.PostPortfolioOptimizationMinimumCorrelationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioOptimizationMinimumCorrelationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioOptimizationMinimumCorrelationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/optimization/minimum-correlation";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioOptimizationMinimumCorrelationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.postPortfolioOptimizationMinimumCorrelation200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postPortfolioOptimizationMinimumVariance - Minimum Variance Portfolio
   *
   * Compute the assets weights of the minimum variance portfolio, optionally subject to:  
   * * Minimum and maximum weights constraints
   * * Maximum group weights constraints
   * * Minimum and maximum portfolio exposure constraints
   * 
   * References
   *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
   * 
  **/
  postPortfolioOptimizationMinimumVariance(
    req: operations.PostPortfolioOptimizationMinimumVarianceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioOptimizationMinimumVarianceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioOptimizationMinimumVarianceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/optimization/minimum-variance";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioOptimizationMinimumVarianceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.postPortfolioOptimizationMinimumVariance200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postPortfolioOptimizationMostDiversified - Most Diversified Portfolio
   *
   * Compute the assets weights of the most diversified portfolio, optionally subject to:  
   * * Minimum and maximum weights constraints
   * * Maximum group weights constraints
   * * Minimum and maximum portfolio exposure constraints
   * 
   * References
   *  * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40)
   * 
  **/
  postPortfolioOptimizationMostDiversified(
    req: operations.PostPortfolioOptimizationMostDiversifiedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioOptimizationMostDiversifiedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioOptimizationMostDiversifiedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/optimization/most-diversified";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPortfolioOptimizationMostDiversifiedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.postPortfolioOptimizationMostDiversified200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
