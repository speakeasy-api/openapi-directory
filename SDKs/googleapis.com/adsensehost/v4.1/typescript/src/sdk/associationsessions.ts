/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Associationsessions {
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
   * Create an association session for initiating an association with an AdSense user.
   */
  adsensehostAssociationsessionsStart(
    req: operations.AdsensehostAssociationsessionsStartRequest,
    security: operations.AdsensehostAssociationsessionsStartSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.AdsensehostAssociationsessionsStartResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AdsensehostAssociationsessionsStartRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/associationsessions/start";
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.AdsensehostAssociationsessionsStartSecurity(
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
      const res: operations.AdsensehostAssociationsessionsStartResponse =
        new operations.AdsensehostAssociationsessionsStartResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.associationSession = utils.objectToClass(
              httpRes?.data,
              shared.AssociationSession
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Verify an association session after the association callback returns from AdSense signup.
   */
  adsensehostAssociationsessionsVerify(
    req: operations.AdsensehostAssociationsessionsVerifyRequest,
    security: operations.AdsensehostAssociationsessionsVerifySecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.AdsensehostAssociationsessionsVerifyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AdsensehostAssociationsessionsVerifyRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/associationsessions/verify";
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.AdsensehostAssociationsessionsVerifySecurity(
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
      const res: operations.AdsensehostAssociationsessionsVerifyResponse =
        new operations.AdsensehostAssociationsessionsVerifyResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.associationSession = utils.objectToClass(
              httpRes?.data,
              shared.AssociationSession
            );
          }
          break;
      }

      return res;
    });
  }
}
