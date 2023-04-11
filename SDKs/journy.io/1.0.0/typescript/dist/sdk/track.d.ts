import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Endpoints for tracking events.
 */
export declare class Track {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Track event
     *
     * @remarks
     * Endpoint used to track an event for a user or an account.
     */
    trackEvent(req: operations.TrackEventRequestBody, config?: AxiosRequestConfig): Promise<operations.TrackEventResponse>;
}
