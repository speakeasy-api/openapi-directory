/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class ManagedZones {
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
   * Creates a new ManagedZone.
   */
  dnsManagedZonesCreate(
    req: operations.DnsManagedZonesCreateRequest,
    security: operations.DnsManagedZonesCreateSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DnsManagedZonesCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DnsManagedZonesCreateRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/dns/v1/projects/{project}/managedZones",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "managedZone",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.DnsManagedZonesCreateSecurity(security);
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
      const res: operations.DnsManagedZonesCreateResponse =
        new operations.DnsManagedZonesCreateResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.managedZone = utils.objectToClass(
              httpRes?.data,
              shared.ManagedZone
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Deletes a previously created ManagedZone.
   */
  dnsManagedZonesDelete(
    req: operations.DnsManagedZonesDeleteRequest,
    security: operations.DnsManagedZonesDeleteSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DnsManagedZonesDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DnsManagedZonesDeleteRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/dns/v1/projects/{project}/managedZones/{managedZone}",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.DnsManagedZonesDeleteSecurity(security);
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
      const res: operations.DnsManagedZonesDeleteResponse =
        new operations.DnsManagedZonesDeleteResponse({
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
   * Fetches the representation of an existing ManagedZone.
   */
  dnsManagedZonesGet(
    req: operations.DnsManagedZonesGetRequest,
    security: operations.DnsManagedZonesGetSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DnsManagedZonesGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DnsManagedZonesGetRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/dns/v1/projects/{project}/managedZones/{managedZone}",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.DnsManagedZonesGetSecurity(security);
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
      const res: operations.DnsManagedZonesGetResponse =
        new operations.DnsManagedZonesGetResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.managedZone = utils.objectToClass(
              httpRes?.data,
              shared.ManagedZone
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
   */
  dnsManagedZonesGetIamPolicy(
    req: operations.DnsManagedZonesGetIamPolicyRequest,
    security: operations.DnsManagedZonesGetIamPolicySecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DnsManagedZonesGetIamPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DnsManagedZonesGetIamPolicyRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/dns/v1/{resource}:getIamPolicy",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "googleIamV1GetIamPolicyRequest",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.DnsManagedZonesGetIamPolicySecurity(security);
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
      const res: operations.DnsManagedZonesGetIamPolicyResponse =
        new operations.DnsManagedZonesGetIamPolicyResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.googleIamV1Policy = utils.objectToClass(
              httpRes?.data,
              shared.GoogleIamV1Policy
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Enumerates ManagedZones that have been created but not yet deleted.
   */
  dnsManagedZonesList(
    req: operations.DnsManagedZonesListRequest,
    security: operations.DnsManagedZonesListSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DnsManagedZonesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DnsManagedZonesListRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/dns/v1/projects/{project}/managedZones",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.DnsManagedZonesListSecurity(security);
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
      const res: operations.DnsManagedZonesListResponse =
        new operations.DnsManagedZonesListResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.managedZonesListResponse = utils.objectToClass(
              httpRes?.data,
              shared.ManagedZonesListResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Applies a partial update to an existing ManagedZone.
   */
  dnsManagedZonesPatch(
    req: operations.DnsManagedZonesPatchRequest,
    security: operations.DnsManagedZonesPatchSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DnsManagedZonesPatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DnsManagedZonesPatchRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/dns/v1/projects/{project}/managedZones/{managedZone}",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "managedZone1",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.DnsManagedZonesPatchSecurity(security);
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
      const res: operations.DnsManagedZonesPatchResponse =
        new operations.DnsManagedZonesPatchResponse({
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
   * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
   */
  dnsManagedZonesSetIamPolicy(
    req: operations.DnsManagedZonesSetIamPolicyRequest,
    security: operations.DnsManagedZonesSetIamPolicySecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DnsManagedZonesSetIamPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DnsManagedZonesSetIamPolicyRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/dns/v1/{resource}:setIamPolicy",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "googleIamV1SetIamPolicyRequest",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.DnsManagedZonesSetIamPolicySecurity(security);
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
      const res: operations.DnsManagedZonesSetIamPolicyResponse =
        new operations.DnsManagedZonesSetIamPolicyResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.googleIamV1Policy = utils.objectToClass(
              httpRes?.data,
              shared.GoogleIamV1Policy
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Returns permissions that a caller has on the specified resource. If the resource does not exist, this returns an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
   */
  dnsManagedZonesTestIamPermissions(
    req: operations.DnsManagedZonesTestIamPermissionsRequest,
    security: operations.DnsManagedZonesTestIamPermissionsSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DnsManagedZonesTestIamPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DnsManagedZonesTestIamPermissionsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/dns/v1/{resource}:testIamPermissions",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "googleIamV1TestIamPermissionsRequest",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.DnsManagedZonesTestIamPermissionsSecurity(
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
      const res: operations.DnsManagedZonesTestIamPermissionsResponse =
        new operations.DnsManagedZonesTestIamPermissionsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.googleIamV1TestIamPermissionsResponse = utils.objectToClass(
              httpRes?.data,
              shared.GoogleIamV1TestIamPermissionsResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Updates an existing ManagedZone.
   */
  dnsManagedZonesUpdate(
    req: operations.DnsManagedZonesUpdateRequest,
    security: operations.DnsManagedZonesUpdateSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DnsManagedZonesUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DnsManagedZonesUpdateRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/dns/v1/projects/{project}/managedZones/{managedZone}",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "managedZone1",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.DnsManagedZonesUpdateSecurity(security);
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
      const res: operations.DnsManagedZonesUpdateResponse =
        new operations.DnsManagedZonesUpdateResponse({
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
