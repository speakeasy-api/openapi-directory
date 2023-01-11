import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class DefaultObjectAccessControls {
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
   * storageDefaultObjectAccessControlsDelete - Permanently deletes the default object ACL entry for the specified entity on the specified bucket.
  **/
  storageDefaultObjectAccessControlsDelete(
    req: operations.StorageDefaultObjectAccessControlsDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StorageDefaultObjectAccessControlsDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StorageDefaultObjectAccessControlsDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/b/{bucket}/defaultObjectAcl/{entity}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StorageDefaultObjectAccessControlsDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * storageDefaultObjectAccessControlsGet - Returns the default object ACL entry for the specified entity on the specified bucket.
  **/
  storageDefaultObjectAccessControlsGet(
    req: operations.StorageDefaultObjectAccessControlsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StorageDefaultObjectAccessControlsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StorageDefaultObjectAccessControlsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/b/{bucket}/defaultObjectAcl/{entity}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.StorageDefaultObjectAccessControlsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.objectAccessControl = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * storageDefaultObjectAccessControlsInsert - Creates a new default object ACL entry on the specified bucket.
  **/
  storageDefaultObjectAccessControlsInsert(
    req: operations.StorageDefaultObjectAccessControlsInsertRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StorageDefaultObjectAccessControlsInsertResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StorageDefaultObjectAccessControlsInsertRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/b/{bucket}/defaultObjectAcl", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.StorageDefaultObjectAccessControlsInsertResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.objectAccessControl = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * storageDefaultObjectAccessControlsList - Retrieves default object ACL entries on the specified bucket.
  **/
  storageDefaultObjectAccessControlsList(
    req: operations.StorageDefaultObjectAccessControlsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StorageDefaultObjectAccessControlsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StorageDefaultObjectAccessControlsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/b/{bucket}/defaultObjectAcl", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.StorageDefaultObjectAccessControlsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.objectAccessControls = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * storageDefaultObjectAccessControlsPatch - Updates a default object ACL entry on the specified bucket. This method supports patch semantics.
  **/
  storageDefaultObjectAccessControlsPatch(
    req: operations.StorageDefaultObjectAccessControlsPatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StorageDefaultObjectAccessControlsPatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StorageDefaultObjectAccessControlsPatchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/b/{bucket}/defaultObjectAcl/{entity}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "patch",
      headers: headers,
      data: reqBody, 
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StorageDefaultObjectAccessControlsPatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.objectAccessControl = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * storageDefaultObjectAccessControlsUpdate - Updates a default object ACL entry on the specified bucket.
  **/
  storageDefaultObjectAccessControlsUpdate(
    req: operations.StorageDefaultObjectAccessControlsUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StorageDefaultObjectAccessControlsUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StorageDefaultObjectAccessControlsUpdateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/b/{bucket}/defaultObjectAcl/{entity}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.StorageDefaultObjectAccessControlsUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.objectAccessControl = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
