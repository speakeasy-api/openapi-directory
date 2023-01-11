import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class AdditionalData {
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
   * getSearchVersionNumberAdditionalDataExt - Additional Data
  **/
  getSearchVersionNumberAdditionalDataExt(
    req: operations.GetSearchVersionNumberAdditionalDataExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberAdditionalDataExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberAdditionalDataExtRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/search/{versionNumber}/additionalData.{ext}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetSearchVersionNumberAdditionalDataExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 414:
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 502:
            break;
          case httpRes?.status == 503:
            break;
          case httpRes?.status == 504:
            break;
          case httpRes?.status == 596:
            break;
        }

        return res;
      })
  }

}
