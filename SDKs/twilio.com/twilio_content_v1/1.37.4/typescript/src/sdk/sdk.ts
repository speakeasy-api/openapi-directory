import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";




export const ServerList = [
	"https://content.twilio.com",
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
  
  /**
   * deleteContent - Deletes a Content resource
  **/
  deleteContent(
    req: operations.DeleteContentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteContentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteContentRequest(req);
    }
    
    let baseURL: string = operations.DeleteContentServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Content/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteContentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchApprovalFetch - Fetch a Content resource's approval status by its unique Content Sid
  **/
  fetchApprovalFetch(
    req: operations.FetchApprovalFetchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchApprovalFetchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchApprovalFetchRequest(req);
    }
    
    let baseURL: string = operations.FetchApprovalFetchServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Content/{Sid}/ApprovalRequests", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchApprovalFetchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.contentV1ContentApprovalFetch = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchContent - Fetch a Content resource by its unique Content Sid
  **/
  fetchContent(
    req: operations.FetchContentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchContentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchContentRequest(req);
    }
    
    let baseURL: string = operations.FetchContentServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Content/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchContentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.contentV1Content = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listContent - Retrieve a list of Contents belonging to the account used to make the request
  **/
  listContent(
    req: operations.ListContentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListContentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListContentRequest(req);
    }
    
    let baseURL: string = operations.ListContentServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Content";
    
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
        const res: operations.ListContentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listContentResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}