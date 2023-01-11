import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";




export const ServerList = [
	"https://pricing.twilio.com",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;
    
  }
  
  /**
   * fetchTrunkingCountry - Fetch a specific Country.
  **/
  fetchTrunkingCountry(
    req: operations.FetchTrunkingCountryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchTrunkingCountryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchTrunkingCountryRequest(req);
    }
    
    let baseURL: string = operations.FetchTrunkingCountryServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v2/Trunking/Countries/{IsoCountry}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchTrunkingCountryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pricingV2TrunkingCountryInstance = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchTrunkingNumber - Fetch pricing information for a specific destination and, optionally, origination phone number.
  **/
  fetchTrunkingNumber(
    req: operations.FetchTrunkingNumberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchTrunkingNumberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchTrunkingNumberRequest(req);
    }
    
    let baseURL: string = operations.FetchTrunkingNumberServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v2/Trunking/Numbers/{DestinationNumber}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.FetchTrunkingNumberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pricingV2TrunkingNumber = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchVoiceCountry - Fetch a specific Country.
  **/
  fetchVoiceCountry(
    req: operations.FetchVoiceCountryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchVoiceCountryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchVoiceCountryRequest(req);
    }
    
    let baseURL: string = operations.FetchVoiceCountryServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v2/Voice/Countries/{IsoCountry}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchVoiceCountryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pricingV2VoiceVoiceCountryInstance = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchVoiceNumber - Fetch pricing information for a specific destination and, optionally, origination phone number.
  **/
  fetchVoiceNumber(
    req: operations.FetchVoiceNumberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchVoiceNumberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchVoiceNumberRequest(req);
    }
    
    let baseURL: string = operations.FetchVoiceNumberServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v2/Voice/Numbers/{DestinationNumber}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.FetchVoiceNumberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pricingV2VoiceVoiceNumber = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  listTrunkingCountry(
    req: operations.ListTrunkingCountryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTrunkingCountryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTrunkingCountryRequest(req);
    }
    
    let baseURL: string = operations.ListTrunkingCountryServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v2/Trunking/Countries";
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ListTrunkingCountryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listTrunkingCountryResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  listVoiceCountry(
    req: operations.ListVoiceCountryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListVoiceCountryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListVoiceCountryRequest(req);
    }
    
    let baseURL: string = operations.ListVoiceCountryServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v2/Voice/Countries";
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ListVoiceCountryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listVoiceCountryResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}