import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";




export const ServerList = [
	"http://api.sportsdata.io",
	"https://api.sportsdata.io",
	"http://azure-api.sportsdata.io",
	"https://azure-api.sportsdata.io",
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
   * driverDetails - Driver Details
  **/
  driverDetails(
    req: operations.DriverDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DriverDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DriverDetailsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/{format}/driver/{driverid}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DriverDetailsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.driver = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * driverRaceProjectionsEntryList - Driver Race Projections (Entry List)
  **/
  driverRaceProjectionsEntryList(
    req: operations.DriverRaceProjectionsEntryListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DriverRaceProjectionsEntryListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DriverRaceProjectionsEntryListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/{format}/DriverRaceProjections/{raceid}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DriverRaceProjectionsEntryListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.driverRaceProjections = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * drivers - Drivers
  **/
  drivers(
    req: operations.DriversRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DriversResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DriversRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/{format}/drivers", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DriversResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.drivers = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * raceResults - Race Results
  **/
  raceResults(
    req: operations.RaceResultsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RaceResultsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RaceResultsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/{format}/raceresult/{raceid}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RaceResultsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.raceResult = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * racesSchedule - Races / Schedule
  **/
  racesSchedule(
    req: operations.RacesScheduleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RacesScheduleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RacesScheduleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/{format}/races/{season}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RacesScheduleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.races = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * series - Series
  **/
  series(
    req: operations.SeriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SeriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SeriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/{format}/series", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SeriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.series = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}