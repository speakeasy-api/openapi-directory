import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.nexmo.com/beta/audit"];
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
 * The Vonage Audit API allows you to view details of changes to your account. More information is available at <https://developer.nexmo.com/audit/overview>.
 *
 * @remarks
 * _Please note that the Audit API is currently in Beta_
 *
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
     * Retrieve individual audit event
     *
     * @remarks
     * Get the specified audit event.
     *
     */
    getEvent(req: operations.GetEventRequest, security: operations.GetEventSecurity, config?: AxiosRequestConfig): Promise<operations.GetEventResponse>;
    /**
     * Retrieve audit events
     *
     * @remarks
     * Get a series of audit events describing changes made to your Vonage API account over time.
     *
     */
    getEvents(req: operations.GetEventsRequest, security: operations.GetEventsSecurity, config?: AxiosRequestConfig): Promise<operations.GetEventsResponse>;
    /**
     * Retrieve audit event types
     *
     * @remarks
     * Get audit event types.
     *
     */
    getEventsOptions(config?: AxiosRequestConfig): Promise<operations.GetEventsOptionsResponse>;
}
