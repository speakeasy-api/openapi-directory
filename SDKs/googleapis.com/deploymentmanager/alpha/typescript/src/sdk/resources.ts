/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Resources {
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
   * Gets information about a single resource.
   */
  deploymentmanagerResourcesGet(
    req: operations.DeploymentmanagerResourcesGetRequest,
    security: operations.DeploymentmanagerResourcesGetSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DeploymentmanagerResourcesGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeploymentmanagerResourcesGetRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/deploymentmanager/alpha/projects/{project}/global/deployments/{deployment}/resources/{resource}",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.DeploymentmanagerResourcesGetSecurity(security);
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
      const res: operations.DeploymentmanagerResourcesGetResponse =
        new operations.DeploymentmanagerResourcesGetResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.resource = utils.objectToClass(httpRes?.data, shared.Resource);
          }
          break;
      }

      return res;
    });
  }

  /**
   * Lists all resources in a given deployment.
   */
  deploymentmanagerResourcesList(
    req: operations.DeploymentmanagerResourcesListRequest,
    security: operations.DeploymentmanagerResourcesListSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DeploymentmanagerResourcesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeploymentmanagerResourcesListRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/deploymentmanager/alpha/projects/{project}/global/deployments/{deployment}/resources",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.DeploymentmanagerResourcesListSecurity(
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
      const res: operations.DeploymentmanagerResourcesListResponse =
        new operations.DeploymentmanagerResourcesListResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.resourcesListResponse = utils.objectToClass(
              httpRes?.data,
              shared.ResourcesListResponse
            );
          }
          break;
      }

      return res;
    });
  }
}
