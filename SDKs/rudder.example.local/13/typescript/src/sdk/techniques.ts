import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Techniques {
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
   * listTechniqueVersionDirectives - List all directives based on a version of a technique
   *
   * List all directives based on a version of a technique
  **/
  listTechniqueVersionDirectives(
    req: operations.ListTechniqueVersionDirectivesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTechniqueVersionDirectivesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTechniqueVersionDirectivesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/techniques/{techniqueName}/{techniqueVersion}/directives", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListTechniqueVersionDirectivesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listTechniqueVersionDirectives200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listTechniques - List all techniques
   *
   * List all technique with their versions
  **/
  listTechniques(
    config?: AxiosRequestConfig
  ): Promise<operations.ListTechniquesResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/techniques";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListTechniquesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listTechniques200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listTechniquesDirectives - List all directives based on a technique
   *
   * List all directives based on all version of a technique
  **/
  listTechniquesDirectives(
    req: operations.ListTechniquesDirectivesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTechniquesDirectivesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTechniquesDirectivesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/techniques/{techniqueName}/directives", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListTechniquesDirectivesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listTechniquesDirectives200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
