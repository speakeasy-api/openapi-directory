import { LocationEndpoints } from "./locationendpoints";
import { PointWeather } from "./pointweather";
import { TimeMachineHistoricalWeather } from "./timemachinehistoricalweather";
import { WeatherMaps } from "./weathermaps";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["/api/v1/premium"];
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
 *
 * @remarks
 *
 * This interactive documentation is using your API key which is filled in automatically, you can find and change this in [your dashboard](https://www.meteosource.com/client).
 *
 * Using the `GET` button, open your selected endpoint and read the introduction. You will find a detailed description of available parameters. You can complete the `Parameters` section and hit `Execute` to view a full API response. You can then inspect the JSON response, copy the `curl` command to run it on your machine, or obtain a URL of the request. In this way, you can easily build request command for the data you need.
 *
 */
export declare class SDK {
    locationEndpoints: LocationEndpoints;
    pointWeather: PointWeather;
    timeMachineHistoricalWeather: TimeMachineHistoricalWeather;
    weatherMaps: WeatherMaps;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
