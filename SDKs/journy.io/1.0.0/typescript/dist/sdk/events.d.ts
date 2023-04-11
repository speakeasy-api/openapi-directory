import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Endpoints for listing events.
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
     * Get events
     *
     * @remarks
     * Endpoint to list events.
     */
    getEvents(config?: AxiosRequestConfig): Promise<operations.GetEventsResponse>;
    /**
     * Track event
     *
     * @remarks
     * Endpoint used to track an event for a user or an account.
     *
     * This endpoint is moved to [Track](#operation/trackEvent).
     */
    trackJourneyEvent(req: operations.TrackJourneyEventRequestBody, config?: AxiosRequestConfig): Promise<operations.TrackJourneyEventResponse>;
}
