import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class StripeGatewayProcessPaymentsAndRefunds {
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
   * deleteStripeGatewayDeveloperDeveloperIdAccountsStripeId - Disconnects a developer's Stripe account
   *
   * 
   * - Results are returned for the market provided within the basic authentication credentials
   * 
  **/
  deleteStripeGatewayDeveloperDeveloperIdAccountsStripeId(
    req: operations.DeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/stripe-gateway/developer/{developerId}/accounts/{stripeId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 412:
            break;
          default:
            if (utils.matchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteStripeGatewayUserUserIdCardsCardId - Removes a credit card for a user
  **/
  deleteStripeGatewayUserUserIdCardsCardId(
    req: operations.DeleteStripeGatewayUserUserIdCardsCardIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteStripeGatewayUserUserIdCardsCardIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteStripeGatewayUserUserIdCardsCardIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/stripe-gateway/user/{userId}/cards/{cardId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteStripeGatewayUserUserIdCardsCardIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 412:
            break;
          default:
            if (utils.matchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getStripeGatewayDeveloperDeveloperIdAccounts - Returns a developers connected Stripe accounts
   *
   * - Results are returned for the market provided within the basic authentication credentials
   * 
  **/
  getStripeGatewayDeveloperDeveloperIdAccounts(
    req: operations.GetStripeGatewayDeveloperDeveloperIdAccountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStripeGatewayDeveloperDeveloperIdAccountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStripeGatewayDeveloperDeveloperIdAccountsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/stripe-gateway/developer/{developerId}/accounts", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetStripeGatewayDeveloperDeveloperIdAccountsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 412:
            break;
          default:
            if (utils.matchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getStripeGatewayUserUserIdCards - Returns credit cards for this user
   *
   * - Results are returned for the market provided within the basic authentication credentials
   * 
  **/
  getStripeGatewayUserUserIdCards(
    req: operations.GetStripeGatewayUserUserIdCardsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStripeGatewayUserUserIdCardsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStripeGatewayUserUserIdCardsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/stripe-gateway/user/{userId}/cards", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetStripeGatewayUserUserIdCardsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 412:
            break;
          default:
            if (utils.matchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postStripeGatewayDeveloperDeveloperIdAccounts - Generate a temporary URL to allow a developer to connect their Stripe account
   *
   * - Results are returned for the market provided within the basic authentication credentials 
   * - The URL generated by this method is only valid for 48 hours.
   * 
  **/
  postStripeGatewayDeveloperDeveloperIdAccounts(
    req: operations.PostStripeGatewayDeveloperDeveloperIdAccountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostStripeGatewayDeveloperDeveloperIdAccountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostStripeGatewayDeveloperDeveloperIdAccountsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/stripe-gateway/developer/{developerId}/accounts", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostStripeGatewayDeveloperDeveloperIdAccountsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 412:
            break;
          default:
            if (utils.matchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postStripeGatewayUserUserIdCards - Adds credit card for this user
   *
   * - Results are returned for the market provided within the basic authentication credentials
   * 
  **/
  postStripeGatewayUserUserIdCards(
    req: operations.PostStripeGatewayUserUserIdCardsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostStripeGatewayUserUserIdCardsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostStripeGatewayUserUserIdCardsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/stripe-gateway/user/{userId}/cards", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostStripeGatewayUserUserIdCardsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 412:
            break;
          default:
            if (utils.matchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postStripeGatewayUserUserIdCardsCardId - Updates a credit card for this user
   *
   * 
   * - Results are returned for the market provided within the basic authentication credentials
   * 
  **/
  postStripeGatewayUserUserIdCardsCardId(
    req: operations.PostStripeGatewayUserUserIdCardsCardIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostStripeGatewayUserUserIdCardsCardIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostStripeGatewayUserUserIdCardsCardIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/stripe-gateway/user/{userId}/cards/{cardId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostStripeGatewayUserUserIdCardsCardIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 412:
            break;
          default:
            if (utils.matchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
  }

}
