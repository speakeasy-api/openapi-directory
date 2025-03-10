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
  /**
   * papiNet Mock Server
   */
  "https://papinet.papinet.io",
] as const;

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
 * papinet API is a global initiative for the Forst and Paper supply chain.
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

  /**
   * List `orders`
   *
   * @remarks
   * Gets a paginated list of all `orders`.
   */
  getOrders(
    req: operations.GetOrdersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrdersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrdersRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/orders";

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
      const res: operations.GetOrdersResponse =
        new operations.GetOrdersResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.listOfOrders = utils.objectToClass(
              httpRes?.data,
              shared.ListOfOrders
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get an `order`
   *
   * @remarks
   * Gets the details of a specific `order`, including a paginated list of all its lines.
   */
  getOrdersOrderId(
    req: operations.GetOrdersOrderIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrdersOrderIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrdersOrderIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/orders/{orderId}", req);

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
      const res: operations.GetOrdersOrderIdResponse =
        new operations.GetOrdersOrderIdResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getOrder = utils.objectToClass(httpRes?.data, shared.GetOrder);
          }
          break;
      }

      return res;
    });
  }
}
