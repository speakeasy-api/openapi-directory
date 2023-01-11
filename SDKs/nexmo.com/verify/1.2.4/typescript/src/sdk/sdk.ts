import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";


import { FraudManagement } from "./fraudmanagement";
import { Requests } from "./requests";


export const ServerList = [
	"https://api.nexmo.com/verify",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}

/* SDK Documentation: https://developer.nexmo.com/verify - More information on the Verify product on our Developer Portal*/
export class SDK {
  public fraudManagement: FraudManagement;
  public requests: Requests;

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
    
    
    this.fraudManagement = new FraudManagement(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.requests = new Requests(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
  
  /**
   * verifyCheck - Verify Check
   *
   * Use Verify check to confirm that the PIN you received from your user matches the one sent by Vonage in your Verify request.
   * 
   * 1. Send the verification `code` that your user supplied, with the corresponding `request_id` from the Verify request.
   * 2. Check the `status` of the response to determine if the code the user supplied matches the one sent by Vonage.
   * 
   * *Note that this endpoint is available by `GET` request as well as `POST`.*
  **/
  verifyCheck(
    req: operations.VerifyCheckRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.VerifyCheckResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.VerifyCheckRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/check/{format}", req.pathParams);

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
        const res: operations.VerifyCheckResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.verifyCheck200ApplicationJSONOneOf = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * verifyControl - Verify Control
   *
   * Control the progress of your Verify requests. To cancel an existing Verify request, or to trigger the next verification event:
   * 
   * 
   * 1. Send a Verify control request with the appropriate command (`cmd`) for what you want to achieve.
   * 
   * 2. Check the `status` in the response.
   * 
   * 
   * *Note that this endpoint is available by `GET` request as well as `POST`.*
  **/
  verifyControl(
    req: operations.VerifyControlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.VerifyControlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.VerifyControlRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/control/{format}", req.pathParams);

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
        const res: operations.VerifyControlResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.verifyControl200ApplicationJSONOneOf = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * verifyRequestWithPsd2 - PSD2 (Payment Services Directive 2) Request
   *
   * Use Verify request to generate and send a PIN to your user to authorize a payment:
   * 1. Create a request to send a verification code to your user.
   * 2. Check the `status` field in the response to ensure that your request was successful (zero is success).
   * 3. Use the `request_id` field in the response for the Verify check.
   * (Please note that XML format is not supported for the Payment Services Directive endpoint at this time.)
  **/
  verifyRequestWithPsd2(
    req: operations.VerifyRequestWithPsd2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.VerifyRequestWithPsd2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.VerifyRequestWithPsd2Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/psd2/{format}", req.pathParams);

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
        const res: operations.VerifyRequestWithPsd2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.verifyRequestWithPsd2200ApplicationJSONOneOf = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * verifySearch - Verify Search
   *
   * Use Verify search to check the status of past or current verification requests:
   * 
   * 1. Send a Verify search request containing the `request_id`s of the verification requests you are interested in.
   * 2. Use the `status` of each verification request in the `checks` array of the response object to determine the outcome.
   * 
   * *Note that this endpoint is available by `POST` request as well as `GET`.*
  **/
  verifySearch(
    req: operations.VerifySearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.VerifySearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.VerifySearchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/search/{format}", req.pathParams);
    
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
        const res: operations.VerifySearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.verifySearch200ApplicationJSONOneOf = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
  }

}