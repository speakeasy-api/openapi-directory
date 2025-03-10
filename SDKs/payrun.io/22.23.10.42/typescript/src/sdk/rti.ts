/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Rti {
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
   * Delete the RTI transaction
   *
   * @remarks
   * Deletes the specified RTI transaction
   */
  deleteRtiTransaction(
    req: operations.DeleteRtiTransactionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRtiTransactionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRtiTransactionRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/Employer/{EmployerId}/RtiTransaction/{RtiTransactionId}",
      req
    );

    const client: AxiosInstance = this._defaultClient;

    const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };

    const r = client.request({
      url: url,
      method: "delete",
      headers: headers,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.DeleteRtiTransactionResponse =
        new operations.DeleteRtiTransactionResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          break;
        case [400, 401, 404, 500].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorModel = utils.objectToClass(
              httpRes?.data,
              shared.ErrorModel
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get all RTI transaction tags
   *
   * @remarks
   * Gets all the RTI transaction tags
   */
  getAllRtiTransactionTags(
    req: operations.GetAllRtiTransactionTagsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllRtiTransactionTagsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllRtiTransactionTagsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/Employer/{EmployerId}/RtiTransactions/Tags",
      req
    );

    const client: AxiosInstance = this._defaultClient;

    const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };

    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetAllRtiTransactionTagsResponse =
        new operations.GetAllRtiTransactionTagsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.linkCollection = utils.objectToClass(
              httpRes?.data,
              shared.LinkCollection
            );
          }
          break;
        case [400, 401, 404, 500].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorModel = utils.objectToClass(
              httpRes?.data,
              shared.ErrorModel
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get the RTI transaction
   *
   * @remarks
   * Returns the specified RTI transaction
   */
  getRtiTransactionFromEmployer(
    req: operations.GetRtiTransactionFromEmployerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRtiTransactionFromEmployerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRtiTransactionFromEmployerRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/Employer/{EmployerId}/RtiTransaction/{RtiTransactionId}",
      req
    );

    const client: AxiosInstance = this._defaultClient;

    const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };

    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetRtiTransactionFromEmployerResponse =
        new operations.GetRtiTransactionFromEmployerResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.rtiTransactionBase = utils.objectToClass(
              httpRes?.data,
              shared.RtiTransactionBase
            );
          }
          break;
        case [400, 401, 404, 500].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorModel = utils.objectToClass(
              httpRes?.data,
              shared.ErrorModel
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get all RTI transaction summaries for the employer
   *
   * @remarks
   * Get links for all RTI transaction summaries for the specified employer
   */
  getRtiTransactionSummariesFromEmployer(
    req: operations.GetRtiTransactionSummariesFromEmployerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRtiTransactionSummariesFromEmployerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRtiTransactionSummariesFromEmployerRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/Employer/{EmployerId}/RtiTransactions/Summary",
      req
    );

    const client: AxiosInstance = this._defaultClient;

    const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };

    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetRtiTransactionSummariesFromEmployerResponse =
        new operations.GetRtiTransactionSummariesFromEmployerResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.linkCollection = utils.objectToClass(
              httpRes?.data,
              shared.LinkCollection
            );
          }
          break;
        case [400, 401, 404, 500].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorModel = utils.objectToClass(
              httpRes?.data,
              shared.ErrorModel
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get the RTI transaction summary
   *
   * @remarks
   * Returns the specified RTI transaction summary data excluding some poroperties
   */
  getRtiTransactionSummaryFromEmployer(
    req: operations.GetRtiTransactionSummaryFromEmployerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRtiTransactionSummaryFromEmployerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRtiTransactionSummaryFromEmployerRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/Employer/{EmployerId}/RtiTransaction/{RtiTransactionId}/Summary",
      req
    );

    const client: AxiosInstance = this._defaultClient;

    const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };

    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetRtiTransactionSummaryFromEmployerResponse =
        new operations.GetRtiTransactionSummaryFromEmployerResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.rtiTransactionBase = utils.objectToClass(
              httpRes?.data,
              shared.RtiTransactionBase
            );
          }
          break;
        case [400, 401, 404, 500].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorModel = utils.objectToClass(
              httpRes?.data,
              shared.ErrorModel
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get all RTI transactions for the employer
   *
   * @remarks
   * Get links for all RTI transactions for the specified employer
   */
  getRtiTransactionsFromEmployer(
    req: operations.GetRtiTransactionsFromEmployerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRtiTransactionsFromEmployerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRtiTransactionsFromEmployerRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/Employer/{EmployerId}/RtiTransactions",
      req
    );

    const client: AxiosInstance = this._defaultClient;

    const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };

    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetRtiTransactionsFromEmployerResponse =
        new operations.GetRtiTransactionsFromEmployerResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.linkCollection = utils.objectToClass(
              httpRes?.data,
              shared.LinkCollection
            );
          }
          break;
        case [400, 401, 404, 500].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorModel = utils.objectToClass(
              httpRes?.data,
              shared.ErrorModel
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get RTI transactions with tag
   *
   * @remarks
   * Gets the RTI transactions with the tag
   */
  getRtiTransactionsWithTag(
    req: operations.GetRtiTransactionsWithTagRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRtiTransactionsWithTagResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRtiTransactionsWithTagRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/Employer/{EmployerId}/RtiTransactions/Tag/{TagId}",
      req
    );

    const client: AxiosInstance = this._defaultClient;

    const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };

    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetRtiTransactionsWithTagResponse =
        new operations.GetRtiTransactionsWithTagResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.linkCollection = utils.objectToClass(
              httpRes?.data,
              shared.LinkCollection
            );
          }
          break;
        case [400, 401, 404, 500].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorModel = utils.objectToClass(
              httpRes?.data,
              shared.ErrorModel
            );
          }
          break;
      }

      return res;
    });
  }
}
