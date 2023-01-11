import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Services {
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
   * getConsumerV1Services - Returns a list of services.
   *
   * Use this endpoint to get services available at your business location and/or company. If no locationId is provided the primary company will be queried. 
   * The results are returned in pages. Use the offset and limit parameters to control the page start and size.
   * Default offset is <b>0</b>, and limit is <b>20</b>. Use the other query parameters to optionally filter the results list.
  **/
  getConsumerV1Services(
    req: operations.GetConsumerV1ServicesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConsumerV1ServicesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConsumerV1ServicesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/consumer/v1/services";
    
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
        const res: operations.GetConsumerV1ServicesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.serviceListViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getConsumerV1ServicesAllocationsId - Get a service allocation
  **/
  getConsumerV1ServicesAllocationsId(
    req: operations.GetConsumerV1ServicesAllocationsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConsumerV1ServicesAllocationsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConsumerV1ServicesAllocationsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/consumer/v1/services/allocations/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetConsumerV1ServicesAllocationsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.serviceAllocationViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getConsumerV1ServicesId - Returns a service object.
   *
   * The result returned is a single service object. An id is required to find the service. Find service id's using either the GET consumer/v1/service end point,
   * or the GET consumer/v1/appointments end point.
  **/
  getConsumerV1ServicesId(
    req: operations.GetConsumerV1ServicesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConsumerV1ServicesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConsumerV1ServicesIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/consumer/v1/services/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetConsumerV1ServicesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.serviceViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getConsumerV1ServicesIdAllocations - Returns a list of service allocations.
   *
   * This endpoint is used primarily for event booking. When you create service type events, you allocation specific occurrences of the event 
   * against the service. 
   * 
   * You can retrieve all allocations for a location by passing in zero as the service id. Otherwise, to get allocations for a specific service
   * pass in the service id.
   * 
   * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
   * Use the other query parameters to optionally filter the results list.
  **/
  getConsumerV1ServicesIdAllocations(
    req: operations.GetConsumerV1ServicesIdAllocationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConsumerV1ServicesIdAllocationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConsumerV1ServicesIdAllocationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/consumer/v1/services/{id}/allocations", req.pathParams);
    
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
        const res: operations.GetConsumerV1ServicesIdAllocationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.serviceAllocationListViewModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

  
  /**
   * getConsumerV1ServicesIdResources - Returns a list of resources.
   *
   * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
   * Use the other query parameters to optionally filter the results list.
  **/
  getConsumerV1ServicesIdResources(
    req: operations.GetConsumerV1ServicesIdResourcesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConsumerV1ServicesIdResourcesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConsumerV1ServicesIdResourcesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/consumer/v1/services/{id}/resources", req.pathParams);
    
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
        const res: operations.GetConsumerV1ServicesIdResourcesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.resourceListViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
