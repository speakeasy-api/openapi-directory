import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * ODWeather API service
 */
export declare class ODWeather {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get forecast and realtime information for known points<br/>None
     */
    compareStation(req: operations.CompareStationRequest, config?: AxiosRequestConfig): Promise<operations.CompareStationResponse>;
    /**
     * Get data from the aemet stations<br/>None
     */
    getAemetStation(req: operations.GetAemetStationRequest, config?: AxiosRequestConfig): Promise<operations.GetAemetStationResponse>;
    /**
     * Get data from the easywind weather stations<br/>None
     */
    getEasywind(req: operations.GetEasywindRequest, config?: AxiosRequestConfig): Promise<operations.GetEasywindResponse>;
    /**
     * Get stations in an event<br/>None
     */
    getEventStations(req: operations.GetEventStationsRequest, config?: AxiosRequestConfig): Promise<operations.GetEventStationsResponse>;
    /**
     * Get forecast points of a yatchclub<br/>None
     */
    getForecastPoints(req: operations.GetForecastPointsRequest, config?: AxiosRequestConfig): Promise<operations.GetForecastPointsResponse>;
    /**
     * Get timeseries forecast information<br/>None
     */
    getForecastTimeSeries(req: operations.GetForecastTimeSeriesRequest, config?: AxiosRequestConfig): Promise<operations.GetForecastTimeSeriesResponse>;
    /**
     * Get timeseries forecast information<br/>None
     */
    getForecastTimeSeriesWrf(req: operations.GetForecastTimeSeriesWrfRequest, config?: AxiosRequestConfig): Promise<operations.GetForecastTimeSeriesWrfResponse>;
    /**
     * Get data from the socib bahia de palma buoy<br/>None
     */
    getSocibWeatherStation(req: operations.GetSocibWeatherStationRequest, config?: AxiosRequestConfig): Promise<operations.GetSocibWeatherStationResponse>;
    /**
     * Get data from the weather display software<br/>None
     */
    getWeatherDisplay(req: operations.GetWeatherDisplayRequest, config?: AxiosRequestConfig): Promise<operations.GetWeatherDisplayResponse>;
    /**
     * Get forecast and realtime information for known points<br/>None
     */
    getWebCams(config?: AxiosRequestConfig): Promise<operations.GetWebCamsResponse>;
}
