import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Queries {
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
   * doubleclickbidmanagerQueriesCreatequery - Creates a query.
  **/
  doubleclickbidmanagerQueriesCreatequery(
    req: operations.DoubleclickbidmanagerQueriesCreatequeryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DoubleclickbidmanagerQueriesCreatequeryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DoubleclickbidmanagerQueriesCreatequeryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/query";

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
        const res: operations.DoubleclickbidmanagerQueriesCreatequeryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.query = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * doubleclickbidmanagerQueriesDeletequery - Deletes a stored query as well as the associated stored reports.
  **/
  doubleclickbidmanagerQueriesDeletequery(
    req: operations.DoubleclickbidmanagerQueriesDeletequeryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DoubleclickbidmanagerQueriesDeletequeryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DoubleclickbidmanagerQueriesDeletequeryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/query/{queryId}", req.pathParams);
    
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
        const res: operations.DoubleclickbidmanagerQueriesDeletequeryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * doubleclickbidmanagerQueriesGetquery - Retrieves a stored query.
  **/
  doubleclickbidmanagerQueriesGetquery(
    req: operations.DoubleclickbidmanagerQueriesGetqueryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DoubleclickbidmanagerQueriesGetqueryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DoubleclickbidmanagerQueriesGetqueryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/query/{queryId}", req.pathParams);
    
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
        const res: operations.DoubleclickbidmanagerQueriesGetqueryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.query = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * doubleclickbidmanagerQueriesListqueries - Retrieves stored queries.
  **/
  doubleclickbidmanagerQueriesListqueries(
    req: operations.DoubleclickbidmanagerQueriesListqueriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DoubleclickbidmanagerQueriesListqueriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DoubleclickbidmanagerQueriesListqueriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/queries";
    
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
        const res: operations.DoubleclickbidmanagerQueriesListqueriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listQueriesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * doubleclickbidmanagerQueriesRunquery - Runs a stored query to generate a report.
  **/
  doubleclickbidmanagerQueriesRunquery(
    req: operations.DoubleclickbidmanagerQueriesRunqueryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DoubleclickbidmanagerQueriesRunqueryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DoubleclickbidmanagerQueriesRunqueryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/query/{queryId}", req.pathParams);

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
        const res: operations.DoubleclickbidmanagerQueriesRunqueryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

}
