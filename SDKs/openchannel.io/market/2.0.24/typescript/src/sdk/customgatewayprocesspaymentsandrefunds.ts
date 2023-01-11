import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class CustomGatewayProcessPaymentsAndRefunds {
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
   * postCustomGatewayPaymentOwnershipId - Adds a payment for an app on behalf of a user
   *
   * - Results are returned for the market provided within the basic authentication credentials 
   * - Payments must be enabled and 'Custom' must be selected as the gateway in order to use this API endpoint
   * 
  **/
  postCustomGatewayPaymentOwnershipId(
    req: operations.PostCustomGatewayPaymentOwnershipIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCustomGatewayPaymentOwnershipIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCustomGatewayPaymentOwnershipIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/custom-gateway/payment/{ownershipId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostCustomGatewayPaymentOwnershipIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 412:
            break;
          default:
            if (utils.matchContentType(contentType, `*/*`)) {
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
   * postCustomGatewayRefundOwnershipId - Fully or partially refund payment for an app on behalf of a user
   *
   * - Results are returned for the market provided within the basic authentication credentials
   * - Payments must be enabled and 'Custom' must be selected as the gateway in order to use this API endpoint
   * 
  **/
  postCustomGatewayRefundOwnershipId(
    req: operations.PostCustomGatewayRefundOwnershipIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCustomGatewayRefundOwnershipIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCustomGatewayRefundOwnershipIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/custom-gateway/refund/{ownershipId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostCustomGatewayRefundOwnershipIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 412:
            break;
          default:
            if (utils.matchContentType(contentType, `*/*`)) {
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
