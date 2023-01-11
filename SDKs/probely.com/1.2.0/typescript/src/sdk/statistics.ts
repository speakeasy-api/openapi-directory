import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Statistics {
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
   * getTargetsAllAverageFixTime - Average fix time graph data (all targets)
  **/
  getTargetsAllAverageFixTime(
    config?: AxiosRequestConfig
  ): Promise<operations.GetTargetsAllAverageFixTimeResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/targets/all/average_fix_time/";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTargetsAllAverageFixTimeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getTargetsAllAverageFixTime200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getTargetsAllNeedsAttentionPie - Targets with open vulnerabilities pie chart data
  **/
  getTargetsAllNeedsAttentionPie(
    config?: AxiosRequestConfig
  ): Promise<operations.GetTargetsAllNeedsAttentionPieResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/targets/all/needs_attention_pie/";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTargetsAllNeedsAttentionPieResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getTargetsAllNeedsAttentionPie200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getTargetsAllNeedsAttentionTop - Targets with open vulnerabilities
  **/
  getTargetsAllNeedsAttentionTop(
    config?: AxiosRequestConfig
  ): Promise<operations.GetTargetsAllNeedsAttentionTopResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/targets/all/needs_attention_top/";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTargetsAllNeedsAttentionTopResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getTargetsAllNeedsAttentionTop200ApplicationJSONObjects = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getTargetsAllRiskTrend - Risk trend graph data (all targets)
  **/
  getTargetsAllRiskTrend(
    config?: AxiosRequestConfig
  ): Promise<operations.GetTargetsAllRiskTrendResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/targets/all/risk_trend/";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTargetsAllRiskTrendResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getTargetsAllRiskTrend200ApplicationJSONObjects = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getTargetsAllSeverityTrend - Severity trend graph data (all targets)
  **/
  getTargetsAllSeverityTrend(
    config?: AxiosRequestConfig
  ): Promise<operations.GetTargetsAllSeverityTrendResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/targets/all/severity_trend/";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTargetsAllSeverityTrendResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getTargetsAllSeverityTrend200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getTargetsAllTopVulns - Top 5 vulnerabilities (all targets).
  **/
  getTargetsAllTopVulns(
    config?: AxiosRequestConfig
  ): Promise<operations.GetTargetsAllTopVulnsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/targets/all/top_vulns/";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTargetsAllTopVulnsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getTargetsAllTopVulns200ApplicationJSONObjects = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getTargetsTargetIdAverageFixTime - Average vulnerability trend graph data
  **/
  getTargetsTargetIdAverageFixTime(
    req: operations.GetTargetsTargetIdAverageFixTimeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTargetsTargetIdAverageFixTimeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTargetsTargetIdAverageFixTimeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/targets/{target_id}/average_fix_time/", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTargetsTargetIdAverageFixTimeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getTargetsTargetIdAverageFixTime200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getTargetsTargetIdRiskTrend - Risk trend graph data
  **/
  getTargetsTargetIdRiskTrend(
    req: operations.GetTargetsTargetIdRiskTrendRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTargetsTargetIdRiskTrendResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTargetsTargetIdRiskTrendRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/targets/{target_id}/risk_trend/", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTargetsTargetIdRiskTrendResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getTargetsTargetIdRiskTrend200ApplicationJSONObjects = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getTargetsTargetIdSeverityTrend - Severity trend graph data.
  **/
  getTargetsTargetIdSeverityTrend(
    req: operations.GetTargetsTargetIdSeverityTrendRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTargetsTargetIdSeverityTrendResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTargetsTargetIdSeverityTrendRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/targets/{target_id}/severity_trend/", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTargetsTargetIdSeverityTrendResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getTargetsTargetIdSeverityTrend200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getTargetsTargetIdTopVulns - Top 5 vulnerabilities
  **/
  getTargetsTargetIdTopVulns(
    req: operations.GetTargetsTargetIdTopVulnsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTargetsTargetIdTopVulnsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTargetsTargetIdTopVulnsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/targets/{target_id}/top_vulns/", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTargetsTargetIdTopVulnsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getTargetsTargetIdTopVulns200ApplicationJSONObjects = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
