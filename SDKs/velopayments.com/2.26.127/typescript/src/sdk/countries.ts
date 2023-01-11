import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Countries {
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
   * listPaymentChannelRulesV1 - List Payment Channel Country Rules
   *
   * List the country specific payment channel rules.
  **/
  listPaymentChannelRulesV1(
    config?: AxiosRequestConfig
  ): Promise<operations.ListPaymentChannelRulesV1Response> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/paymentChannelRules";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListPaymentChannelRulesV1Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.paymentChannelRulesResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse401 = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listSupportedCountriesV1 - List Supported Countries
   *
   * <p>List the supported countries.</p>
   * <p>This version will be retired in March 2020. Use /v2/supportedCountries</p>
   * 
  **/
  listSupportedCountriesV1(
    config?: AxiosRequestConfig
  ): Promise<operations.ListSupportedCountriesV1Response> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/supportedCountries";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListSupportedCountriesV1Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.supportedCountriesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listSupportedCountriesV2 - List Supported Countries
   *
   * List the supported countries.
  **/
  listSupportedCountriesV2(
    config?: AxiosRequestConfig
  ): Promise<operations.ListSupportedCountriesV2Response> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/supportedCountries";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListSupportedCountriesV2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.supportedCountriesResponseV2 = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
