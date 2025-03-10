/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class CustomCommands {
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
   * Create command
   *
   * @remarks
   * Creates custom chat command
   */
  createCommand(
    req: shared.CreateCommandRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCommandResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new shared.CreateCommandRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/commands";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "request",
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
      const res: operations.CreateCommandResponse =
        new operations.CreateCommandResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
          headers: utils.getHeadersFromResponse(httpRes.headers),
        });
      switch (true) {
        case httpRes?.status == 201:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.createCommandResponse = utils.objectToClass(
              httpRes?.data,
              shared.CreateCommandResponse
            );
          }
          break;
        case httpRes?.status == 400:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.apiError = utils.objectToClass(httpRes?.data, shared.APIError);
          }
          break;
        case httpRes?.status == 429:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.apiError = utils.objectToClass(httpRes?.data, shared.APIError);
          }
          break;
      }

      return res;
    });
  }

  /**
   * List commands
   *
   * @remarks
   * Returns all custom commands
   */
  listCommands(
    config?: AxiosRequestConfig
  ): Promise<operations.ListCommandsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/commands";

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
      const res: operations.ListCommandsResponse =
        new operations.ListCommandsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
          headers: utils.getHeadersFromResponse(httpRes.headers),
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.listCommandsResponse = utils.objectToClass(
              httpRes?.data,
              shared.ListCommandsResponse
            );
          }
          break;
        case httpRes?.status == 400:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.apiError = utils.objectToClass(httpRes?.data, shared.APIError);
          }
          break;
        case httpRes?.status == 429:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.apiError = utils.objectToClass(httpRes?.data, shared.APIError);
          }
          break;
      }

      return res;
    });
  }
}
