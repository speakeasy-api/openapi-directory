import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";




export const ServerList = [
	"https://api.openfigi.com/{basePath}",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

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
    if (props.security) {
      let security: Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }
    
  }
  
  /**
   * getMappingValuesKey - Get values for enum-like fields.
  **/
  getMappingValuesKey(
    req: operations.GetMappingValuesKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMappingValuesKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMappingValuesKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/mapping/values/{key}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMappingValuesKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getMappingValuesKey200ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `*/*`)) {
                res.getMappingValuesKey400WildcardString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `*/*`)) {
                res.getMappingValuesKey500WildcardString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postMapping - Allows mapping from third-party identifiers to FIGIs.
  **/
  postMapping(
    req: operations.PostMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMappingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mapping";

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
        const res: operations.PostMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.bulkMappingJobResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `*/*`)) {
                res.postMapping400WildcardString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `*/*`)) {
                res.postMapping401WildcardString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 406:
            if (utils.matchContentType(contentType, `*/*`)) {
                res.postMapping406WildcardString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 413:
            if (utils.matchContentType(contentType, `*/*`)) {
                res.postMapping413WildcardString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `*/*`)) {
                res.postMapping500WildcardString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
  }

}