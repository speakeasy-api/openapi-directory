import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class ServiceOffering {
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
   * appliedInventoriesTagsForServiceOffering - Invokes computing of ServiceInventories tags for given ServiceOffering
   *
   * Returns an array of inventories tags
  **/
  appliedInventoriesTagsForServiceOffering(
    req: operations.AppliedInventoriesTagsForServiceOfferingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AppliedInventoriesTagsForServiceOfferingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AppliedInventoriesTagsForServiceOfferingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/service_offerings/{id}/applied_inventories_tags", req.pathParams);

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
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
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
        const res: operations.AppliedInventoriesTagsForServiceOfferingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.tags = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * listServiceOfferingServiceInstances - List ServiceInstances for ServiceOffering
   *
   * Returns an array of ServiceInstance objects
  **/
  listServiceOfferingServiceInstances(
    req: operations.ListServiceOfferingServiceInstancesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListServiceOfferingServiceInstancesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListServiceOfferingServiceInstancesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/service_offerings/{id}/service_instances", req.pathParams);
    
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
        const res: operations.ListServiceOfferingServiceInstancesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.serviceInstancesCollection = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.errorNotFound = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listServiceOfferingServiceOfferingNodes - List ServiceOfferingNodes for ServiceOffering
   *
   * Returns an array of ServiceOfferingNode objects
  **/
  listServiceOfferingServiceOfferingNodes(
    req: operations.ListServiceOfferingServiceOfferingNodesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListServiceOfferingServiceOfferingNodesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListServiceOfferingServiceOfferingNodesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/service_offerings/{id}/service_offering_nodes", req.pathParams);
    
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
        const res: operations.ListServiceOfferingServiceOfferingNodesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.serviceOfferingNodesCollection = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.errorNotFound = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listServiceOfferingServicePlans - List ServicePlans for ServiceOffering
   *
   * Returns an array of ServicePlan objects
  **/
  listServiceOfferingServicePlans(
    req: operations.ListServiceOfferingServicePlansRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListServiceOfferingServicePlansResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListServiceOfferingServicePlansRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/service_offerings/{id}/service_plans", req.pathParams);
    
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
        const res: operations.ListServiceOfferingServicePlansResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.servicePlansCollection = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.errorNotFound = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listServiceOfferings - List ServiceOfferings
   *
   * Returns an array of ServiceOffering objects
  **/
  listServiceOfferings(
    req: operations.ListServiceOfferingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListServiceOfferingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListServiceOfferingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/service_offerings";
    
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
        const res: operations.ListServiceOfferingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.serviceOfferingsCollection = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * orderServiceOffering - Order an existing ServiceOffering
   *
   * Returns a Task id
  **/
  orderServiceOffering(
    req: operations.OrderServiceOfferingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OrderServiceOfferingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OrderServiceOfferingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/service_offerings/{id}/order", req.pathParams);

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
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
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
        const res: operations.OrderServiceOfferingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.orderServiceOffering200ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * showServiceOffering - Show an existing ServiceOffering
   *
   * Returns a ServiceOffering object
  **/
  showServiceOffering(
    req: operations.ShowServiceOfferingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ShowServiceOfferingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ShowServiceOfferingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/service_offerings/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ShowServiceOfferingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.serviceOffering = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.errorNotFound = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
