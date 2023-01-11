import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Aspsps {
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
   * retrieveAllSupportedAspspSInAGivenCountry - List all ASPSPs available.
  **/
  retrieveAllSupportedAspspSInAGivenCountry(
    req: operations.RetrieveAllSupportedAspspSInAGivenCountryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RetrieveAllSupportedAspspSInAGivenCountryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RetrieveAllSupportedAspspSInAGivenCountryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/aspsps/";
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.RetrieveAllSupportedAspspSInAGivenCountryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.aspsps = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * retrieveDetailsAboutSpecificAspsp - Get details about a specific ASPSP.
  **/
  retrieveDetailsAboutSpecificAspsp(
    req: operations.RetrieveDetailsAboutSpecificAspspRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RetrieveDetailsAboutSpecificAspspResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RetrieveDetailsAboutSpecificAspspRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/aspsps/{id}/", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RetrieveDetailsAboutSpecificAspspResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.aspsp = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
