/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import axios from "axios";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
  "http://azure-api.sportsdata.io/v3/nba/articles-rotoballer",
  "https://azure-api.sportsdata.io/v3/nba/articles-rotoballer",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
  /**
   * The security details required to authenticate the SDK
   */
  security?: shared.Security;
  /**
   * Allows overriding the default axios client used by the SDK
   */
  defaultClient?: AxiosInstance;
  /**
   * Allows overriding the default server URL used by the SDK
   */
  serverURL?: string;
};

export class SDK {
  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";
  private _globals: any;

  constructor(props?: SDKProps) {
    this._serverURL = props?.serverURL ?? ServerList[0];

    this._defaultClient =
      props?.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props?.security) {
      let security: shared.Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new shared.Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }
  }

  /**
   * RotoBaller Articles
   */
  rotoballerArticles(
    req: operations.RotoballerArticlesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RotoballerArticlesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RotoballerArticlesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/{format}/RotoBallerArticles",
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
      const res: operations.RotoballerArticlesResponse =
        new operations.RotoballerArticlesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.articles = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.articles = utils.objectToClass(
              httpRes?.data,
              shared.Article,
              resFieldDepth
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * RotoBaller Articles by Date
   */
  rotoballerArticlesByDate(
    req: operations.RotoballerArticlesByDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RotoballerArticlesByDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RotoballerArticlesByDateRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/{format}/RotoBallerArticlesByDate/{date}",
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
      const res: operations.RotoballerArticlesByDateResponse =
        new operations.RotoballerArticlesByDateResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.articles = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.articles = utils.objectToClass(
              httpRes?.data,
              shared.Article,
              resFieldDepth
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * RotoBaller Articles by Player
   */
  rotoballerArticlesByPlayer(
    req: operations.RotoballerArticlesByPlayerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RotoballerArticlesByPlayerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RotoballerArticlesByPlayerRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/{format}/RotoBallerArticlesByPlayerID/{playerid}",
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
      const res: operations.RotoballerArticlesByPlayerResponse =
        new operations.RotoballerArticlesByPlayerResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.articles = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.articles = utils.objectToClass(
              httpRes?.data,
              shared.Article,
              resFieldDepth
            );
          }
          break;
      }

      return res;
    });
  }
}
