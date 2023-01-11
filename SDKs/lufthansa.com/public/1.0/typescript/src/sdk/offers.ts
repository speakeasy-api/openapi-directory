import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Offers {
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
   * offersLoungesByLocationGet - Lounges
   *
   * Lounge information
  **/
  offersLoungesByLocationGet(
    req: operations.OffersLoungesByLocationGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OffersLoungesByLocationGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OffersLoungesByLocationGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/offers/lounges/{location}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.OffersLoungesByLocationGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.offersLoungesByLocationGet200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * offersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet - Seat Maps
   *
   * Cabin layout and seat characteristics.
  **/
  offersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet(
    req: operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/offers/seatmaps/{flightNumber}/{origin}/{destination}/{date}/{cabinClass}", req.pathParams);
    
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
        const res: operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.offersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
