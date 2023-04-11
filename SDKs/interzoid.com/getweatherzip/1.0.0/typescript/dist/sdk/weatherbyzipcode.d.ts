import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class WeatherByZipCode {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets current weather information for a US zip code
     *
     * @remarks
     * Use a US zip code to retrieve current weather information
     */
    getweatherzipcode(req: operations.GetweatherzipcodeRequest, config?: AxiosRequestConfig): Promise<operations.GetweatherzipcodeResponse>;
}
