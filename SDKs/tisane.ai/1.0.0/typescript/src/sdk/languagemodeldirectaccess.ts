/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Methods to retrieve and inspect entries from the language models
 */
export class LanguageModelDirectAccess {
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
   * Get family details
   *
   * @remarks
   * Fetches and outputs metadata for a family from the Tisane language models.
   */
  getFamilyDetails(
    req: operations.GetFamilyDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFamilyDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFamilyDetailsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/lm/family";

    const client: AxiosInstance = this._defaultClient;

    const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetFamilyDetailsResponse =
        new operations.GetFamilyDetailsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getFamilyDetails200ApplicationJSONObject = utils.objectToClass(
              httpRes?.data,
              operations.GetFamilyDetails200ApplicationJSON
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * List feature values
   *
   * @remarks
   * Lists feature values for a particular category of features. This allows obtaining all the values such as entity types, subtypes, abuse types and tags, and more.
   *
   * Returns the values as a JSON array of strings.
   */
  listFeatureValues(
    req: operations.ListFeatureValuesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListFeatureValuesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListFeatureValuesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/values";

    const client: AxiosInstance = this._defaultClient;

    const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ListFeatureValuesResponse =
        new operations.ListFeatureValuesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.listFeatureValues200ApplicationJSONStrings =
              utils.objectToClass(httpRes?.data);
          }
          break;
      }

      return res;
    });
  }

  /**
   * List hypernyms
   *
   * @remarks
   * Lists all hypernyms related to a family. A hypernym is a parent concent. E.g. "vehicle" is a hypernym of "truck".
   */
  listHypernyms(
    req: operations.ListHypernymsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListHypernymsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListHypernymsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/hypernyms";

    const client: AxiosInstance = this._defaultClient;

    const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ListHypernymsResponse =
        new operations.ListHypernymsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.listHypernyms200ApplicationJSONArrays = utils.objectToClass(
              httpRes?.data
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * List hyponyms
   *
   * @remarks
   * Lists all hyponyms related to a family. A hyponym is a child concent. E.g. "truck" is a hypernym of "vehicle".
   */
  listHyponyms(
    req: operations.ListHyponymsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListHyponymsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListHyponymsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/hyponyms";

    const client: AxiosInstance = this._defaultClient;

    const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ListHyponymsResponse =
        new operations.ListHyponymsResponse({
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
   * List inflected forms
   *
   * @remarks
   * List inflected forms
   */
  listInflectedForms(
    req: operations.ListInflectedFormsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListInflectedFormsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListInflectedFormsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/inflections";

    const client: AxiosInstance = this._defaultClient;

    const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ListInflectedFormsResponse =
        new operations.ListInflectedFormsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.listInflectedForms200ApplicationJSONObjects = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.listInflectedForms200ApplicationJSONObjects =
              utils.objectToClass(
                httpRes?.data,
                operations.ListInflectedForms200ApplicationJSON,
                resFieldDepth
              );
          }
          break;
      }

      return res;
    });
  }

  /**
   * List word senses
   *
   * @remarks
   * Fetches and outputs all senses related to a word.
   */
  listWordSenses(
    req: operations.ListWordSensesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListWordSensesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListWordSensesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/senses";

    const client: AxiosInstance = this._defaultClient;

    const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ListWordSensesResponse =
        new operations.ListWordSensesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.listWordSenses200ApplicationJSONObjects = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.listWordSenses200ApplicationJSONObjects = utils.objectToClass(
              httpRes?.data,
              operations.ListWordSenses200ApplicationJSON,
              resFieldDepth
            );
          }
          break;
      }

      return res;
    });
  }
}
