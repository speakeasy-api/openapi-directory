import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Events are actions that occur within a conversation. Examples of this includes: Text events from members, or invite events from users
 */
export declare class Event {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create an event
     */
    createEvent(req: operations.CreateEventRequest, config?: AxiosRequestConfig): Promise<operations.CreateEventResponse>;
    /**
     * Delete an event
     */
    deleteEvent(req: operations.DeleteEventRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEventResponse>;
    /**
     * Retrieve an event
     */
    getEvent(req: operations.GetEventRequest, config?: AxiosRequestConfig): Promise<operations.GetEventResponse>;
    /**
     * List events
     *
     * @remarks
     * This endpoint is **DEPRECATED**. Please use [/v0.2/events](/api/conversation.v2#get-events).
     */
    getEvents(req: operations.GetEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetEventsResponse>;
}
