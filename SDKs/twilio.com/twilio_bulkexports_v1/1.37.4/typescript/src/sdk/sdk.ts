import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";




export const ServerList = [
	"https://bulkexports.twilio.com",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;
    
  }
  
  createExportCustomJob(
    req: operations.CreateExportCustomJobRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateExportCustomJobResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateExportCustomJobRequest(req);
    }
    
    let baseURL: string = operations.CreateExportCustomJobServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Exports/{ResourceType}/Jobs", req.pathParams);

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
        const res: operations.CreateExportCustomJobResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.bulkexportsV1ExportExportCustomJob = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  deleteJob(
    req: operations.DeleteJobRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteJobResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteJobRequest(req);
    }
    
    let baseURL: string = operations.DeleteJobServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Exports/Jobs/{JobSid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteJobResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchDay - Fetch a specific Day.
  **/
  fetchDay(
    req: operations.FetchDayRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchDayResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchDayRequest(req);
    }
    
    let baseURL: string = operations.FetchDayServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Exports/{ResourceType}/Days/{Day}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchDayResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 307:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.bulkexportsV1ExportDayInstance = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchExport - Fetch a specific Export.
  **/
  fetchExport(
    req: operations.FetchExportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchExportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchExportRequest(req);
    }
    
    let baseURL: string = operations.FetchExportServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Exports/{ResourceType}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchExportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.bulkexportsV1Export = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchExportConfiguration - Fetch a specific Export Configuration.
  **/
  fetchExportConfiguration(
    req: operations.FetchExportConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchExportConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchExportConfigurationRequest(req);
    }
    
    let baseURL: string = operations.FetchExportConfigurationServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Exports/{ResourceType}/Configuration", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchExportConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.bulkexportsV1ExportConfiguration = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  fetchJob(
    req: operations.FetchJobRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchJobResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchJobRequest(req);
    }
    
    let baseURL: string = operations.FetchJobServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Exports/Jobs/{JobSid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchJobResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.bulkexportsV1ExportJob = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listDay - Retrieve a list of all Days for a resource.
  **/
  listDay(
    req: operations.ListDayRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDayResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDayRequest(req);
    }
    
    let baseURL: string = operations.ListDayServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Exports/{ResourceType}/Days", req.pathParams);
    
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
        const res: operations.ListDayResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listDayResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  listExportCustomJob(
    req: operations.ListExportCustomJobRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListExportCustomJobResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListExportCustomJobRequest(req);
    }
    
    let baseURL: string = operations.ListExportCustomJobServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Exports/{ResourceType}/Jobs", req.pathParams);
    
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
        const res: operations.ListExportCustomJobResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listExportCustomJobResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * updateExportConfiguration - Update a specific Export Configuration.
  **/
  updateExportConfiguration(
    req: operations.UpdateExportConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateExportConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateExportConfigurationRequest(req);
    }
    
    let baseURL: string = operations.UpdateExportConfigurationServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Exports/{ResourceType}/Configuration", req.pathParams);

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
        const res: operations.UpdateExportConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.bulkexportsV1ExportConfiguration = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}