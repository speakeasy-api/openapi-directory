import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class AssetsVolatility {
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
   * postAssetsVolatility - Volatility
   *
   * Compute the volatility (i.e., standard deviation) of one or several asset(s) from either:  
   * * The asset(s) returns
   * * The assets covariance matrix
   * * The asset(s) variance
   * 
   * References
   * * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation)
   * 
  **/
  postAssetsVolatility(
    req: operations.PostAssetsVolatilityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAssetsVolatilityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAssetsVolatilityRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/assets/volatility";

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
        const res: operations.PostAssetsVolatilityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.postAssetsVolatility200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postAssetsVolatilitySample - Sample volatility
   *
   * Compute the sample volatility (i.e., sample standard deviation) of one or several asset(s) from the asset(s) returns.
   * 
   * > This endpoint is similar to the endpoint [`/assets/volatility`](#post-/assets/volatility), but uses [Bessel's correction](https://en.wikipedia.org/wiki/Bessel%27s_correction) to compute the volatility.
   * 
   * References
   * * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation)
   * 
  **/
  postAssetsVolatilitySample(
    req: operations.PostAssetsVolatilitySampleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAssetsVolatilitySampleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAssetsVolatilitySampleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/assets/volatility/sample";

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
        const res: operations.PostAssetsVolatilitySampleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.postAssetsVolatilitySample200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
