import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Filters {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * getSearchVersionNumberGeometryFilterExt - Geometry Filter
  **/
  getSearchVersionNumberGeometryFilterExt(
    req: operations.GetSearchVersionNumberGeometryFilterExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberGeometryFilterExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberGeometryFilterExtRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/search/{versionNumber}/geometryFilter.{ext}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSearchVersionNumberGeometryFilterExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 596:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
  }

  
  /**
   * getSearchVersionNumberRoutedFilterPositionHeadingExt - Routed Filter
  **/
  getSearchVersionNumberRoutedFilterPositionHeadingExt(
    req: operations.GetSearchVersionNumberRoutedFilterPositionHeadingExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberRoutedFilterPositionHeadingExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberRoutedFilterPositionHeadingExtRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/search/{versionNumber}/routedFilter/{position}/{heading}.{ext}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSearchVersionNumberRoutedFilterPositionHeadingExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 596:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
  }

  
  /**
   * postSearchVersionNumberGeometryFilterExt - Geometry Filter
  **/
  postSearchVersionNumberGeometryFilterExt(
    req: operations.PostSearchVersionNumberGeometryFilterExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSearchVersionNumberGeometryFilterExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSearchVersionNumberGeometryFilterExtRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/search/{versionNumber}/geometryFilter.{ext}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostSearchVersionNumberGeometryFilterExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 596:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
  }

  
  /**
   * postSearchVersionNumberRoutedFilterPositionHeadingExt - Routed Filter
  **/
  postSearchVersionNumberRoutedFilterPositionHeadingExt(
    req: operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/search/{versionNumber}/routedFilter/{position}/{heading}.{ext}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 596:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
  }

}
