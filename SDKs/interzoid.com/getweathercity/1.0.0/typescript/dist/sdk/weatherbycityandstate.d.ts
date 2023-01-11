import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class WeatherByCityAndState {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getweather - Gets current weather information for a US city and state
     *
     * Use city and state to retrieve current US weather information.
    **/
    getweather(req: operations.GetweatherRequest, config?: AxiosRequestConfig): Promise<operations.GetweatherResponse>;
}
