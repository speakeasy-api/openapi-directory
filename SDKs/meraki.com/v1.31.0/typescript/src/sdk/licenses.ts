/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Licenses {
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
   * Assign SM seats to a network
   *
   * @remarks
   * Assign SM seats to a network. This will increase the managed SM device limit of the network
   */
  assignOrganizationLicensesSeats(
    req: operations.AssignOrganizationLicensesSeatsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AssignOrganizationLicensesSeatsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AssignOrganizationLicensesSeatsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/organizations/{organizationId}/licenses/assignSeats",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.AssignOrganizationLicensesSeatsResponse =
        new operations.AssignOrganizationLicensesSeatsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.assignOrganizationLicensesSeats200ApplicationJSONObject =
              utils.objectToClass(
                httpRes?.data,
                operations.AssignOrganizationLicensesSeats200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Display a license
   *
   * @remarks
   * Display a license
   */
  getOrganizationLicense(
    req: operations.GetOrganizationLicenseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationLicenseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationLicenseRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/organizations/{organizationId}/licenses/{licenseId}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetOrganizationLicenseResponse =
        new operations.GetOrganizationLicenseResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getOrganizationLicense200ApplicationJSONObject =
              utils.objectToClass(
                httpRes?.data,
                operations.GetOrganizationLicense200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * List the licenses for an organization
   *
   * @remarks
   * List the licenses for an organization
   */
  getOrganizationLicenses(
    req: operations.GetOrganizationLicensesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationLicensesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationLicensesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/organizations/{organizationId}/licenses",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

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
      const res: operations.GetOrganizationLicensesResponse =
        new operations.GetOrganizationLicensesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
          headers: utils.getHeadersFromResponse(httpRes.headers),
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getOrganizationLicenses200ApplicationJSONObjects = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.getOrganizationLicenses200ApplicationJSONObjects =
              utils.objectToClass(
                httpRes?.data,
                operations.GetOrganizationLicenses200ApplicationJSON,
                resFieldDepth
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Return an overview of the license state for an organization
   *
   * @remarks
   * Return an overview of the license state for an organization
   */
  getOrganizationLicensesOverview(
    req: operations.GetOrganizationLicensesOverviewRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationLicensesOverviewResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationLicensesOverviewRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/organizations/{organizationId}/licenses/overview",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetOrganizationLicensesOverviewResponse =
        new operations.GetOrganizationLicensesOverviewResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getOrganizationLicensesOverview200ApplicationJSONObject =
              utils.objectToClass(httpRes?.data);
          }
          break;
      }

      return res;
    });
  }

  /**
   * List the licenses in a coterm organization
   *
   * @remarks
   * List the licenses in a coterm organization
   */
  getOrganizationLicensingCotermLicenses(
    req: operations.GetOrganizationLicensingCotermLicensesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationLicensingCotermLicensesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationLicensingCotermLicensesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/organizations/{organizationId}/licensing/coterm/licenses",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

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
      const res: operations.GetOrganizationLicensingCotermLicensesResponse =
        new operations.GetOrganizationLicensingCotermLicensesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
          headers: utils.getHeadersFromResponse(httpRes.headers),
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getOrganizationLicensingCotermLicenses200ApplicationJSONObjects =
              [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.getOrganizationLicensingCotermLicenses200ApplicationJSONObjects =
              utils.objectToClass(
                httpRes?.data,
                operations.GetOrganizationLicensingCotermLicenses200ApplicationJSON,
                resFieldDepth
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Move licenses to another organization
   *
   * @remarks
   * Move licenses to another organization. This will also move any devices that the licenses are assigned to
   */
  moveOrganizationLicenses(
    req: operations.MoveOrganizationLicensesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MoveOrganizationLicensesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MoveOrganizationLicensesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/organizations/{organizationId}/licenses/move",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.MoveOrganizationLicensesResponse =
        new operations.MoveOrganizationLicensesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.moveOrganizationLicenses200ApplicationJSONObject =
              utils.objectToClass(
                httpRes?.data,
                operations.MoveOrganizationLicenses200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Move SM seats to another organization
   *
   * @remarks
   * Move SM seats to another organization
   */
  moveOrganizationLicensesSeats(
    req: operations.MoveOrganizationLicensesSeatsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MoveOrganizationLicensesSeatsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MoveOrganizationLicensesSeatsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/organizations/{organizationId}/licenses/moveSeats",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.MoveOrganizationLicensesSeatsResponse =
        new operations.MoveOrganizationLicensesSeatsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.moveOrganizationLicensesSeats200ApplicationJSONObject =
              utils.objectToClass(
                httpRes?.data,
                operations.MoveOrganizationLicensesSeats200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Moves a license to a different organization (coterm only)
   *
   * @remarks
   * Moves a license to a different organization (coterm only)
   */
  moveOrganizationLicensingCotermLicenses(
    req: operations.MoveOrganizationLicensingCotermLicensesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MoveOrganizationLicensingCotermLicensesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MoveOrganizationLicensingCotermLicensesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/organizations/{organizationId}/licensing/coterm/licenses/move",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.MoveOrganizationLicensingCotermLicensesResponse =
        new operations.MoveOrganizationLicensingCotermLicensesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.moveOrganizationLicensingCotermLicenses200ApplicationJSONObject =
              utils.objectToClass(
                httpRes?.data,
                operations.MoveOrganizationLicensingCotermLicenses200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Renew SM seats of a license
   *
   * @remarks
   * Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license
   */
  renewOrganizationLicensesSeats(
    req: operations.RenewOrganizationLicensesSeatsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RenewOrganizationLicensesSeatsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RenewOrganizationLicensesSeatsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/organizations/{organizationId}/licenses/renewSeats",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.RenewOrganizationLicensesSeatsResponse =
        new operations.RenewOrganizationLicensesSeatsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.renewOrganizationLicensesSeats200ApplicationJSONObject =
              utils.objectToClass(
                httpRes?.data,
                operations.RenewOrganizationLicensesSeats200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Update a license
   *
   * @remarks
   * Update a license
   */
  updateOrganizationLicense(
    req: operations.UpdateOrganizationLicenseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateOrganizationLicenseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateOrganizationLicenseRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/organizations/{organizationId}/licenses/{licenseId}",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };

    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.UpdateOrganizationLicenseResponse =
        new operations.UpdateOrganizationLicenseResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.updateOrganizationLicense200ApplicationJSONObject =
              utils.objectToClass(
                httpRes?.data,
                operations.UpdateOrganizationLicense200ApplicationJSON
              );
          }
          break;
      }

      return res;
    });
  }
}
