import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://monitor.twilio.com"];
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
 * This is the public Twilio REST API.
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
    fetchAlert(req: operations.FetchAlertRequest, security: operations.FetchAlertSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchAlertResponse>;
    fetchEvent(req: operations.FetchEventRequest, security: operations.FetchEventSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchEventResponse>;
    listAlert(req: operations.ListAlertRequest, security: operations.ListAlertSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListAlertResponse>;
    /**
     * Returns a list of events in the account, sorted by event-date.
     */
    listEvent(req: operations.ListEventRequest, security: operations.ListEventSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListEventResponse>;
}
