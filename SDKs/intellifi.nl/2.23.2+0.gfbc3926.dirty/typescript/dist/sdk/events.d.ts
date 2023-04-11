import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The `events` resource temporarily holds Brain events that match an event subscription in the `subscriptions` resource.
 *
 * @remarks
 * The subscription determines how long the events are held.
 *
 * See also the `subscriptions` resource.
 *
 *
 * @see {@link https://intellifi.zendesk.com/hc/en-us/sections/360001588534}
 */
export declare class Events {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get event
     */
    getEventById(req: operations.GetEventByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetEventByIdResponse>;
    /**
     * Get all events
     */
    getEvents(req: operations.GetEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetEventsResponse>;
}
