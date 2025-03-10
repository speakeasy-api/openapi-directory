/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Debug {
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
   * Checks whether an item is accessible by specified principal. Principal must be a user; groups and domain values aren't supported. **Note:** This API requires an admin account to execute.
   */
  cloudsearchDebugDatasourcesItemsCheckAccess(
    req: operations.CloudsearchDebugDatasourcesItemsCheckAccessRequest,
    security: operations.CloudsearchDebugDatasourcesItemsCheckAccessSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudsearchDebugDatasourcesItemsCheckAccessResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudsearchDebugDatasourcesItemsCheckAccessRequest(
        req
      );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/debug/{name}:checkAccess",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "principal",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security =
        new operations.CloudsearchDebugDatasourcesItemsCheckAccessSecurity(
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
      const res: operations.CloudsearchDebugDatasourcesItemsCheckAccessResponse =
        new operations.CloudsearchDebugDatasourcesItemsCheckAccessResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.checkAccessResponse = utils.objectToClass(
              httpRes?.data,
              shared.CheckAccessResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Fetches the item whose viewUrl exactly matches that of the URL provided in the request. **Note:** This API requires an admin account to execute.
   */
  cloudsearchDebugDatasourcesItemsSearchByViewUrl(
    req: operations.CloudsearchDebugDatasourcesItemsSearchByViewUrlRequest,
    security: operations.CloudsearchDebugDatasourcesItemsSearchByViewUrlSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudsearchDebugDatasourcesItemsSearchByViewUrlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.CloudsearchDebugDatasourcesItemsSearchByViewUrlRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/debug/{name}/items:searchByViewUrl",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "searchItemsByViewUrlRequest",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security =
        new operations.CloudsearchDebugDatasourcesItemsSearchByViewUrlSecurity(
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
      const res: operations.CloudsearchDebugDatasourcesItemsSearchByViewUrlResponse =
        new operations.CloudsearchDebugDatasourcesItemsSearchByViewUrlResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.searchItemsByViewUrlResponse = utils.objectToClass(
              httpRes?.data,
              shared.SearchItemsByViewUrlResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Lists names of items associated with an unmapped identity. **Note:** This API requires an admin account to execute.
   */
  cloudsearchDebugIdentitysourcesItemsListForunmappedidentity(
    req: operations.CloudsearchDebugIdentitysourcesItemsListForunmappedidentityRequest,
    security: operations.CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudsearchDebugIdentitysourcesItemsListForunmappedidentityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.CloudsearchDebugIdentitysourcesItemsListForunmappedidentityRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/debug/{parent}/items:forunmappedidentity",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security =
        new operations.CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurity(
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
      const res: operations.CloudsearchDebugIdentitysourcesItemsListForunmappedidentityResponse =
        new operations.CloudsearchDebugIdentitysourcesItemsListForunmappedidentityResponse(
          {
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
          }
        );
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.listItemNamesForUnmappedIdentityResponse = utils.objectToClass(
              httpRes?.data,
              shared.ListItemNamesForUnmappedIdentityResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Lists unmapped user identities for an identity source. **Note:** This API requires an admin account to execute.
   */
  cloudsearchDebugIdentitysourcesUnmappedidsList(
    req: operations.CloudsearchDebugIdentitysourcesUnmappedidsListRequest,
    security: operations.CloudsearchDebugIdentitysourcesUnmappedidsListSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudsearchDebugIdentitysourcesUnmappedidsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.CloudsearchDebugIdentitysourcesUnmappedidsListRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1/debug/{parent}/unmappedids",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security =
        new operations.CloudsearchDebugIdentitysourcesUnmappedidsListSecurity(
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
      const res: operations.CloudsearchDebugIdentitysourcesUnmappedidsListResponse =
        new operations.CloudsearchDebugIdentitysourcesUnmappedidsListResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.listUnmappedIdentitiesResponse = utils.objectToClass(
              httpRes?.data,
              shared.ListUnmappedIdentitiesResponse
            );
          }
          break;
      }

      return res;
    });
  }
}
