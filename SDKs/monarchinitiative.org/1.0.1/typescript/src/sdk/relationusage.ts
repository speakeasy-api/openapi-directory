import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class RelationUsage {
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
   * getRelationUsageBetweenResource - All relations used plus count of associations
  **/
  getRelationUsageBetweenResource(
    req: operations.GetRelationUsageBetweenResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRelationUsageBetweenResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRelationUsageBetweenResourceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/relation/usage/between/{subject_category}/{object_category}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRelationUsageBetweenResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getRelationUsagePivotLabelResource - Relation usage count for all subj x obj category combinations, showing label
  **/
  getRelationUsagePivotLabelResource(
    req: operations.GetRelationUsagePivotLabelResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRelationUsagePivotLabelResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRelationUsagePivotLabelResourceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/relation/usage/pivot/label";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRelationUsagePivotLabelResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getRelationUsagePivotResource - Relation usage count for all subj x obj category combinations
  **/
  getRelationUsagePivotResource(
    req: operations.GetRelationUsagePivotResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRelationUsagePivotResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRelationUsagePivotResourceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/relation/usage/pivot";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRelationUsagePivotResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getRelationUsageResource - All relations used plus count of associations
  **/
  getRelationUsageResource(
    req: operations.GetRelationUsageResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRelationUsageResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRelationUsageResourceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/relation/usage/";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRelationUsageResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
