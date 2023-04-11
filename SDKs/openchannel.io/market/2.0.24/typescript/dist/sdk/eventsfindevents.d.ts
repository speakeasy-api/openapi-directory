import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class EventsFindEvents {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns an event
     *
     * @remarks
     * - Results are returned for the market provided within the basic authentication credentials
     *
     */
    getEventsEventId(req: operations.GetEventsEventIdRequest, config?: AxiosRequestConfig): Promise<operations.GetEventsEventIdResponse>;
}
