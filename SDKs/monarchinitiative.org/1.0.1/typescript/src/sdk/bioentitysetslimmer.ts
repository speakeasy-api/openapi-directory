import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class BioentitysetSlimmer {
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
   * getEntitySetAnatomySlimmer - For a given gene(s), summarize its annotations over a defined set of slim
  **/
  getEntitySetAnatomySlimmer(
    req: operations.GetEntitySetAnatomySlimmerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEntitySetAnatomySlimmerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEntitySetAnatomySlimmerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/bioentityset/slimmer/anatomy";
    
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
        const res: operations.GetEntitySetAnatomySlimmerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * getEntitySetFunctionSlimmer - For a given gene(s), summarize its annotations over a defined set of slim
  **/
  getEntitySetFunctionSlimmer(
    req: operations.GetEntitySetFunctionSlimmerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEntitySetFunctionSlimmerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEntitySetFunctionSlimmerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/bioentityset/slimmer/function";
    
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
        const res: operations.GetEntitySetFunctionSlimmerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * getEntitySetPhenotypeSlimmer - For a given gene(s), summarize its annotations over a defined set of slim
  **/
  getEntitySetPhenotypeSlimmer(
    req: operations.GetEntitySetPhenotypeSlimmerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEntitySetPhenotypeSlimmerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEntitySetPhenotypeSlimmerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/bioentityset/slimmer/phenotype";
    
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
        const res: operations.GetEntitySetPhenotypeSlimmerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

}
