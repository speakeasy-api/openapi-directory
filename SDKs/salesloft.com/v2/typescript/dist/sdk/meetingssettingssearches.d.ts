import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Meetings Settings - Searches
 */
export declare class MeetingsSettingsSearches {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List meeting settings
     *
     * @remarks
     * Fetches multiple meeting setting records. The records can be filtered, paged, and sorted according to the respective parameters.
     *
     */
    postV2MeetingsSettingsSearchesJson(req: operations.PostV2MeetingsSettingsSearchesJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV2MeetingsSettingsSearchesJsonResponse>;
}
