/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Orders {
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
   * Gets one order by ID.
   */
  dfareportingOrdersGet(
    req: operations.DfareportingOrdersGetRequest,
    security: operations.DfareportingOrdersGetSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DfareportingOrdersGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DfareportingOrdersGetRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/userprofiles/{profileId}/projects/{projectId}/orders/{id}",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.DfareportingOrdersGetSecurity(security);
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
      const res: operations.DfareportingOrdersGetResponse =
        new operations.DfareportingOrdersGetResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.order = utils.objectToClass(httpRes?.data, shared.Order);
          }
          break;
      }

      return res;
    });
  }

  /**
   * Retrieves a list of orders, possibly filtered. This method supports paging.
   */
  dfareportingOrdersList(
    req: operations.DfareportingOrdersListRequest,
    security: operations.DfareportingOrdersListSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DfareportingOrdersListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DfareportingOrdersListRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/userprofiles/{profileId}/projects/{projectId}/orders",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.DfareportingOrdersListSecurity(security);
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
      const res: operations.DfareportingOrdersListResponse =
        new operations.DfareportingOrdersListResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.ordersListResponse = utils.objectToClass(
              httpRes?.data,
              shared.OrdersListResponse
            );
          }
          break;
      }

      return res;
    });
  }
}
