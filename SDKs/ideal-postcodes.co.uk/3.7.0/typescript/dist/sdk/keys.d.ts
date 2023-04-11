import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Monitor and manage API Keys
 */
export declare class Keys {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Availability
     *
     * @remarks
     * Returns public information on key. Currently only returns whether the key is currently useable via the `available` property. Use this to discover if the key is useable before making further requests.
     *
     * You may pass both API Keys (beginning `ak_`) and Sub-licensed Keys (beginning `sl_`).
     * ## Testing
     *
     * To test your implementation of our API, you may use the following test keys.
     *
     * - **iddqd** Availability will return as `true`
     * - **idkfa** Availability will return as `false`
     *
     *
     */
    keyAvailability(req: operations.KeyAvailabilityRequest, config?: AxiosRequestConfig): Promise<operations.KeyAvailabilityResponse>;
    /**
     * Details
     *
     * @remarks
     * Returns private data on the key including remaining lookups, available datasets and usage limits.
     *
     */
    keyDetails(req: operations.KeyDetailsRequest, config?: AxiosRequestConfig): Promise<operations.KeyDetailsResponse>;
    /**
     * Logs (CSV)
     *
     * @remarks
     * Reports lookup information on a key for paid lookups.
     *
     * This method requires a `user_token`, which can be found on your [accounts page](https://ideal-postcodes.co.uk/account).
     *
     * A maximum interval of 90 days can be provided for analysis. If no start or end date is provided, the last 21 days will be used as the default interval.
     *
     * ## Download Usage History (CSV)
     *
     * `GET /keys/:key/lookups`
     *
     * Returns a CSV download of lookups performed and associated information.
     *
     * Note that the Content-Type returned will be CSV (text/csv). For a non 200 response, the `Content-Type` will revert to JSON with the error code and message embedded.
     *
     * ## Data Redaction
     *
     * Personally Identifiable Data (PII) caught in this your usage log (including IP, search term and URL data) will be redacted on a weekly basis.
     *
     * By default, PII will be redacted if it is older than 21 days. This timeframe can be configured from your dashboard.
     *
     * You may prevent PII collection altogether by setting the interval to `0` days.
     *
     */
    keyLogs(req: operations.KeyLogsRequest, config?: AxiosRequestConfig): Promise<operations.KeyLogsResponse>;
    /**
     * Usage Stats
     *
     * @remarks
     * Reports the number of lookups consumed on a key for a range of days.
     *
     * A maximum interval of 90 days can be provided for analysis. If no start or end date is provided, the last 21 days will be used as the default interval.
     *
     */
    keyUsage(req: operations.KeyUsageRequest, config?: AxiosRequestConfig): Promise<operations.KeyUsageResponse>;
}
