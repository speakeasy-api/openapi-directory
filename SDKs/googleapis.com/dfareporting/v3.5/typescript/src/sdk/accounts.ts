/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Accounts {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(
    defaultClient: AxiosInstance,
    securityClient: AxiosInstance,
    serverURL: string,
    language: string,
    sdkVersion: string,
    genVersion: string
  ) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }

  /**
   * Gets one account by ID.
   */
  dfareportingAccountsGet(
    req: operations.DfareportingAccountsGetRequest,
    security: operations.DfareportingAccountsGetSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DfareportingAccountsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DfareportingAccountsGetRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/userprofiles/{profileId}/accounts/{id}",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.DfareportingAccountsGetSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.DfareportingAccountsGetResponse =
        new operations.DfareportingAccountsGetResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.account = utils.objectToClass(httpRes?.data, shared.Account);
          }
          break;
      }

      return res;
    });
  }

  /**
   * Retrieves the list of accounts, possibly filtered. This method supports paging.
   */
  dfareportingAccountsList(
    req: operations.DfareportingAccountsListRequest,
    security: operations.DfareportingAccountsListSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DfareportingAccountsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DfareportingAccountsListRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/userprofiles/{profileId}/accounts",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.DfareportingAccountsListSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.DfareportingAccountsListResponse =
        new operations.DfareportingAccountsListResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.accountsListResponse = utils.objectToClass(
              httpRes?.data,
              shared.AccountsListResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Updates an existing account. This method supports patch semantics.
   */
  dfareportingAccountsPatch(
    req: operations.DfareportingAccountsPatchRequest,
    security: operations.DfareportingAccountsPatchSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DfareportingAccountsPatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DfareportingAccountsPatchRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/userprofiles/{profileId}/accounts",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "account",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.DfareportingAccountsPatchSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...reqBodyHeaders, ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "patch",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.DfareportingAccountsPatchResponse =
        new operations.DfareportingAccountsPatchResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.account = utils.objectToClass(httpRes?.data, shared.Account);
          }
          break;
      }

      return res;
    });
  }

  /**
   * Updates an existing account.
   */
  dfareportingAccountsUpdate(
    req: operations.DfareportingAccountsUpdateRequest,
    security: operations.DfareportingAccountsUpdateSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DfareportingAccountsUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DfareportingAccountsUpdateRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/userprofiles/{profileId}/accounts",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "account",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.DfareportingAccountsUpdateSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...reqBodyHeaders, ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "put",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.DfareportingAccountsUpdateResponse =
        new operations.DfareportingAccountsUpdateResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.account = utils.objectToClass(httpRes?.data, shared.Account);
          }
          break;
      }

      return res;
    });
  }
}
