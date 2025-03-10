/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class HttpsHealthChecks {
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
   * Deletes the specified HttpsHealthCheck resource.
   */
  computeHttpsHealthChecksDelete(
    req: operations.ComputeHttpsHealthChecksDeleteRequest,
    security: operations.ComputeHttpsHealthChecksDeleteSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ComputeHttpsHealthChecksDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ComputeHttpsHealthChecksDeleteRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/projects/{project}/global/httpsHealthChecks/{httpsHealthCheck}",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.ComputeHttpsHealthChecksDeleteSecurity(
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
      method: "delete",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ComputeHttpsHealthChecksDeleteResponse =
        new operations.ComputeHttpsHealthChecksDeleteResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.operation = utils.objectToClass(
              httpRes?.data,
              shared.Operation
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Returns the specified HttpsHealthCheck resource.
   */
  computeHttpsHealthChecksGet(
    req: operations.ComputeHttpsHealthChecksGetRequest,
    security: operations.ComputeHttpsHealthChecksGetSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ComputeHttpsHealthChecksGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ComputeHttpsHealthChecksGetRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/projects/{project}/global/httpsHealthChecks/{httpsHealthCheck}",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.ComputeHttpsHealthChecksGetSecurity(security);
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
      const res: operations.ComputeHttpsHealthChecksGetResponse =
        new operations.ComputeHttpsHealthChecksGetResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.httpsHealthCheck = utils.objectToClass(
              httpRes?.data,
              shared.HttpsHealthCheck1
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Creates a HttpsHealthCheck resource in the specified project using the data included in the request.
   */
  computeHttpsHealthChecksInsert(
    req: operations.ComputeHttpsHealthChecksInsertRequest,
    security: operations.ComputeHttpsHealthChecksInsertSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ComputeHttpsHealthChecksInsertResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ComputeHttpsHealthChecksInsertRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/projects/{project}/global/httpsHealthChecks",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "httpsHealthCheck1",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.ComputeHttpsHealthChecksInsertSecurity(
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
      const res: operations.ComputeHttpsHealthChecksInsertResponse =
        new operations.ComputeHttpsHealthChecksInsertResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.operation = utils.objectToClass(
              httpRes?.data,
              shared.Operation
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Retrieves the list of HttpsHealthCheck resources available to the specified project.
   */
  computeHttpsHealthChecksList(
    req: operations.ComputeHttpsHealthChecksListRequest,
    security: operations.ComputeHttpsHealthChecksListSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ComputeHttpsHealthChecksListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ComputeHttpsHealthChecksListRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/projects/{project}/global/httpsHealthChecks",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.ComputeHttpsHealthChecksListSecurity(security);
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
      const res: operations.ComputeHttpsHealthChecksListResponse =
        new operations.ComputeHttpsHealthChecksListResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.httpsHealthCheckList = utils.objectToClass(
              httpRes?.data,
              shared.HttpsHealthCheckList
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Updates a HttpsHealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
   */
  computeHttpsHealthChecksPatch(
    req: operations.ComputeHttpsHealthChecksPatchRequest,
    security: operations.ComputeHttpsHealthChecksPatchSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ComputeHttpsHealthChecksPatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ComputeHttpsHealthChecksPatchRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/projects/{project}/global/httpsHealthChecks/{httpsHealthCheck}",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "httpsHealthCheck1",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.ComputeHttpsHealthChecksPatchSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...reqBodyHeaders, ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "patch",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ComputeHttpsHealthChecksPatchResponse =
        new operations.ComputeHttpsHealthChecksPatchResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.operation = utils.objectToClass(
              httpRes?.data,
              shared.Operation
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Returns permissions that a caller has on the specified resource.
   */
  computeHttpsHealthChecksTestIamPermissions(
    req: operations.ComputeHttpsHealthChecksTestIamPermissionsRequest,
    security: operations.ComputeHttpsHealthChecksTestIamPermissionsSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ComputeHttpsHealthChecksTestIamPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ComputeHttpsHealthChecksTestIamPermissionsRequest(
        req
      );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/projects/{project}/global/httpsHealthChecks/{resource}/testIamPermissions",
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
      security =
        new operations.ComputeHttpsHealthChecksTestIamPermissionsSecurity(
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
      const res: operations.ComputeHttpsHealthChecksTestIamPermissionsResponse =
        new operations.ComputeHttpsHealthChecksTestIamPermissionsResponse({
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

  /**
   * Updates a HttpsHealthCheck resource in the specified project using the data included in the request.
   */
  computeHttpsHealthChecksUpdate(
    req: operations.ComputeHttpsHealthChecksUpdateRequest,
    security: operations.ComputeHttpsHealthChecksUpdateSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ComputeHttpsHealthChecksUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ComputeHttpsHealthChecksUpdateRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/projects/{project}/global/httpsHealthChecks/{httpsHealthCheck}",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "httpsHealthCheck1",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.ComputeHttpsHealthChecksUpdateSecurity(
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
      method: "put",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ComputeHttpsHealthChecksUpdateResponse =
        new operations.ComputeHttpsHealthChecksUpdateResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.operation = utils.objectToClass(
              httpRes?.data,
              shared.Operation
            );
          }
          break;
      }

      return res;
    });
  }
}
