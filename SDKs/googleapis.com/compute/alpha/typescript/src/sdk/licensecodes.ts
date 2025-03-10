/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class LicenseCodes {
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
   * Return a specified license code. License codes are mirrored across all projects that have permissions to read the License Code. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.
   */
  computeLicenseCodesGet(
    req: operations.ComputeLicenseCodesGetRequest,
    security: operations.ComputeLicenseCodesGetSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ComputeLicenseCodesGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ComputeLicenseCodesGetRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/projects/{project}/global/licenseCodes/{licenseCode}",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.ComputeLicenseCodesGetSecurity(security);
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
      const res: operations.ComputeLicenseCodesGetResponse =
        new operations.ComputeLicenseCodesGetResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.licenseCode = utils.objectToClass(
              httpRes?.data,
              shared.LicenseCode
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Gets the access control policy for a resource. May be empty if no such policy or resource exists. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.
   */
  computeLicenseCodesGetIamPolicy(
    req: operations.ComputeLicenseCodesGetIamPolicyRequest,
    security: operations.ComputeLicenseCodesGetIamPolicySecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ComputeLicenseCodesGetIamPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ComputeLicenseCodesGetIamPolicyRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/projects/{project}/global/licenseCodes/{resource}/getIamPolicy",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.ComputeLicenseCodesGetIamPolicySecurity(
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
      const res: operations.ComputeLicenseCodesGetIamPolicyResponse =
        new operations.ComputeLicenseCodesGetIamPolicyResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.policy = utils.objectToClass(httpRes?.data, shared.Policy);
          }
          break;
      }

      return res;
    });
  }

  /**
   * Sets the access control policy on the specified resource. Replaces any existing policy. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.
   */
  computeLicenseCodesSetIamPolicy(
    req: operations.ComputeLicenseCodesSetIamPolicyRequest,
    security: operations.ComputeLicenseCodesSetIamPolicySecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ComputeLicenseCodesSetIamPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ComputeLicenseCodesSetIamPolicyRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/projects/{project}/global/licenseCodes/{resource}/setIamPolicy",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "globalSetPolicyRequest",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.ComputeLicenseCodesSetIamPolicySecurity(
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
      const res: operations.ComputeLicenseCodesSetIamPolicyResponse =
        new operations.ComputeLicenseCodesSetIamPolicyResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.policy = utils.objectToClass(httpRes?.data, shared.Policy);
          }
          break;
      }

      return res;
    });
  }

  /**
   * Returns permissions that a caller has on the specified resource. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.
   */
  computeLicenseCodesTestIamPermissions(
    req: operations.ComputeLicenseCodesTestIamPermissionsRequest,
    security: operations.ComputeLicenseCodesTestIamPermissionsSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ComputeLicenseCodesTestIamPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ComputeLicenseCodesTestIamPermissionsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/projects/{project}/global/licenseCodes/{resource}/testIamPermissions",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "testPermissionsRequest",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.ComputeLicenseCodesTestIamPermissionsSecurity(
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
      const res: operations.ComputeLicenseCodesTestIamPermissionsResponse =
        new operations.ComputeLicenseCodesTestIamPermissionsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.testPermissionsResponse = utils.objectToClass(
              httpRes?.data,
              shared.TestPermissionsResponse
            );
          }
          break;
      }

      return res;
    });
  }
}
