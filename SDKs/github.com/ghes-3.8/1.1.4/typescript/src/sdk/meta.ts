/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Endpoints that give information about the API.
 */
export class Meta {
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
   * Get GitHub Enterprise Server meta information
   *
   * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/meta#get-github-meta-information} - API method documentation
   */
  metaGet(config?: AxiosRequestConfig): Promise<operations.MetaGetResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/meta";

    const client: AxiosInstance = this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.MetaGetResponse = new operations.MetaGetResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.apiOverview = utils.objectToClass(
              httpRes?.data,
              shared.ApiOverview
            );
          }
          break;
        case httpRes?.status == 304:
          break;
      }

      return res;
    });
  }

  /**
   * Get Octocat
   *
   * @remarks
   * Get the octocat as ASCII art
   *
   * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/meta#get-octocat} - API method documentation
   */
  metaGetOctocat(
    req: operations.MetaGetOctocatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MetaGetOctocatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MetaGetOctocatRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/octocat";

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
      const res: operations.MetaGetOctocatResponse =
        new operations.MetaGetOctocatResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (
            utils.matchContentType(contentType, `application/octocat-stream`)
          ) {
            res.metaGetOctocat200ApplicationOctocatStreamString =
              JSON.stringify(httpRes?.data);
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get the Zen of GitHub
   *
   * @remarks
   * Get a random sentence from the Zen of GitHub
   *
   * @see {@link https://docs.github.com/enterprise-server@3.8/rest/meta#get-the-zen-of-github} - API method documentation
   */
  metaGetZen(
    config?: AxiosRequestConfig
  ): Promise<operations.MetaGetZenResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/zen";

    const client: AxiosInstance = this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.MetaGetZenResponse =
        new operations.MetaGetZenResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `text/plain`)) {
            res.metaGetZen200TextPlainString = JSON.stringify(httpRes?.data);
          }
          break;
      }

      return res;
    });
  }

  /**
   * GitHub API Root
   *
   * @remarks
   * Get Hypermedia links to resources accessible in GitHub's REST API
   *
   * @see {@link https://docs.github.com/enterprise-server@3.8/rest/overview/resources-in-the-rest-api#root-endpoint} - API method documentation
   */
  metaRoot(config?: AxiosRequestConfig): Promise<operations.MetaRootResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/";

    const client: AxiosInstance = this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.MetaRootResponse = new operations.MetaRootResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.root = utils.objectToClass(httpRes?.data, shared.Root);
          }
          break;
      }

      return res;
    });
  }
}
