import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";




export const ServerList = [
	"https://fax.twilio.com",
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
   * deleteFax - Delete a specific fax and its associated media.
  **/
  deleteFax(
    req: operations.DeleteFaxRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteFaxResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteFaxRequest(req);
    }
    
    let baseURL: string = operations.DeleteFaxServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Faxes/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteFaxResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteFaxMedia - Delete a specific fax media instance.
  **/
  deleteFaxMedia(
    req: operations.DeleteFaxMediaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteFaxMediaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteFaxMediaRequest(req);
    }
    
    let baseURL: string = operations.DeleteFaxMediaServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Faxes/{FaxSid}/Media/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteFaxMediaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchFax - Fetch a specific fax.
  **/
  fetchFax(
    req: operations.FetchFaxRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchFaxResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchFaxRequest(req);
    }
    
    let baseURL: string = operations.FetchFaxServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Faxes/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchFaxResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.faxV1Fax = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchFaxMedia - Fetch a specific fax media instance.
  **/
  fetchFaxMedia(
    req: operations.FetchFaxMediaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchFaxMediaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchFaxMediaRequest(req);
    }
    
    let baseURL: string = operations.FetchFaxMediaServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Faxes/{FaxSid}/Media/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchFaxMediaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.faxV1FaxFaxMedia = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listFax - Retrieve a list of all faxes.
  **/
  listFax(
    req: operations.ListFaxRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListFaxResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListFaxRequest(req);
    }
    
    let baseURL: string = operations.ListFaxServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Faxes";
    
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
        const res: operations.ListFaxResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listFaxResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listFaxMedia - Retrieve a list of all fax media instances for the specified fax.
  **/
  listFaxMedia(
    req: operations.ListFaxMediaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListFaxMediaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListFaxMediaRequest(req);
    }
    
    let baseURL: string = operations.ListFaxMediaServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Faxes/{FaxSid}/Media", req.pathParams);
    
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
        const res: operations.ListFaxMediaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listFaxMediaResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}