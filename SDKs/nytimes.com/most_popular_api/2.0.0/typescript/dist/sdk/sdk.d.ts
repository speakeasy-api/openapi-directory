import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://api.nytimes.com/svc/mostpopular/v2", "https://api.nytimes.com/svc/mostpopular/v2"];
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
 * Get lists of NYT Articles based on shares, emails, and views.
 *
 * @see {@link http://developer.nytimes.com/}
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
     * Most Emailed by Section & Time Period
     */
    getMostemailedSectionTimePeriodJson(req: operations.GETMostemailedSectionTimePeriodJsonRequest, security: operations.GETMostemailedSectionTimePeriodJsonSecurity, config?: AxiosRequestConfig): Promise<operations.GETMostemailedSectionTimePeriodJsonResponse>;
    /**
     * Most Shared by Section & Time Period
     */
    getMostsharedSectionTimePeriodJson(req: operations.GETMostsharedSectionTimePeriodJsonRequest, security: operations.GETMostsharedSectionTimePeriodJsonSecurity, config?: AxiosRequestConfig): Promise<operations.GETMostsharedSectionTimePeriodJsonResponse>;
    /**
     * Most Viewed by Section & Time Period
     */
    getMostviewedSectionTimePeriodJson(req: operations.GETMostviewedSectionTimePeriodJsonRequest, security: operations.GETMostviewedSectionTimePeriodJsonSecurity, config?: AxiosRequestConfig): Promise<operations.GETMostviewedSectionTimePeriodJsonResponse>;
}
