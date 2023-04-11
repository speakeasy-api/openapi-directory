import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Meetings Settings
 */
export declare class MeetingSettings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Update a meeting setting
     *
     * @remarks
     * Updates a meeting setting, by ID only.
     *
     */
    putV2MeetingsSettingsIdJson(req: operations.PutV2MeetingsSettingsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutV2MeetingsSettingsIdJsonResponse>;
}
