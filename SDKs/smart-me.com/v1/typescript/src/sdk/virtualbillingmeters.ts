/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class VirtualBillingMeters {
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
   * Beta: Gets all Meters available to activate as a Virtual Meter.
   *
   * @remarks
   * Beta: Gets all Meters available to activate as a Virtual Meter.
   */
  virtualBillingMetersGet(
    config?: AxiosRequestConfig
  ): Promise<operations.VirtualBillingMetersGetResponse> {
    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/api/VirtualBillingMeters";

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
      const res: operations.VirtualBillingMetersGetResponse =
        new operations.VirtualBillingMetersGetResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.devices = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.devices = utils.objectToClass(
              httpRes?.data,
              shared.Device,
              resFieldDepth
            );
          }
          if (utils.matchContentType(contentType, `text/json`)) {
            res.devices = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.devices = utils.objectToClass(
              httpRes?.data,
              shared.Device,
              resFieldDepth
            );
          }
          if (utils.matchContentType(contentType, `application/xml`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            const out: Uint8Array = new Uint8Array(resBody.length);
            for (let i = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.body = out;
          }
          if (utils.matchContentType(contentType, `text/xml`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            const out: Uint8Array = new Uint8Array(resBody.length);
            for (let i = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.body = out;
          }
          break;
      }

      return res;
    });
  }
}
