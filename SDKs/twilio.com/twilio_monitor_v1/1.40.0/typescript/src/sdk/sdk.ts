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
export const ServerList = ["https://monitor.twilio.com"] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
  /**
   * Allows overriding the default axios client used by the SDK
   */
  defaultClient?: AxiosInstance;
  /**
   * Allows overriding the default server URL used by the SDK
   */
  serverURL?: string;
};

/**
 * This is the public Twilio REST API.
 */
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
    this._securityClient = this._defaultClient;
  }

  fetchAlert(
    req: operations.FetchAlertRequest,
    security: operations.FetchAlertSecurity,
    serverURL?: string,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchAlertResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchAlertRequest(req);
    }

    let baseURL: string = operations.FetchAlertServerList[0];
    if (serverURL) {
      baseURL = serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Alerts/{Sid}", req);
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.FetchAlertSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.FetchAlertResponse =
        new operations.FetchAlertResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.monitorV1AlertInstance = utils.objectToClass(
              httpRes?.data,
              shared.MonitorV1AlertInstance
            );
          }
          break;
      }

      return res;
    });
  }

  fetchEvent(
    req: operations.FetchEventRequest,
    security: operations.FetchEventSecurity,
    serverURL?: string,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchEventResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchEventRequest(req);
    }

    let baseURL: string = operations.FetchEventServerList[0];
    if (serverURL) {
      baseURL = serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Events/{Sid}", req);
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.FetchEventSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.FetchEventResponse =
        new operations.FetchEventResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.monitorV1Event = utils.objectToClass(
              httpRes?.data,
              shared.MonitorV1Event
            );
          }
          break;
      }

      return res;
    });
  }

  listAlert(
    req: operations.ListAlertRequest,
    security: operations.ListAlertSecurity,
    serverURL?: string,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAlertResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAlertRequest(req);
    }

    let baseURL: string = operations.ListAlertServerList[0];
    if (serverURL) {
      baseURL = serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Alerts";
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.ListAlertSecurity(security);
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
      const res: operations.ListAlertResponse =
        new operations.ListAlertResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.listAlertResponse = utils.objectToClass(
              httpRes?.data,
              operations.ListAlertListAlertResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Returns a list of events in the account, sorted by event-date.
   */
  listEvent(
    req: operations.ListEventRequest,
    security: operations.ListEventSecurity,
    serverURL?: string,
    config?: AxiosRequestConfig
  ): Promise<operations.ListEventResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListEventRequest(req);
    }

    let baseURL: string = operations.ListEventServerList[0];
    if (serverURL) {
      baseURL = serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Events";
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.ListEventSecurity(security);
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
      const res: operations.ListEventResponse =
        new operations.ListEventResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.listEventResponse = utils.objectToClass(
              httpRes?.data,
              operations.ListEventListEventResponse
            );
          }
          break;
      }

      return res;
    });
  }
}
