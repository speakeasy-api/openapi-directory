/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Placements {
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
   * Generates tags for a placement.
   */
  dfareportingPlacementsGeneratetags(
    req: operations.DfareportingPlacementsGeneratetagsRequest,
    security: operations.DfareportingPlacementsGeneratetagsSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DfareportingPlacementsGeneratetagsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DfareportingPlacementsGeneratetagsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/userprofiles/{profileId}/placements/generatetags",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.DfareportingPlacementsGeneratetagsSecurity(
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
      const res: operations.DfareportingPlacementsGeneratetagsResponse =
        new operations.DfareportingPlacementsGeneratetagsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.placementsGenerateTagsResponse = utils.objectToClass(
              httpRes?.data,
              shared.PlacementsGenerateTagsResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Gets one placement by ID.
   */
  dfareportingPlacementsGet(
    req: operations.DfareportingPlacementsGetRequest,
    security: operations.DfareportingPlacementsGetSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DfareportingPlacementsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DfareportingPlacementsGetRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/userprofiles/{profileId}/placements/{id}",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.DfareportingPlacementsGetSecurity(security);
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
      const res: operations.DfareportingPlacementsGetResponse =
        new operations.DfareportingPlacementsGetResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.placement = utils.objectToClass(
              httpRes?.data,
              shared.Placement
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Inserts a new placement.
   */
  dfareportingPlacementsInsert(
    req: operations.DfareportingPlacementsInsertRequest,
    security: operations.DfareportingPlacementsInsertSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DfareportingPlacementsInsertResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DfareportingPlacementsInsertRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/userprofiles/{profileId}/placements",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "placement",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.DfareportingPlacementsInsertSecurity(security);
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
      const res: operations.DfareportingPlacementsInsertResponse =
        new operations.DfareportingPlacementsInsertResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.placement = utils.objectToClass(
              httpRes?.data,
              shared.Placement
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Retrieves a list of placements, possibly filtered. This method supports paging.
   */
  dfareportingPlacementsList(
    req: operations.DfareportingPlacementsListRequest,
    security: operations.DfareportingPlacementsListSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DfareportingPlacementsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DfareportingPlacementsListRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/userprofiles/{profileId}/placements",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.DfareportingPlacementsListSecurity(security);
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
      const res: operations.DfareportingPlacementsListResponse =
        new operations.DfareportingPlacementsListResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.placementsListResponse = utils.objectToClass(
              httpRes?.data,
              shared.PlacementsListResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Updates an existing placement. This method supports patch semantics.
   */
  dfareportingPlacementsPatch(
    req: operations.DfareportingPlacementsPatchRequest,
    security: operations.DfareportingPlacementsPatchSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DfareportingPlacementsPatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DfareportingPlacementsPatchRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/userprofiles/{profileId}/placements",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "placement",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.DfareportingPlacementsPatchSecurity(security);
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
      const res: operations.DfareportingPlacementsPatchResponse =
        new operations.DfareportingPlacementsPatchResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.placement = utils.objectToClass(
              httpRes?.data,
              shared.Placement
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Updates an existing placement.
   */
  dfareportingPlacementsUpdate(
    req: operations.DfareportingPlacementsUpdateRequest,
    security: operations.DfareportingPlacementsUpdateSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DfareportingPlacementsUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DfareportingPlacementsUpdateRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/userprofiles/{profileId}/placements",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "placement",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.DfareportingPlacementsUpdateSecurity(security);
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
      const res: operations.DfareportingPlacementsUpdateResponse =
        new operations.DfareportingPlacementsUpdateResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.placement = utils.objectToClass(
              httpRes?.data,
              shared.Placement
            );
          }
          break;
      }

      return res;
    });
  }
}
