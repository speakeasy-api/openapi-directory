/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class InventorySourceGroups {
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
   * Bulk edits multiple assignments between inventory sources and a single inventory source group. The operation will delete the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.deleted_assigned_inventory_sources and then create the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.created_assigned_inventory_sources.
   */
  displayvideoInventorySourceGroupsAssignedInventorySourcesBulkEdit(
    req: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditRequest,
    security: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v2/inventorySourceGroups/{inventorySourceGroupId}/assignedInventorySources:bulkEdit",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "bulkEditAssignedInventorySourcesRequestInput",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security =
        new operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditSecurity(
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
      const res: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditResponse =
        new operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditResponse(
          {
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
          }
        );
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.bulkEditAssignedInventorySourcesResponse = utils.objectToClass(
              httpRes?.data,
              shared.BulkEditAssignedInventorySourcesResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Creates an assignment between an inventory source and an inventory source group.
   */
  displayvideoInventorySourceGroupsAssignedInventorySourcesCreate(
    req: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateRequest,
    security: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v2/inventorySourceGroups/{inventorySourceGroupId}/assignedInventorySources",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "assignedInventorySourceInput",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security =
        new operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateSecurity(
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
      const res: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateResponse =
        new operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateResponse(
          {
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
          }
        );
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.assignedInventorySource = utils.objectToClass(
              httpRes?.data,
              shared.AssignedInventorySource
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Deletes the assignment between an inventory source and an inventory source group.
   */
  displayvideoInventorySourceGroupsAssignedInventorySourcesDelete(
    req: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteRequest,
    security: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v2/inventorySourceGroups/{inventorySourceGroupId}/assignedInventorySources/{assignedInventorySourceId}",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security =
        new operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteSecurity(
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
      const res: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteResponse =
        new operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteResponse(
          {
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
          }
        );
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.empty = utils.objectToClass(httpRes?.data);
          }
          break;
      }

      return res;
    });
  }

  /**
   * Lists inventory sources assigned to an inventory source group.
   */
  displayvideoInventorySourceGroupsAssignedInventorySourcesList(
    req: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesListRequest,
    security: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesListSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesListRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v2/inventorySourceGroups/{inventorySourceGroupId}/assignedInventorySources",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security =
        new operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesListSecurity(
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
      const res: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesListResponse =
        new operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesListResponse(
          {
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
          }
        );
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.listAssignedInventorySourcesResponse = utils.objectToClass(
              httpRes?.data,
              shared.ListAssignedInventorySourcesResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Creates a new inventory source group. Returns the newly created inventory source group if successful.
   */
  displayvideoInventorySourceGroupsCreate(
    req: operations.DisplayvideoInventorySourceGroupsCreateRequest,
    security: operations.DisplayvideoInventorySourceGroupsCreateSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DisplayvideoInventorySourceGroupsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisplayvideoInventorySourceGroupsCreateRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/v2/inventorySourceGroups";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "inventorySourceGroupInput",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.DisplayvideoInventorySourceGroupsCreateSecurity(
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
      const res: operations.DisplayvideoInventorySourceGroupsCreateResponse =
        new operations.DisplayvideoInventorySourceGroupsCreateResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.inventorySourceGroup = utils.objectToClass(
              httpRes?.data,
              shared.InventorySourceGroup
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Deletes an inventory source group.
   */
  displayvideoInventorySourceGroupsDelete(
    req: operations.DisplayvideoInventorySourceGroupsDeleteRequest,
    security: operations.DisplayvideoInventorySourceGroupsDeleteSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DisplayvideoInventorySourceGroupsDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisplayvideoInventorySourceGroupsDeleteRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v2/inventorySourceGroups/{inventorySourceGroupId}",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.DisplayvideoInventorySourceGroupsDeleteSecurity(
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
      const res: operations.DisplayvideoInventorySourceGroupsDeleteResponse =
        new operations.DisplayvideoInventorySourceGroupsDeleteResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.empty = utils.objectToClass(httpRes?.data);
          }
          break;
      }

      return res;
    });
  }

  /**
   * Gets an inventory source group.
   */
  displayvideoInventorySourceGroupsGet(
    req: operations.DisplayvideoInventorySourceGroupsGetRequest,
    security: operations.DisplayvideoInventorySourceGroupsGetSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DisplayvideoInventorySourceGroupsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisplayvideoInventorySourceGroupsGetRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v2/inventorySourceGroups/{inventorySourceGroupId}",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.DisplayvideoInventorySourceGroupsGetSecurity(
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
      const res: operations.DisplayvideoInventorySourceGroupsGetResponse =
        new operations.DisplayvideoInventorySourceGroupsGetResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.inventorySourceGroup = utils.objectToClass(
              httpRes?.data,
              shared.InventorySourceGroup
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Lists inventory source groups that are accessible to the current user. The order is defined by the order_by parameter.
   */
  displayvideoInventorySourceGroupsList(
    req: operations.DisplayvideoInventorySourceGroupsListRequest,
    security: operations.DisplayvideoInventorySourceGroupsListSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DisplayvideoInventorySourceGroupsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisplayvideoInventorySourceGroupsListRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/v2/inventorySourceGroups";
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.DisplayvideoInventorySourceGroupsListSecurity(
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
      const res: operations.DisplayvideoInventorySourceGroupsListResponse =
        new operations.DisplayvideoInventorySourceGroupsListResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.listInventorySourceGroupsResponse = utils.objectToClass(
              httpRes?.data,
              shared.ListInventorySourceGroupsResponse
            );
          }
          break;
      }

      return res;
    });
  }
}
