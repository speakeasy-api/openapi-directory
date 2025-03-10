/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Product Module operations
 *
 * @see {@link https://netlicensing.io/wiki/product-module-services} - Product Module Services
 */
export class ProductModule {
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
   * Create Product Module
   *
   * @remarks
   * Creates a new Product Module
   */
  createProductModule(
    req: operations.CreateProductModuleRequestBody,
    security: operations.CreateProductModuleSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateProductModuleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateProductModuleRequestBody(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/productmodule";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "request",
        "form"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.CreateProductModuleSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...reqBodyHeaders, ...config?.headers };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.CreateProductModuleResponse =
        new operations.CreateProductModuleResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.netlicensing = utils.objectToClass(
              httpRes?.data,
              shared.Netlicensing
            );
          }
          if (utils.matchContentType(contentType, `application/xml`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            const out: Uint8Array = new Uint8Array(resBody.length);
            for (let i = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.body = out;
          }
          break;
        case [400, 402, 403, 404, 500].includes(httpRes?.status):
          break;
      }

      return res;
    });
  }

  /**
   * Delete Product Module
   *
   * @remarks
   * Delete a Product Module by 'number'
   */
  deleteProductModule(
    req: operations.DeleteProductModuleRequest,
    security: operations.DeleteProductModuleSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteProductModuleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteProductModuleRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/productmodule/{productModuleNumber}",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.DeleteProductModuleSecurity(security);
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
      const res: operations.DeleteProductModuleResponse =
        new operations.DeleteProductModuleResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.netlicensing = utils.objectToClass(
              httpRes?.data,
              shared.Netlicensing
            );
          }
          if (utils.matchContentType(contentType, `application/xml`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            const out: Uint8Array = new Uint8Array(resBody.length);
            for (let i = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.body = out;
          }
          break;
        case [400, 403, 404, 500].includes(httpRes?.status):
          break;
      }

      return res;
    });
  }

  /**
   * Get Product Module
   *
   * @remarks
   * Return a Product Module by 'productModuleNumber'
   */
  getProductModule(
    req: operations.GetProductModuleRequest,
    security: operations.GetProductModuleSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProductModuleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProductModuleRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/productmodule/{productModuleNumber}",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.GetProductModuleSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetProductModuleResponse =
        new operations.GetProductModuleResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.netlicensing = utils.objectToClass(
              httpRes?.data,
              shared.Netlicensing
            );
          }
          if (utils.matchContentType(contentType, `application/xml`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            const out: Uint8Array = new Uint8Array(resBody.length);
            for (let i = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.body = out;
          }
          break;
        case [400, 403, 404, 500].includes(httpRes?.status):
          break;
      }

      return res;
    });
  }

  /**
   * List Product Modules
   *
   * @remarks
   * Return a list of all Product Modules for the current Vendor
   */
  listProductModules(
    config?: AxiosRequestConfig
  ): Promise<operations.ListProductModulesResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/productmodule";

    const client: AxiosInstance = this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ListProductModulesResponse =
        new operations.ListProductModulesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.netlicensings = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.netlicensings = utils.objectToClass(
              httpRes?.data,
              shared.Netlicensing,
              resFieldDepth
            );
          }
          if (utils.matchContentType(contentType, `application/xml`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            const out: Uint8Array = new Uint8Array(resBody.length);
            for (let i = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.body = out;
          }
          break;
        case [400, 403, 404, 500].includes(httpRes?.status):
          break;
      }

      return res;
    });
  }

  /**
   * Update Product Module
   *
   * @remarks
   * Sets the provided properties to a Product Module. Return an updated Product Module
   */
  updateProductModule(
    req: operations.UpdateProductModuleRequest,
    security: operations.UpdateProductModuleSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateProductModuleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateProductModuleRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/productmodule/{productModuleNumber}",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
        "form"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.UpdateProductModuleSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...reqBodyHeaders, ...config?.headers };

    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.UpdateProductModuleResponse =
        new operations.UpdateProductModuleResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.netlicensing = utils.objectToClass(
              httpRes?.data,
              shared.Netlicensing
            );
          }
          if (utils.matchContentType(contentType, `application/xml`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            const out: Uint8Array = new Uint8Array(resBody.length);
            for (let i = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.body = out;
          }
          break;
        case [400, 402, 403, 404, 500].includes(httpRes?.status):
          break;
      }

      return res;
    });
  }
}
