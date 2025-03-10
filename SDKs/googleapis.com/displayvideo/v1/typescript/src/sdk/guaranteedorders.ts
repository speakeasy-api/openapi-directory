/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class GuaranteedOrders {
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
   * Creates a new guaranteed order. Returns the newly created guaranteed order if successful.
   */
  displayvideoGuaranteedOrdersCreate(
    req: operations.DisplayvideoGuaranteedOrdersCreateRequest,
    security: operations.DisplayvideoGuaranteedOrdersCreateSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DisplayvideoGuaranteedOrdersCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisplayvideoGuaranteedOrdersCreateRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/guaranteedOrders";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "guaranteedOrderInput",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.DisplayvideoGuaranteedOrdersCreateSecurity(
        security
      );
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...reqBodyHeaders, ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.DisplayvideoGuaranteedOrdersCreateResponse =
        new operations.DisplayvideoGuaranteedOrdersCreateResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.guaranteedOrder = utils.objectToClass(
              httpRes?.data,
              shared.GuaranteedOrder
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Edits read advertisers of a guaranteed order.
   */
  displayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessors(
    req: operations.DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsRequest,
    security: operations.DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/guaranteedOrders/{guaranteedOrderId}:editGuaranteedOrderReadAccessors",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "editGuaranteedOrderReadAccessorsRequest",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security =
        new operations.DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsSecurity(
          security
        );
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...reqBodyHeaders, ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsResponse =
        new operations.DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsResponse(
          {
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
          }
        );
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.editGuaranteedOrderReadAccessorsResponse = utils.objectToClass(
              httpRes?.data,
              shared.EditGuaranteedOrderReadAccessorsResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Gets a guaranteed order.
   */
  displayvideoGuaranteedOrdersGet(
    req: operations.DisplayvideoGuaranteedOrdersGetRequest,
    security: operations.DisplayvideoGuaranteedOrdersGetSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DisplayvideoGuaranteedOrdersGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisplayvideoGuaranteedOrdersGetRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/guaranteedOrders/{guaranteedOrderId}",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.DisplayvideoGuaranteedOrdersGetSecurity(
        security
      );
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
      const res: operations.DisplayvideoGuaranteedOrdersGetResponse =
        new operations.DisplayvideoGuaranteedOrdersGetResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.guaranteedOrder = utils.objectToClass(
              httpRes?.data,
              shared.GuaranteedOrder
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Lists guaranteed orders that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, guaranteed orders with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.
   */
  displayvideoGuaranteedOrdersList(
    req: operations.DisplayvideoGuaranteedOrdersListRequest,
    security: operations.DisplayvideoGuaranteedOrdersListSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DisplayvideoGuaranteedOrdersListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisplayvideoGuaranteedOrdersListRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/guaranteedOrders";
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.DisplayvideoGuaranteedOrdersListSecurity(
        security
      );
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
      const res: operations.DisplayvideoGuaranteedOrdersListResponse =
        new operations.DisplayvideoGuaranteedOrdersListResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.listGuaranteedOrdersResponse = utils.objectToClass(
              httpRes?.data,
              shared.ListGuaranteedOrdersResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Updates an existing guaranteed order. Returns the updated guaranteed order if successful.
   */
  displayvideoGuaranteedOrdersPatch(
    req: operations.DisplayvideoGuaranteedOrdersPatchRequest,
    security: operations.DisplayvideoGuaranteedOrdersPatchSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DisplayvideoGuaranteedOrdersPatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisplayvideoGuaranteedOrdersPatchRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/guaranteedOrders/{guaranteedOrderId}",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "guaranteedOrderInput",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.DisplayvideoGuaranteedOrdersPatchSecurity(
        security
      );
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
      const res: operations.DisplayvideoGuaranteedOrdersPatchResponse =
        new operations.DisplayvideoGuaranteedOrdersPatchResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.guaranteedOrder = utils.objectToClass(
              httpRes?.data,
              shared.GuaranteedOrder
            );
          }
          break;
      }

      return res;
    });
  }
}
