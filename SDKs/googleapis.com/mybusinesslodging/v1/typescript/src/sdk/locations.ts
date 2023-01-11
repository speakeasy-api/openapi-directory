import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Locations {
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
   * mybusinesslodgingLocationsGetLodging - Returns the Lodging of a specific location.
  **/
  mybusinesslodgingLocationsGetLodging(
    req: operations.MybusinesslodgingLocationsGetLodgingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MybusinesslodgingLocationsGetLodgingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MybusinesslodgingLocationsGetLodgingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/{name}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.MybusinesslodgingLocationsGetLodgingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.lodging = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * mybusinesslodgingLocationsLodgingGetGoogleUpdated - Returns the Google updated Lodging of a specific location.
  **/
  mybusinesslodgingLocationsLodgingGetGoogleUpdated(
    req: operations.MybusinesslodgingLocationsLodgingGetGoogleUpdatedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MybusinesslodgingLocationsLodgingGetGoogleUpdatedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MybusinesslodgingLocationsLodgingGetGoogleUpdatedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/{name}:getGoogleUpdated", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.MybusinesslodgingLocationsLodgingGetGoogleUpdatedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getGoogleUpdatedLodgingResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * mybusinesslodgingLocationsUpdateLodging - Updates the Lodging of a specific location.
  **/
  mybusinesslodgingLocationsUpdateLodging(
    req: operations.MybusinesslodgingLocationsUpdateLodgingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MybusinesslodgingLocationsUpdateLodgingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MybusinesslodgingLocationsUpdateLodgingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/{name}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.MybusinesslodgingLocationsUpdateLodgingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.lodging = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
