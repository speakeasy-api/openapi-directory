/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Events {
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
   * Resets all player progress on the event with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
   */
  gamesManagementEventsReset(
    req: operations.GamesManagementEventsResetRequest,
    security: operations.GamesManagementEventsResetSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.GamesManagementEventsResetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GamesManagementEventsResetRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/games/v1management/events/{eventId}/reset",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.GamesManagementEventsResetSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "post",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GamesManagementEventsResetResponse =
        new operations.GamesManagementEventsResetResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          break;
      }

      return res;
    });
  }

  /**
   * Resets all player progress on all events for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
   */
  gamesManagementEventsResetAll(
    req: operations.GamesManagementEventsResetAllRequest,
    security: operations.GamesManagementEventsResetAllSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.GamesManagementEventsResetAllResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GamesManagementEventsResetAllRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/games/v1management/events/reset";
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.GamesManagementEventsResetAllSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "post",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GamesManagementEventsResetAllResponse =
        new operations.GamesManagementEventsResetAllResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          break;
      }

      return res;
    });
  }

  /**
   * Resets all draft events for all players. This method is only available to user accounts for your developer console.
   */
  gamesManagementEventsResetAllForAllPlayers(
    req: operations.GamesManagementEventsResetAllForAllPlayersRequest,
    security: operations.GamesManagementEventsResetAllForAllPlayersSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.GamesManagementEventsResetAllForAllPlayersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GamesManagementEventsResetAllForAllPlayersRequest(
        req
      );
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") +
      "/games/v1management/events/resetAllForAllPlayers";
    if (!(security instanceof utils.SpeakeasyBase)) {
      security =
        new operations.GamesManagementEventsResetAllForAllPlayersSecurity(
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
      method: "post",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GamesManagementEventsResetAllForAllPlayersResponse =
        new operations.GamesManagementEventsResetAllForAllPlayersResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          break;
      }

      return res;
    });
  }

  /**
   * Resets the event with the given ID for all players. This method is only available to user accounts for your developer console. Only draft events can be reset.
   */
  gamesManagementEventsResetForAllPlayers(
    req: operations.GamesManagementEventsResetForAllPlayersRequest,
    security: operations.GamesManagementEventsResetForAllPlayersSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.GamesManagementEventsResetForAllPlayersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GamesManagementEventsResetForAllPlayersRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/games/v1management/events/{eventId}/resetForAllPlayers",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.GamesManagementEventsResetForAllPlayersSecurity(
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
      method: "post",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GamesManagementEventsResetForAllPlayersResponse =
        new operations.GamesManagementEventsResetForAllPlayersResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          break;
      }

      return res;
    });
  }

  /**
   * Resets events with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft events may be reset.
   */
  gamesManagementEventsResetMultipleForAllPlayers(
    req: operations.GamesManagementEventsResetMultipleForAllPlayersRequest,
    security: operations.GamesManagementEventsResetMultipleForAllPlayersSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.GamesManagementEventsResetMultipleForAllPlayersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.GamesManagementEventsResetMultipleForAllPlayersRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") +
      "/games/v1management/events/resetMultipleForAllPlayers";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "eventsResetMultipleForAllRequest",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security =
        new operations.GamesManagementEventsResetMultipleForAllPlayersSecurity(
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
      const res: operations.GamesManagementEventsResetMultipleForAllPlayersResponse =
        new operations.GamesManagementEventsResetMultipleForAllPlayersResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          break;
      }

      return res;
    });
  }
}
