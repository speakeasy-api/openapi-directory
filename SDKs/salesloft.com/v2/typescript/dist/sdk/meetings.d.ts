import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Meetings
 */
export declare class Meetings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List meetings
     *
     * @remarks
     * Fetches multiple meeting records. The records can be filtered, paged, and sorted according to the respective parameters.
     * Meetings resource is responsible for events created via the Salesloft platform using calendaring features.
     * These events can relate to cadences, people, and accounts.
     *
     */
    getV2MeetingsJson(req: operations.GetV2MeetingsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2MeetingsJsonResponse>;
    /**
     * Update a meeting
     *
     * @remarks
     * Updates a meeting, by ID only.
     *
     */
    putV2MeetingsIdJson(req: operations.PutV2MeetingsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutV2MeetingsIdJsonResponse>;
}
