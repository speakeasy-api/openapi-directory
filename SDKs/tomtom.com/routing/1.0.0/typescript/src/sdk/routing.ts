import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Routing {
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
   * getRoutingVersionNumberCalculateReachableRangeOriginContentType - Reachable Range
   *
   * Calculates a set of locations that can be reached from the origin point.
  **/
  getRoutingVersionNumberCalculateReachableRangeOriginContentType(
    req: operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/routing/{versionNumber}/calculateReachableRange/{origin}/{contentType}", req.pathParams);
    
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
        const res: operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 414:
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 502:
            break;
          case httpRes?.status == 503:
            break;
          case httpRes?.status == 504:
            break;
          case httpRes?.status == 596:
            break;
        }

        return res;
      })
  }

  
  /**
   * getRoutingVersionNumberCalculateRouteLocationsContentType - Calculate Route
   *
   * Calculates a route between an origin and a destination.
  **/
  getRoutingVersionNumberCalculateRouteLocationsContentType(
    req: operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/routing/{versionNumber}/calculateRoute/{locations}/{contentType}", req.pathParams);
    
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
        const res: operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 414:
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 502:
            break;
          case httpRes?.status == 503:
            break;
          case httpRes?.status == 504:
            break;
          case httpRes?.status == 596:
            break;
        }

        return res;
      })
  }

  
  /**
   * postRoutingVersionNumberCalculateReachableRangeOriginContentType - Reachable Range
   *
   * Calculates a set of locations that can be reached from the origin point. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.
  **/
  postRoutingVersionNumberCalculateReachableRangeOriginContentType(
    req: operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/routing/{versionNumber}/calculateReachableRange/{origin}/{contentType}", req.pathParams);

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
        const res: operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 414:
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 502:
            break;
          case httpRes?.status == 503:
            break;
          case httpRes?.status == 504:
            break;
          case httpRes?.status == 596:
            break;
        }

        return res;
      })
  }

  
  /**
   * postRoutingVersionNumberCalculateRouteLocationsContentType - Calculate Route
   *
   * Calculates a route between an origin and a destination. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.
  **/
  postRoutingVersionNumberCalculateRouteLocationsContentType(
    req: operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/routing/{versionNumber}/calculateRoute/{locations}/{contentType}", req.pathParams);

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
        const res: operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 414:
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 502:
            break;
          case httpRes?.status == 503:
            break;
          case httpRes?.status == 504:
            break;
          case httpRes?.status == 596:
            break;
        }

        return res;
      })
  }

}
