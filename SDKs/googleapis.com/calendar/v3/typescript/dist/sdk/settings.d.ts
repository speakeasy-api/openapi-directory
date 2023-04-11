import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Settings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns a single user setting.
     */
    calendarSettingsGet(req: operations.CalendarSettingsGetRequest, security: operations.CalendarSettingsGetSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarSettingsGetResponse>;
    /**
     * Returns all user settings for the authenticated user.
     */
    calendarSettingsList(req: operations.CalendarSettingsListRequest, security: operations.CalendarSettingsListSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarSettingsListResponse>;
    /**
     * Watch for changes to Settings resources.
     */
    calendarSettingsWatch(req: operations.CalendarSettingsWatchRequest, security: operations.CalendarSettingsWatchSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarSettingsWatchResponse>;
}
