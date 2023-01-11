import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Cargo {
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
   * cargoGetRouteFromDateProductCodeByOriginAndDestinationGet - Retrieve all flights
   *
   * Retrieve a list of all possible flights (both direct and connecting) between two airports on a given date. Routes are available for today and up to days in the future.
  **/
  cargoGetRouteFromDateProductCodeByOriginAndDestinationGet(
    req: operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/cargo/getRoute/{origin}-{destination}/{fromDate}/{productCode}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cargoGetRouteFromDateProductCodeByOriginAndDestinationGet200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * cargoShipmentTrackingByAwbPrefixAndAwbNumberGet - Shipment Tracking
   *
   * With this tracking service you can easily retrieve your shipment or flight status information.
  **/
  cargoShipmentTrackingByAwbPrefixAndAwbNumberGet(
    req: operations.CargoShipmentTrackingByAwbPrefixAndAwbNumberGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CargoShipmentTrackingByAwbPrefixAndAwbNumberGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/cargo/shipmentTracking/{aWBPrefix}-{aWBNumber}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cargoShipmentTrackingByAWBPrefixAndAWBNumberGet200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
