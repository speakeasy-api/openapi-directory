import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.openuv.io/api/{version}"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * The missing minimalistic JSON real-time UV Index API for awesome Developers, Innovators and Smart Home Enthusiasts
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Get hourly UV Index Forecast by location and date. Optional altitude, ozone level and datetime could be provided.
     */
    getForecast(req: operations.GetForecastRequest, config?: AxiosRequestConfig): Promise<operations.GetForecastResponse>;
    /**
     * Get daily protection time by location, UV Index from and UV Index to with 10 minutes accuracy. Optional altitide and ozone level could be provided.
     */
    getProtection(req: operations.GetProtectionRequest, config?: AxiosRequestConfig): Promise<operations.GetProtectionResponse>;
    /**
     * Get real-time UV Index by location. Optional altitude, ozone level and datetime could be provided.
     */
    getUv(req: operations.GetUvRequest, config?: AxiosRequestConfig): Promise<operations.GetUvResponse>;
}
