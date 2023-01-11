import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Resources {
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
   * deleteSetupV1ResourcesAllocationsId - Delete a resource allocation object
   *
   * Deletes a resource allocation.
  **/
  deleteSetupV1ResourcesAllocationsId(
    req: operations.DeleteSetupV1ResourcesAllocationsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSetupV1ResourcesAllocationsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSetupV1ResourcesAllocationsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/resources/allocations/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSetupV1ResourcesAllocationsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.resourceBlockViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteSetupV1ResourcesBlockId - Delete a resource block object
   *
   * Deletes a resource block.
  **/
  deleteSetupV1ResourcesBlockId(
    req: operations.DeleteSetupV1ResourcesBlockIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSetupV1ResourcesBlockIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSetupV1ResourcesBlockIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/resources/block/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSetupV1ResourcesBlockIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.resourceBlockViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteSetupV1ResourcesId - Deletes a resource object.
   *
   * Use this endpoint to delete a resource. The resource is not permanently deleted and can be recovered.
  **/
  deleteSetupV1ResourcesId(
    req: operations.DeleteSetupV1ResourcesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSetupV1ResourcesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSetupV1ResourcesIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/resources/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSetupV1ResourcesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.resourceViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteSetupV1ResourcesIdDeleteimage - Removes a resource image
   *
   * Use this endpoint to delete a previously uploaded resource image.
  **/
  deleteSetupV1ResourcesIdDeleteimage(
    req: operations.DeleteSetupV1ResourcesIdDeleteimageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSetupV1ResourcesIdDeleteimageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSetupV1ResourcesIdDeleteimageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/resources/{id}/deleteimage", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSetupV1ResourcesIdDeleteimageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.resourceViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteSetupV1ResourcesIdServices - Deletes resource services from the specified resource
   *
   * Use this endpoint to delete all resource services for a resource
  **/
  deleteSetupV1ResourcesIdServices(
    req: operations.DeleteSetupV1ResourcesIdServicesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSetupV1ResourcesIdServicesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSetupV1ResourcesIdServicesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/resources/{id}/services", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSetupV1ResourcesIdServicesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.resourceViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getSetupV1Resources - Returns a list of resources.
   *
   * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
   * Use the other query parameters to optionally filter the results list.
  **/
  getSetupV1Resources(
    req: operations.GetSetupV1ResourcesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSetupV1ResourcesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSetupV1ResourcesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/setup/v1/resources";
    
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
        const res: operations.GetSetupV1ResourcesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.resourceListViewModel = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

  
  /**
   * getSetupV1ResourcesAllocationsId - Update a resource allocation
  **/
  getSetupV1ResourcesAllocationsId(
    req: operations.GetSetupV1ResourcesAllocationsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSetupV1ResourcesAllocationsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSetupV1ResourcesAllocationsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/resources/allocations/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSetupV1ResourcesAllocationsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.resourceAllocationViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getSetupV1ResourcesBlocksId - Update a resource block
  **/
  getSetupV1ResourcesBlocksId(
    req: operations.GetSetupV1ResourcesBlocksIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSetupV1ResourcesBlocksIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSetupV1ResourcesBlocksIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/resources/blocks/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSetupV1ResourcesBlocksIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.resourceBlockViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  getSetupV1ResourcesTimezones(
    config?: AxiosRequestConfig
  ): Promise<operations.GetSetupV1ResourcesTimezonesResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/setup/v1/resources/timezones";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSetupV1ResourcesTimezonesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.systemTimezoneViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getSetupV1ResourcesId - Returns a resource object.
   *
   * The result returned is a single resource object. An id is required to find the resource. Find customer id's using either the GET consumer/v1/resources end point,
   * or the GET consumer/v1/appointments end point.
  **/
  getSetupV1ResourcesId(
    req: operations.GetSetupV1ResourcesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSetupV1ResourcesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSetupV1ResourcesIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/resources/{id}", req.pathParams);
    
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
        const res: operations.GetSetupV1ResourcesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.resourceViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getSetupV1ResourcesIdAllocations - Returns a list of resource allocations.
   *
   * Resource allocations allow you to specify explicitly the times you are available as opposed to 
   * generating resource availability from the times that are not unavailable.
   * 
   * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
   * Use the other query parameters to optionally filter the results list.
  **/
  getSetupV1ResourcesIdAllocations(
    req: operations.GetSetupV1ResourcesIdAllocationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSetupV1ResourcesIdAllocationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSetupV1ResourcesIdAllocationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/resources/{id}/allocations", req.pathParams);
    
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
        const res: operations.GetSetupV1ResourcesIdAllocationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.resourceAllocationListViewModel = httpRes?.data;
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
   * getSetupV1ResourcesIdAvailability - Returns a list of weekly availability
   *
   * Use this endpoint to get weekly availability for a resource. The displayed
   * available times represent the resource timezone. The resource timezone can
   * be set to any world timezone. By default it is set to the Business timezone.
  **/
  getSetupV1ResourcesIdAvailability(
    req: operations.GetSetupV1ResourcesIdAvailabilityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSetupV1ResourcesIdAvailabilityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSetupV1ResourcesIdAvailabilityRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/resources/{id}/availability", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSetupV1ResourcesIdAvailabilityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.resourceAvailabilityViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getSetupV1ResourcesIdBlocks - Returns a list of resource blocks.
   *
   * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
   * Use the other query parameters to optionally filter the results list.
  **/
  getSetupV1ResourcesIdBlocks(
    req: operations.GetSetupV1ResourcesIdBlocksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSetupV1ResourcesIdBlocksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSetupV1ResourcesIdBlocksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/resources/{id}/blocks", req.pathParams);
    
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
        const res: operations.GetSetupV1ResourcesIdBlocksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.resourceBlockListViewModel = httpRes?.data;
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
   * getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddress - Returns a resource object.
   *
   * The result returned contains the google calendar authorization url
  **/
  getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddress(
    req: operations.GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/resources/{id}/calendar/auth/google/{googleEmailAddress}", req.pathParams);
    
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
        const res: operations.GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.calendarAuthViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddress - Returns a resource object.
   *
   * The result returned contains the outlook calendar authorization url
  **/
  getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddress(
    req: operations.GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/resources/{id}/calendar/auth/outlook/{outlookEmailAddress}", req.pathParams);
    
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
        const res: operations.GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.calendarAuthViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postSetupV1Resources - Creates a new resource object.
   *
   * Use this endpoint to create a new resource. If not specified, the business location id defaults to the first location in the company.<br /><br /> 
   * Email Address and a Name are required for creating a new resource. <br /><br />
   * Passing in a single or many serviceId(s) in the service array will result in those service(s) being associated with the resource, 
   * while passing in an empty array will result in all services being selected. This includes company and business scoped services. <br /><br />
  **/
  postSetupV1Resources(
    req: operations.PostSetupV1ResourcesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSetupV1ResourcesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSetupV1ResourcesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/setup/v1/resources";

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
        const res: operations.PostSetupV1ResourcesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.resourceViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postSetupV1ResourcesBulk - Creates new resource objects.
   *
   * Use this endpoint to create new resources. If not specified the business location id defaults to the first location in the company.<br /><br />
   * Email Address and a Name are required for creating each new resource.<br /><br />
   * Passing in a single or many serviceId(s) in the service array will result in those service(s) being associated with the resources,
   * while passing in an empty array will result in all services being selected. This includes company and business scoped services.<br /><br />
  **/
  postSetupV1ResourcesBulk(
    req: operations.PostSetupV1ResourcesBulkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSetupV1ResourcesBulkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSetupV1ResourcesBulkRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/setup/v1/resources/bulk";

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
        const res: operations.PostSetupV1ResourcesBulkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.resourceViewModels = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postSetupV1ResourcesIdAllocations - Create a new resource allocation
   *
   * Creates a new resource allocation. You must specify a StartDateTime and EndDateTime.
   * A reason for the block is optional. This reason will display in the OnSched Portal Calendar.
   * 
   * Resource allocations can be set to specific time ranges or for the whole day. 
   * 
   * Resource allocations can repeat for a specific date range instance or set to repeat at a specified frequency.
   * The frequency can be set to a value of D,W,M,Y for Day, Week, Month, or Year respecitively. 
   * 
   * Daily allocations will repeat for each day of the week for the date range specified.
   * 
   * Weekly allocations will repeat only on the specified days of the week for the date range specified. For a weekly block
   * you must also specify the weekdays. Weekdays are expressed as a string of digits with each single digit in the string representing a day
   * of the week. The possible values are 0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wed, 4=Thursday, 5=Friday, 6=Saturday.
   * For example a repeat weekly entry with weekdays 24 repeats each week on Tuesday and Thursday.
   * 
   * Use the interval property to specify the interval that the allocation repeats. For example an interval of 2 for a weekly allocation means that
   * the allocation will repeat every second week beginning at the day specified. A daily allocation with an interval of 10 means the allocation will
   * repeat every 10 days. The interval property applies to all repeat frequencies.
   * 
   * Monthly allocations repeat either on the day of the month specified in the month day property or on the day of the week and week of the month specified by
   * the start date. For example, repeat every 3rd friday of each month, repeat on the 21st day of the month.
   * 
   * Repeat allocations will end on the date specified by the end date. You can specify 9999-12-31 in 
   * the EndDate field to indicate the repeating block should continue indefinitely.
  **/
  postSetupV1ResourcesIdAllocations(
    req: operations.PostSetupV1ResourcesIdAllocationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSetupV1ResourcesIdAllocationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSetupV1ResourcesIdAllocationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/resources/{id}/allocations", req.pathParams);

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
        const res: operations.PostSetupV1ResourcesIdAllocationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.resourceBlockViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postSetupV1ResourcesIdBlock - Create a new resource block
   *
   * Creates a new resource block. You must specify a StartDateTime and EndDateTime.
   * A reason for the block is also required. This reason will display in the OnSched Portal Calendar.
   * 
   * Resource blocks can be set to specific time ranges or for the whole day. Use the AllDay setting to create an all day block.
   * 
   * Resource blocks can be for a specific date range instance or set to repeat at a specified frequency.
   * The frequency can be set to a value of D,W,M,Y for Day, Week, Month, or Year respecitively. 
   * 
   * Daily blocks will repeat for each day of the week for the date range specified.
   * 
   * Weekly blocks will repeat only on the specified days of the week for the date range specified. For a weekly block
   * you must also specify the weekdays. Weekdays are expressed as a string of digits with each single digit in the string representing a day
   * of the week. The possible values are 0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wed, 4=Thursday, 5=Friday, 6=Saturday.
   * For example a repeat weekly entry with weekdays 24 repeats each week on Tuesday and Thursday.
   * 
   * Use the interval property to specify the interval that the block repeats. For example an interval of 2 for a weekly block means that
   * the block will repeat every second week beginning at the day specified. A daily block with an interval of 10 means the block will
   * repeat every 10 days. The interval property applies to all repeat frequencies.
   * 
   * Monthly blocks repeat either on the day of the month specified in the month day property or on the day of the week and week of the month specified by
   * the start date. For example, repeat every 3rd friday of each month, repeat on the 21st day of the month.
   * 
   * Repeat blocks will end on the date specified by the end date. You can specify 9999-12-31 in 
   * the EndDate field to indicate the repeating block should continue indefinitely.
  **/
  postSetupV1ResourcesIdBlock(
    req: operations.PostSetupV1ResourcesIdBlockRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSetupV1ResourcesIdBlockResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSetupV1ResourcesIdBlockRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/resources/{id}/block", req.pathParams);

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
        const res: operations.PostSetupV1ResourcesIdBlockResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.resourceBlockViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postSetupV1ResourcesIdServices - Adds resource services to the specified resource
   *
   * Use this endpoint to add resource services
  **/
  postSetupV1ResourcesIdServices(
    req: operations.PostSetupV1ResourcesIdServicesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSetupV1ResourcesIdServicesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSetupV1ResourcesIdServicesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/resources/{id}/services", req.pathParams);

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
        const res: operations.PostSetupV1ResourcesIdServicesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.resourceViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postSetupV1ResourcesIdUploadimage - Uploads a resource image
   *
   * Use this endpoint to upload a resource image. You must convert the image to a base64 encoded string
   * and pass that string as input along with your filename.
  **/
  postSetupV1ResourcesIdUploadimage(
    req: operations.PostSetupV1ResourcesIdUploadimageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSetupV1ResourcesIdUploadimageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSetupV1ResourcesIdUploadimageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/resources/{id}/uploadimage", req.pathParams);

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
        const res: operations.PostSetupV1ResourcesIdUploadimageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.resourceViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putSetupV1ResourcesAllocationsId - Update a resource allocation
   *
   * Updates a resource allocation. Refer to the details in the POST resource allocation for setting each of the required parameters.
  **/
  putSetupV1ResourcesAllocationsId(
    req: operations.PutSetupV1ResourcesAllocationsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutSetupV1ResourcesAllocationsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutSetupV1ResourcesAllocationsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/resources/allocations/{id}", req.pathParams);

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
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutSetupV1ResourcesAllocationsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.resourceBlockViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putSetupV1ResourcesBlockId - Update a resource block
   *
   * Updates a resource block. Refer to the details in the POST resource block for setting each of the required parameters.
  **/
  putSetupV1ResourcesBlockId(
    req: operations.PutSetupV1ResourcesBlockIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutSetupV1ResourcesBlockIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutSetupV1ResourcesBlockIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/resources/block/{id}", req.pathParams);

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
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutSetupV1ResourcesBlockIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.resourceBlockViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putSetupV1ResourcesBulk - Updates resource objects.
   *
   * Use this endpoint to update multiple resources.<br /><br /> 
   * Passing in a single or many serviceId(s) in the service array will result in those service(s) being associated with the each resource, 
   * while passing in an empty array will result in all services being selected. This includes company and business scoped services.<br /><br />
  **/
  putSetupV1ResourcesBulk(
    req: operations.PutSetupV1ResourcesBulkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutSetupV1ResourcesBulkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutSetupV1ResourcesBulkRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/setup/v1/resources/bulk";

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
      method: "put",
      headers: headers,
      data: reqBody, 
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutSetupV1ResourcesBulkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.resourceViewModels = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putSetupV1ResourcesId - Updates a resource object.
   *
   * Use this endpoint to update a resource. <br /><br />
   * Passing in a single or many serviceId(s) in the service array will result in those service(s) being associated with the resource,
   * while passing in an empty array will result in all services being selected. This includes company and business scoped services.<br /><br />
  **/
  putSetupV1ResourcesId(
    req: operations.PutSetupV1ResourcesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutSetupV1ResourcesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutSetupV1ResourcesIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/resources/{id}", req.pathParams);

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
      method: "put",
      headers: headers,
      data: reqBody, 
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutSetupV1ResourcesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.resourceViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putSetupV1ResourcesIdAvailability - Updates Weekly Availability
   *
   * Use this endpoint to update resource availability. The Id parameter specifies the resource
   * for which you are updating availability. Availability day entries do not need to be created. 
   * The availbility day entries are created when a resource object is created. They default to
   * the business hours.
   * 
   * Create an entry for each weekday you wish to update. Days are defined as sun,mon,tue,wed,thu,fri,sat.
   * Start and End Times are entered in miltary format. e.g 2230 is 10:30pm. 
   * 
   * OnSched API provides support for 24 hour availability. For midnight start of day use 0. For midnight end of day use 2400.
   * 
   * To set a day as unavailable, set both the StartTime and EndTime to 0. If you require times in between specified hours
   * to be unavailable, use the resource blocks endpoints. 
   * 
   * Times entered represent the
   * timezone of the resource. Resources can belong to any world timezone.
  **/
  putSetupV1ResourcesIdAvailability(
    req: operations.PutSetupV1ResourcesIdAvailabilityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutSetupV1ResourcesIdAvailabilityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutSetupV1ResourcesIdAvailabilityRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/resources/{id}/availability", req.pathParams);

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
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutSetupV1ResourcesIdAvailabilityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.resourceAvailabilityViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putSetupV1ResourcesIdReassignAppointmentsResourceId - Reassigns appointments to another resource
   *
   * Use this endpoint to reassign appointments from one resource to another.
   * If the startDate is not supplied, the default is today's date + 1 day;
   * If the endDate is not supplied, all future appointments from the start date will be reassigned
   * If the calendarId is not supplied the default is the primary calendar of the location.
  **/
  putSetupV1ResourcesIdReassignAppointmentsResourceId(
    req: operations.PutSetupV1ResourcesIdReassignAppointmentsResourceIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutSetupV1ResourcesIdReassignAppointmentsResourceIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutSetupV1ResourcesIdReassignAppointmentsResourceIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/resources/{id}/reassign/appointments/{resourceId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutSetupV1ResourcesIdReassignAppointmentsResourceIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.appointmentViewModels = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putSetupV1ResourcesIdRecover - Recovers a resource object.
   *
   * Use this endpoint to recover a deleted resource.
  **/
  putSetupV1ResourcesIdRecover(
    req: operations.PutSetupV1ResourcesIdRecoverRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutSetupV1ResourcesIdRecoverResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutSetupV1ResourcesIdRecoverRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/resources/{id}/recover", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutSetupV1ResourcesIdRecoverResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.resourceViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
