/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class RegionDisks {
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
   * Adds existing resource policies to a regional disk. You can only add one policy which will be applied to this disk for scheduling snapshot creation.
   */
  computeRegionDisksAddResourcePolicies(
    req: operations.ComputeRegionDisksAddResourcePoliciesRequest,
    security: operations.ComputeRegionDisksAddResourcePoliciesSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ComputeRegionDisksAddResourcePoliciesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ComputeRegionDisksAddResourcePoliciesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/projects/{project}/regions/{region}/disks/{disk}/addResourcePolicies",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "regionDisksAddResourcePoliciesRequest",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.ComputeRegionDisksAddResourcePoliciesSecurity(
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
      const res: operations.ComputeRegionDisksAddResourcePoliciesResponse =
        new operations.ComputeRegionDisksAddResourcePoliciesResponse({
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
   * Bulk create a set of disks.
   */
  computeRegionDisksBulkInsert(
    req: operations.ComputeRegionDisksBulkInsertRequest,
    security: operations.ComputeRegionDisksBulkInsertSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ComputeRegionDisksBulkInsertResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ComputeRegionDisksBulkInsertRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/projects/{project}/regions/{region}/disks/bulkInsert",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "bulkInsertDiskResource",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.ComputeRegionDisksBulkInsertSecurity(security);
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
      const res: operations.ComputeRegionDisksBulkInsertResponse =
        new operations.ComputeRegionDisksBulkInsertResponse({
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
   * Creates a snapshot of a specified persistent disk. For regular snapshot creation, consider using snapshots.insert instead, as that method supports more features, such as creating snapshots in a project different from the source disk project.
   */
  computeRegionDisksCreateSnapshot(
    req: operations.ComputeRegionDisksCreateSnapshotRequest,
    security: operations.ComputeRegionDisksCreateSnapshotSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ComputeRegionDisksCreateSnapshotResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ComputeRegionDisksCreateSnapshotRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/projects/{project}/regions/{region}/disks/{disk}/createSnapshot",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "snapshot",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.ComputeRegionDisksCreateSnapshotSecurity(
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
      const res: operations.ComputeRegionDisksCreateSnapshotResponse =
        new operations.ComputeRegionDisksCreateSnapshotResponse({
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
   * Deletes the specified regional persistent disk. Deleting a regional disk removes all the replicas of its data permanently and is irreversible. However, deleting a disk does not delete any snapshots previously made from the disk. You must separately delete snapshots.
   */
  computeRegionDisksDelete(
    req: operations.ComputeRegionDisksDeleteRequest,
    security: operations.ComputeRegionDisksDeleteSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ComputeRegionDisksDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ComputeRegionDisksDeleteRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/projects/{project}/regions/{region}/disks/{disk}",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.ComputeRegionDisksDeleteSecurity(security);
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
      const res: operations.ComputeRegionDisksDeleteResponse =
        new operations.ComputeRegionDisksDeleteResponse({
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
   * Returns a specified regional persistent disk.
   */
  computeRegionDisksGet(
    req: operations.ComputeRegionDisksGetRequest,
    security: operations.ComputeRegionDisksGetSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ComputeRegionDisksGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ComputeRegionDisksGetRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/projects/{project}/regions/{region}/disks/{disk}",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.ComputeRegionDisksGetSecurity(security);
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
      const res: operations.ComputeRegionDisksGetResponse =
        new operations.ComputeRegionDisksGetResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.disk = utils.objectToClass(httpRes?.data, shared.Disk);
          }
          break;
      }

      return res;
    });
  }

  /**
   * Gets the access control policy for a resource. May be empty if no such policy or resource exists.
   */
  computeRegionDisksGetIamPolicy(
    req: operations.ComputeRegionDisksGetIamPolicyRequest,
    security: operations.ComputeRegionDisksGetIamPolicySecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ComputeRegionDisksGetIamPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ComputeRegionDisksGetIamPolicyRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/projects/{project}/regions/{region}/disks/{resource}/getIamPolicy",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.ComputeRegionDisksGetIamPolicySecurity(
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
      const res: operations.ComputeRegionDisksGetIamPolicyResponse =
        new operations.ComputeRegionDisksGetIamPolicyResponse({
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
   * Creates a persistent regional disk in the specified project using the data included in the request.
   */
  computeRegionDisksInsert(
    req: operations.ComputeRegionDisksInsertRequest,
    security: operations.ComputeRegionDisksInsertSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ComputeRegionDisksInsertResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ComputeRegionDisksInsertRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/projects/{project}/regions/{region}/disks",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "disk",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.ComputeRegionDisksInsertSecurity(security);
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
      const res: operations.ComputeRegionDisksInsertResponse =
        new operations.ComputeRegionDisksInsertResponse({
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
   * Retrieves the list of persistent disks contained within the specified region.
   */
  computeRegionDisksList(
    req: operations.ComputeRegionDisksListRequest,
    security: operations.ComputeRegionDisksListSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ComputeRegionDisksListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ComputeRegionDisksListRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/projects/{project}/regions/{region}/disks",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.ComputeRegionDisksListSecurity(security);
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
      const res: operations.ComputeRegionDisksListResponse =
        new operations.ComputeRegionDisksListResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.diskList = utils.objectToClass(httpRes?.data, shared.DiskList);
          }
          break;
      }

      return res;
    });
  }

  /**
   * Removes resource policies from a regional disk.
   */
  computeRegionDisksRemoveResourcePolicies(
    req: operations.ComputeRegionDisksRemoveResourcePoliciesRequest,
    security: operations.ComputeRegionDisksRemoveResourcePoliciesSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ComputeRegionDisksRemoveResourcePoliciesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ComputeRegionDisksRemoveResourcePoliciesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/projects/{project}/regions/{region}/disks/{disk}/removeResourcePolicies",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "regionDisksRemoveResourcePoliciesRequest",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security =
        new operations.ComputeRegionDisksRemoveResourcePoliciesSecurity(
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
      const res: operations.ComputeRegionDisksRemoveResourcePoliciesResponse =
        new operations.ComputeRegionDisksRemoveResourcePoliciesResponse({
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
   * Resizes the specified regional persistent disk.
   */
  computeRegionDisksResize(
    req: operations.ComputeRegionDisksResizeRequest,
    security: operations.ComputeRegionDisksResizeSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ComputeRegionDisksResizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ComputeRegionDisksResizeRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/projects/{project}/regions/{region}/disks/{disk}/resize",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "regionDisksResizeRequest",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.ComputeRegionDisksResizeSecurity(security);
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
      const res: operations.ComputeRegionDisksResizeResponse =
        new operations.ComputeRegionDisksResizeResponse({
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
   * Sets the access control policy on the specified resource. Replaces any existing policy.
   */
  computeRegionDisksSetIamPolicy(
    req: operations.ComputeRegionDisksSetIamPolicyRequest,
    security: operations.ComputeRegionDisksSetIamPolicySecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ComputeRegionDisksSetIamPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ComputeRegionDisksSetIamPolicyRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/projects/{project}/regions/{region}/disks/{resource}/setIamPolicy",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "regionSetPolicyRequest",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.ComputeRegionDisksSetIamPolicySecurity(
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
      const res: operations.ComputeRegionDisksSetIamPolicyResponse =
        new operations.ComputeRegionDisksSetIamPolicyResponse({
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
   * Sets the labels on the target regional disk.
   */
  computeRegionDisksSetLabels(
    req: operations.ComputeRegionDisksSetLabelsRequest,
    security: operations.ComputeRegionDisksSetLabelsSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ComputeRegionDisksSetLabelsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ComputeRegionDisksSetLabelsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/projects/{project}/regions/{region}/disks/{resource}/setLabels",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "regionSetLabelsRequest",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.ComputeRegionDisksSetLabelsSecurity(security);
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
      const res: operations.ComputeRegionDisksSetLabelsResponse =
        new operations.ComputeRegionDisksSetLabelsResponse({
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
   * Starts asynchronous replication. Must be invoked on the primary disk.
   */
  computeRegionDisksStartAsyncReplication(
    req: operations.ComputeRegionDisksStartAsyncReplicationRequest,
    security: operations.ComputeRegionDisksStartAsyncReplicationSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ComputeRegionDisksStartAsyncReplicationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ComputeRegionDisksStartAsyncReplicationRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/projects/{project}/regions/{region}/disks/{disk}/startAsyncReplication",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "regionDisksStartAsyncReplicationRequest",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.ComputeRegionDisksStartAsyncReplicationSecurity(
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
      const res: operations.ComputeRegionDisksStartAsyncReplicationResponse =
        new operations.ComputeRegionDisksStartAsyncReplicationResponse({
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
   * Stops asynchronous replication. Can be invoked either on the primary or on the secondary disk.
   */
  computeRegionDisksStopAsyncReplication(
    req: operations.ComputeRegionDisksStopAsyncReplicationRequest,
    security: operations.ComputeRegionDisksStopAsyncReplicationSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ComputeRegionDisksStopAsyncReplicationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ComputeRegionDisksStopAsyncReplicationRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/projects/{project}/regions/{region}/disks/{disk}/stopAsyncReplication",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.ComputeRegionDisksStopAsyncReplicationSecurity(
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
      const res: operations.ComputeRegionDisksStopAsyncReplicationResponse =
        new operations.ComputeRegionDisksStopAsyncReplicationResponse({
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
   * Stops asynchronous replication for a consistency group of disks. Can be invoked either in the primary or secondary scope.
   */
  computeRegionDisksStopGroupAsyncReplication(
    req: operations.ComputeRegionDisksStopGroupAsyncReplicationRequest,
    security: operations.ComputeRegionDisksStopGroupAsyncReplicationSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ComputeRegionDisksStopGroupAsyncReplicationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ComputeRegionDisksStopGroupAsyncReplicationRequest(
        req
      );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/projects/{project}/regions/{region}/disks/stopGroupAsyncReplication",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "disksStopGroupAsyncReplicationResource",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security =
        new operations.ComputeRegionDisksStopGroupAsyncReplicationSecurity(
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
      const res: operations.ComputeRegionDisksStopGroupAsyncReplicationResponse =
        new operations.ComputeRegionDisksStopGroupAsyncReplicationResponse({
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
  computeRegionDisksTestIamPermissions(
    req: operations.ComputeRegionDisksTestIamPermissionsRequest,
    security: operations.ComputeRegionDisksTestIamPermissionsSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ComputeRegionDisksTestIamPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ComputeRegionDisksTestIamPermissionsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/projects/{project}/regions/{region}/disks/{resource}/testIamPermissions",
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
      security = new operations.ComputeRegionDisksTestIamPermissionsSecurity(
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
      const res: operations.ComputeRegionDisksTestIamPermissionsResponse =
        new operations.ComputeRegionDisksTestIamPermissionsResponse({
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
   * Update the specified disk with the data included in the request. Update is performed only on selected fields included as part of update-mask. Only the following fields can be modified: user_license.
   */
  computeRegionDisksUpdate(
    req: operations.ComputeRegionDisksUpdateRequest,
    security: operations.ComputeRegionDisksUpdateSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ComputeRegionDisksUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ComputeRegionDisksUpdateRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/projects/{project}/regions/{region}/disks/{disk}",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "disk1",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.ComputeRegionDisksUpdateSecurity(security);
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
      const res: operations.ComputeRegionDisksUpdateResponse =
        new operations.ComputeRegionDisksUpdateResponse({
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
