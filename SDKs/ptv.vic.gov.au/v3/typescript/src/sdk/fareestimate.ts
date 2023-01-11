import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class FareEstimate {
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
   * fareEstimateGetFareEstimateByZone - Estimate a fare by zone
  **/
  fareEstimateGetFareEstimateByZone(
    req: operations.FareEstimateGetFareEstimateByZoneRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FareEstimateGetFareEstimateByZoneResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FareEstimateGetFareEstimateByZoneRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v3/fare_estimate/min_zone/{minZone}/max_zone/{maxZone}", req.pathParams);
    
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
        const res: operations.FareEstimateGetFareEstimateByZoneResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.v3FareEstimateResponse = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/json`)) {
                res.v3FareEstimateResponse = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.matchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.matchContentType(contentType, `application/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `text/json`)) {
                res.v3ErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
