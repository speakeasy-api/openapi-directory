import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Events {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List the events for the network
     *
     * @remarks
     * List the events for the network
     */
    getNetworkEvents(req: operations.GetNetworkEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkEventsResponse>;
    /**
     * List the event type to human-readable description
     *
     * @remarks
     * List the event type to human-readable description
     */
    getNetworkEventsEventTypes(req: operations.GetNetworkEventsEventTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkEventsEventTypesResponse>;
}
