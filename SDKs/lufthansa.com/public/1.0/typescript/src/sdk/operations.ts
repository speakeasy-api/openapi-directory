import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Operations {
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
   * operationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet - Flight Status at Arrival Airport
   *
   * Status of all arrivals at a given airport up to 4 hours from the provided date time.
  **/
  operationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet(
    req: operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/operations/flightstatus/arrivals/{airportCode}/{fromDateTime}", req.pathParams);
    
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
        const res: operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.operationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * operationsFlightstatusByFlightNumberAndDateGet - Flight Status
   *
   * Status of a particular flight (boarding, delayed, etc.).
  **/
  operationsFlightstatusByFlightNumberAndDateGet(
    req: operations.OperationsFlightstatusByFlightNumberAndDateGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OperationsFlightstatusByFlightNumberAndDateGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OperationsFlightstatusByFlightNumberAndDateGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/operations/flightstatus/{flightNumber}/{date}", req.pathParams);
    
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
        const res: operations.OperationsFlightstatusByFlightNumberAndDateGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.operationsFlightstatusByFlightNumberAndDateGet200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * operationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet - Flight Status at Departure Airport
   *
   * Status of all departures from a given airport up to 4 hours from the provided date time.
  **/
  operationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet(
    req: operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/operations/flightstatus/departures/{airportCode}/{fromDateTime}", req.pathParams);
    
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
        const res: operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.operationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * operationsFlightstatusRouteDateByOriginAndDestinationGet - Flight Status by Route
   *
   * Status of flights between a given origin and destination on a given date.
  **/
  operationsFlightstatusRouteDateByOriginAndDestinationGet(
    req: operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/operations/flightstatus/route/{origin}/{destination}/{date}", req.pathParams);
    
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
        const res: operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.operationsFlightstatusRouteDateByOriginAndDestinationGet200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * operationsSchedulesFromDateTimeByOriginAndDestinationGet - Flight Schedules
   *
   * Scheduled flights between given airports on a given date.
  **/
  operationsSchedulesFromDateTimeByOriginAndDestinationGet(
    req: operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/operations/schedules/{origin}/{destination}/{fromDateTime}", req.pathParams);
    
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
        const res: operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.operationsSchedulesFromDateTimeByOriginAndDestinationGet200ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
