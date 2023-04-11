import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class BehavioralEventsTracking {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Sends Custom Behavioral Event
     *
     * @remarks
     * Endpoint to send an instance of a behavioral event
     */
    postEventsV3Send(req: shared.BehavioralEventHttpCompletionRequest, security: operations.PostEventsV3SendSecurity, config?: AxiosRequestConfig): Promise<operations.PostEventsV3SendResponse>;
}
