import { WeatherByCityAndState } from "./weatherbycityandstate";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.interzoid.com"];
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
 * This API provides current weather information for US Cities, including temperatures, wind speeds, wind direction, relative humidity, and visibility.
 *
 * @see {@link https://www.interzoid.com/services/getweathercity} - API home page and documentation
 */
export declare class SDK {
    weatherByCityAndState: WeatherByCityAndState;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
