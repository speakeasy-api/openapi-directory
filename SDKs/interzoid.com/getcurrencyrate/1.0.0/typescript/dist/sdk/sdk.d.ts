import { CurrencyRates } from "./currencyrates";
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
 * This API retrieves the latest currency exchange rate, against the US Dollar, for the given three-letter international currency code. These currency rates are compiled from many global sources and are updated several times per day.
 *
 * @see {@link https://www.interzoid.com/services/getcurrencyrate} - API home page and documentation
 */
export declare class SDK {
    currencyRates: CurrencyRates;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
