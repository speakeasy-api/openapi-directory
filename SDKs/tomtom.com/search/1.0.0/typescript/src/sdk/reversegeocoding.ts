import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class ReverseGeocoding {
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
   * getSearchVersionNumberReverseGeocodeCrossStreetPositionExt - Cross Street lookup
  **/
  getSearchVersionNumberReverseGeocodeCrossStreetPositionExt(
    req: operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/search/{versionNumber}/reverseGeocode/crossStreet/{position}.{ext}", req.pathParams);
    
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
        const res: operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 596:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
  }

  
  /**
   * getSearchVersionNumberReverseGeocodePositionExt - Reverse Geocode
  **/
  getSearchVersionNumberReverseGeocodePositionExt(
    req: operations.GetSearchVersionNumberReverseGeocodePositionExtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSearchVersionNumberReverseGeocodePositionExtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSearchVersionNumberReverseGeocodePositionExtRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/search/{versionNumber}/reverseGeocode/{position}.{ext}", req.pathParams);
    
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
        const res: operations.GetSearchVersionNumberReverseGeocodePositionExtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 596:
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
  }

}
