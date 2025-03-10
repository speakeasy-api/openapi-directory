/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Shippingsettings {
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
   * Retrieves and updates the shipping settings of multiple accounts in a single request.
   */
  contentShippingsettingsCustombatch(
    req: operations.ContentShippingsettingsCustombatchRequest,
    security: operations.ContentShippingsettingsCustombatchSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ContentShippingsettingsCustombatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContentShippingsettingsCustombatchRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/shippingsettings/batch";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "shippingsettingsCustomBatchRequest",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.ContentShippingsettingsCustombatchSecurity(
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
      const res: operations.ContentShippingsettingsCustombatchResponse =
        new operations.ContentShippingsettingsCustombatchResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.shippingsettingsCustomBatchResponse = utils.objectToClass(
              httpRes?.data,
              shared.ShippingsettingsCustomBatchResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Retrieves the shipping settings of the account.
   */
  contentShippingsettingsGet(
    req: operations.ContentShippingsettingsGetRequest,
    security: operations.ContentShippingsettingsGetSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ContentShippingsettingsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContentShippingsettingsGetRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/{merchantId}/shippingsettings/{accountId}",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.ContentShippingsettingsGetSecurity(security);
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
      const res: operations.ContentShippingsettingsGetResponse =
        new operations.ContentShippingsettingsGetResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.shippingSettings = utils.objectToClass(
              httpRes?.data,
              shared.ShippingSettings
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Retrieves supported carriers and carrier services for an account.
   */
  contentShippingsettingsGetsupportedcarriers(
    req: operations.ContentShippingsettingsGetsupportedcarriersRequest,
    security: operations.ContentShippingsettingsGetsupportedcarriersSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ContentShippingsettingsGetsupportedcarriersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContentShippingsettingsGetsupportedcarriersRequest(
        req
      );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/{merchantId}/supportedCarriers",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security =
        new operations.ContentShippingsettingsGetsupportedcarriersSecurity(
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
      const res: operations.ContentShippingsettingsGetsupportedcarriersResponse =
        new operations.ContentShippingsettingsGetsupportedcarriersResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.shippingsettingsGetSupportedCarriersResponse =
              utils.objectToClass(
                httpRes?.data,
                shared.ShippingsettingsGetSupportedCarriersResponse
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Retrieves supported holidays for an account.
   */
  contentShippingsettingsGetsupportedholidays(
    req: operations.ContentShippingsettingsGetsupportedholidaysRequest,
    security: operations.ContentShippingsettingsGetsupportedholidaysSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ContentShippingsettingsGetsupportedholidaysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContentShippingsettingsGetsupportedholidaysRequest(
        req
      );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/{merchantId}/supportedHolidays",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security =
        new operations.ContentShippingsettingsGetsupportedholidaysSecurity(
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
      const res: operations.ContentShippingsettingsGetsupportedholidaysResponse =
        new operations.ContentShippingsettingsGetsupportedholidaysResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.shippingsettingsGetSupportedHolidaysResponse =
              utils.objectToClass(
                httpRes?.data,
                shared.ShippingsettingsGetSupportedHolidaysResponse
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Retrieves supported pickup services for an account.
   */
  contentShippingsettingsGetsupportedpickupservices(
    req: operations.ContentShippingsettingsGetsupportedpickupservicesRequest,
    security: operations.ContentShippingsettingsGetsupportedpickupservicesSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ContentShippingsettingsGetsupportedpickupservicesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.ContentShippingsettingsGetsupportedpickupservicesRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/{merchantId}/supportedPickupServices",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security =
        new operations.ContentShippingsettingsGetsupportedpickupservicesSecurity(
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
      const res: operations.ContentShippingsettingsGetsupportedpickupservicesResponse =
        new operations.ContentShippingsettingsGetsupportedpickupservicesResponse(
          {
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
          }
        );
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.shippingsettingsGetSupportedPickupServicesResponse =
              utils.objectToClass(
                httpRes?.data,
                shared.ShippingsettingsGetSupportedPickupServicesResponse
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Lists the shipping settings of the sub-accounts in your Merchant Center account.
   */
  contentShippingsettingsList(
    req: operations.ContentShippingsettingsListRequest,
    security: operations.ContentShippingsettingsListSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ContentShippingsettingsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContentShippingsettingsListRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/{merchantId}/shippingsettings",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.ContentShippingsettingsListSecurity(security);
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
      const res: operations.ContentShippingsettingsListResponse =
        new operations.ContentShippingsettingsListResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.shippingsettingsListResponse = utils.objectToClass(
              httpRes?.data,
              shared.ShippingsettingsListResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Updates the shipping settings of the account. Any fields that are not provided are deleted from the resource.
   */
  contentShippingsettingsUpdate(
    req: operations.ContentShippingsettingsUpdateRequest,
    security: operations.ContentShippingsettingsUpdateSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ContentShippingsettingsUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContentShippingsettingsUpdateRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/{merchantId}/shippingsettings/{accountId}",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "shippingSettings",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.ContentShippingsettingsUpdateSecurity(security);
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
      const res: operations.ContentShippingsettingsUpdateResponse =
        new operations.ContentShippingsettingsUpdateResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.shippingSettings = utils.objectToClass(
              httpRes?.data,
              shared.ShippingSettings
            );
          }
          break;
      }

      return res;
    });
  }
}
