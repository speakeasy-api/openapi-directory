/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * The Licensee resource represents an alternate legal End User of our data who may not be same entity as the owners of the account.
 *
 * @remarks
 *
 * The concept of Licensees underpins our sublicensing platform, which allows users to license multiple external organisations or individuals to access data under the same account.
 *
 * Sublicensing is ideal for platform vendors, who provide services to multiple clients who in turn each have their own users.
 *
 */
export class Licensees {
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
   * Create
   *
   * @remarks
   * Create a licensee for the specified API Key.
   */
  createLicensee(
    req: operations.CreateLicenseeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateLicenseeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateLicenseeRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/keys/{key}/licensees",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "licenseeEditable",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

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
      const res: operations.CreateLicenseeResponse =
        new operations.CreateLicenseeResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.licenseeResponse = utils.objectToClass(
              httpRes?.data,
              shared.LicenseeResponse
            );
          }
          break;
        case httpRes?.status == 400:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.badRequestResponse = utils.objectToClass(
              httpRes?.data,
              shared.BadRequestResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Cancel
   *
   * @remarks
   * Cancels a licensee key. This renders a licensee unusable. This action can be reversed if you get in contact with us.
   */
  deleteLicensee(
    req: operations.DeleteLicenseeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteLicenseeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteLicenseeRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/keys/{key}/licensees/{licensee}",
      req
    );

    const client: AxiosInstance = this._defaultClient;

    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "delete",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.DeleteLicenseeResponse =
        new operations.DeleteLicenseeResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.licenseeDeleteResponse = utils.objectToClass(
              httpRes?.data,
              operations.DeleteLicenseeLicenseeDeleteResponse
            );
          }
          break;
        case httpRes?.status == 400:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.badRequestResponse = utils.objectToClass(
              httpRes?.data,
              shared.BadRequestResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * List
   *
   * @remarks
   * Returns a list of licensees for a key.
   */
  listLicensees(
    req: operations.ListLicenseesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListLicenseesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListLicenseesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/keys/{key}/licensees",
      req
    );

    const client: AxiosInstance = this._defaultClient;

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
      const res: operations.ListLicenseesResponse =
        new operations.ListLicenseesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.licenseesResponse = utils.objectToClass(
              httpRes?.data,
              shared.LicenseesResponse
            );
          }
          break;
        case httpRes?.status == 400:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.badRequestResponse = utils.objectToClass(
              httpRes?.data,
              shared.BadRequestResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Retrieve
   *
   * @remarks
   * Returns licensee information as identified by the licensee key.
   */
  retrieveLicensee(
    req: operations.RetrieveLicenseeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RetrieveLicenseeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RetrieveLicenseeRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/keys/{key}/licensees/{licensee}",
      req
    );

    const client: AxiosInstance = this._defaultClient;

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
      const res: operations.RetrieveLicenseeResponse =
        new operations.RetrieveLicenseeResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.licenseeResponse = utils.objectToClass(
              httpRes?.data,
              shared.LicenseeResponse
            );
          }
          break;
        case httpRes?.status == 400:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.badRequestResponse = utils.objectToClass(
              httpRes?.data,
              shared.BadRequestResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Update
   *
   * @remarks
   * Update Licensee
   */
  updateLicensee(
    req: operations.UpdateLicenseeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateLicenseeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateLicenseeRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/keys/{key}/licensees/{licensee}",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "licenseeEditable",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

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
      const res: operations.UpdateLicenseeResponse =
        new operations.UpdateLicenseeResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.licenseeResponse = utils.objectToClass(
              httpRes?.data,
              shared.LicenseeResponse
            );
          }
          break;
        case httpRes?.status == 400:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.badRequestResponse = utils.objectToClass(
              httpRes?.data,
              shared.BadRequestResponse
            );
          }
          break;
      }

      return res;
    });
  }
}
