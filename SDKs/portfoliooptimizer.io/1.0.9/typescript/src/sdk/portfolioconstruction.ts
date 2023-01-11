import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class PortfolioConstruction {
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
   * postPortfolioConstructionInvestable - Investable Portfolio
   *
   * Compute an investable portfolio as close as possible, in terms of assets weights, to a desired portfolio, taking into account:
   * * The desired assets weights
   * * The desired assets groups weights
   * * The desired maximum assets groups weights
   * * The prices of the assets
   * * The portfolio value
   * * The requirement to purchase some assets by round lots or by odd lots
   * * The possibility to purchase some assets by a fractional quantity of shares
   * * The requirement to purchase a minimum number of shares, or a minimum monetary value, for some assets
   * 
   * References
   * * [Steiner, Andreas, Accuracy and Rounding in Portfolio Construction](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2261131)
   * 
  **/
  postPortfolioConstructionInvestable(
    req: operations.PostPortfolioConstructionInvestableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioConstructionInvestableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioConstructionInvestableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/construction/investable";

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
        const res: operations.PostPortfolioConstructionInvestableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.postPortfolioConstructionInvestable200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postPortfolioConstructionMimicking - Mimicking Portfolio
   *
   * Construct a portfolio as close as possible, in terms of returns, to a benchmark, optionally subject to:
   * * Minimum and maximum weights constraints
   * * Maximum group weights constraints
   * * Minimum and maximum portfolio exposure constraints
   * 
   * References 
   * * Konstantinos Benidis, Yiyong Feng, Daniel P. Palomar, Optimization Methods for Financial Index Tracking: From Theory to Practice, now publishers Inc (7 juin 2018)
   * 
  **/
  postPortfolioConstructionMimicking(
    req: operations.PostPortfolioConstructionMimickingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioConstructionMimickingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioConstructionMimickingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/construction/mimicking";

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
        const res: operations.PostPortfolioConstructionMimickingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.postPortfolioConstructionMimicking200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postPortfolioConstructionRandom - Random Portfolio
   *
   * Construct one or several random portfolio(s), optionally subject to:       
   * * Minimum and maximum weights constraints
   * * Minimum and maximum portfolio exposure constraints
   * 
   * > Because of the nature of the endpoint, subsequent calls with the same input data will result in different output data.
   * 
   * References
   * * [William Thornton Shaw, Monte Carlo Portfolio Optimization for General Investor Risk-Return Objectives and Arbitrary Return Distributions: A Solution for Long-Only Portfolios](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1680224)
   * 
  **/
  postPortfolioConstructionRandom(
    req: operations.PostPortfolioConstructionRandomRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPortfolioConstructionRandomResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPortfolioConstructionRandomRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/portfolio/construction/random";

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
        const res: operations.PostPortfolioConstructionRandomResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.postPortfolioConstructionRandom200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
