import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Myconfig {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets the current settings for the user.
     */
    booksMyconfigGetUserSettings(req: operations.BooksMyconfigGetUserSettingsRequest, security: operations.BooksMyconfigGetUserSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.BooksMyconfigGetUserSettingsResponse>;
    /**
     * Release downloaded content access restriction.
     */
    booksMyconfigReleaseDownloadAccess(req: operations.BooksMyconfigReleaseDownloadAccessRequest, security: operations.BooksMyconfigReleaseDownloadAccessSecurity, config?: AxiosRequestConfig): Promise<operations.BooksMyconfigReleaseDownloadAccessResponse>;
    /**
     * Request concurrent and download access restrictions.
     */
    booksMyconfigRequestAccess(req: operations.BooksMyconfigRequestAccessRequest, security: operations.BooksMyconfigRequestAccessSecurity, config?: AxiosRequestConfig): Promise<operations.BooksMyconfigRequestAccessResponse>;
    /**
     * Request downloaded content access for specified volumes on the My eBooks shelf.
     */
    booksMyconfigSyncVolumeLicenses(req: operations.BooksMyconfigSyncVolumeLicensesRequest, security: operations.BooksMyconfigSyncVolumeLicensesSecurity, config?: AxiosRequestConfig): Promise<operations.BooksMyconfigSyncVolumeLicensesResponse>;
    /**
     * Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value.
     */
    booksMyconfigUpdateUserSettings(req: operations.BooksMyconfigUpdateUserSettingsRequest, security: operations.BooksMyconfigUpdateUserSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.BooksMyconfigUpdateUserSettingsResponse>;
}
