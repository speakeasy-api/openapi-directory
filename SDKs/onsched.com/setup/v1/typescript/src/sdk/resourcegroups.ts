import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class ResourceGroups {
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
   * deleteSetupV1ResourcegroupsId - Deletes a resource group object.
   *
   * Use this endpoint to delete a resource group. The resource group is not permanently deleted and can be recovered.
  **/
  deleteSetupV1ResourcegroupsId(
    req: operations.DeleteSetupV1ResourcegroupsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSetupV1ResourcegroupsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSetupV1ResourcegroupsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/resourcegroups/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSetupV1ResourcegroupsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.resourceGroupViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getSetupV1Resourcegroups - Returns a list of resourcegroups.
   *
   * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
   * Use the other query parameters to optionally filter the results list.
  **/
  getSetupV1Resourcegroups(
    req: operations.GetSetupV1ResourcegroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSetupV1ResourcegroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSetupV1ResourcegroupsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/setup/v1/resourcegroups";
    
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
        const res: operations.GetSetupV1ResourcegroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.resourceGroupListViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getSetupV1ResourcegroupsId - Returns a resourceGroup object.
   *
   * The result returned is a single resourceGroup object. An id is required to find the service. Find resourceGroup id's using the GET setup/v1/resourceGroups end point
  **/
  getSetupV1ResourcegroupsId(
    req: operations.GetSetupV1ResourcegroupsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSetupV1ResourcegroupsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSetupV1ResourcegroupsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/resourcegroups/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSetupV1ResourcegroupsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.resourceGroupViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postSetupV1Resourcegroups - Creates a new resource group object.
   *
   * Use this endpoint to create a new resource. If not specified the business location id defaults to the first location in the company.
   * Email Address and a Name are required for creating a new resource.
  **/
  postSetupV1Resourcegroups(
    req: operations.PostSetupV1ResourcegroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSetupV1ResourcegroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSetupV1ResourcegroupsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/setup/v1/resourcegroups";

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
        const res: operations.PostSetupV1ResourcegroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.resourceGroupViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putSetupV1ResourcegroupsId - Updates a resource group object.
   *
   * Use this endpoint to update a resource group.
  **/
  putSetupV1ResourcegroupsId(
    req: operations.PutSetupV1ResourcegroupsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutSetupV1ResourcegroupsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutSetupV1ResourcegroupsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/resourcegroups/{id}", req.pathParams);

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
        const res: operations.PutSetupV1ResourcegroupsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.resourceGroupViewModel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putSetupV1ResourcegroupsIdRecover - Recovers a resource group object.
   *
   * Use this endpoint to recover a deleted resource group.
  **/
  putSetupV1ResourcegroupsIdRecover(
    req: operations.PutSetupV1ResourcegroupsIdRecoverRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutSetupV1ResourcegroupsIdRecoverResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutSetupV1ResourcegroupsIdRecoverRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/setup/v1/resourcegroups/{id}/recover", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutSetupV1ResourcegroupsIdRecoverResponse = {statusCode: httpRes.status, contentType: contentType};
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
