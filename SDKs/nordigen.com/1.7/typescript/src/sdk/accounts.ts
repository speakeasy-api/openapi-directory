import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Accounts {
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
   * retrieveAccountBalances - Access account balances.
   * 
   * Balances will be returned in Berlin Group PSD2 format.
  **/
  retrieveAccountBalances(
    req: operations.RetrieveAccountBalancesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RetrieveAccountBalancesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RetrieveAccountBalancesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/accounts/{id}/balances/", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RetrieveAccountBalancesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * retrieveAccountDetails - Access account details.
   * 
   * Account details will be returned in Berlin Group PSD2 format.
  **/
  retrieveAccountDetails(
    req: operations.RetrieveAccountDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RetrieveAccountDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RetrieveAccountDetailsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/accounts/{id}/details/", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RetrieveAccountDetailsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * retrieveAccountMetadata - Access account metadata.
   * 
   * Information about the account record, such as the processing status and IBAN.
  **/
  retrieveAccountMetadata(
    req: operations.RetrieveAccountMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RetrieveAccountMetadataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RetrieveAccountMetadataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/accounts/{id}/", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RetrieveAccountMetadataResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.account = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * retrieveAccountTransactions - Access account transactions.
   * 
   * Transactions will be returned in Berlin Group PSD2 format.
  **/
  retrieveAccountTransactions(
    req: operations.RetrieveAccountTransactionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RetrieveAccountTransactionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RetrieveAccountTransactionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/accounts/{id}/transactions/", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RetrieveAccountTransactionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 409:
            break;
        }

        return res;
      })
  }

}
