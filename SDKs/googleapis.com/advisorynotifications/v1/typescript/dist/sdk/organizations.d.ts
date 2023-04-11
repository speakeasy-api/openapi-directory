import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Organizations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets a notification.
     */
    advisorynotificationsOrganizationsLocationsNotificationsGet(req: operations.AdvisorynotificationsOrganizationsLocationsNotificationsGetRequest, security: operations.AdvisorynotificationsOrganizationsLocationsNotificationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AdvisorynotificationsOrganizationsLocationsNotificationsGetResponse>;
    /**
     * Lists notifications under a given parent.
     */
    advisorynotificationsOrganizationsLocationsNotificationsList(req: operations.AdvisorynotificationsOrganizationsLocationsNotificationsListRequest, security: operations.AdvisorynotificationsOrganizationsLocationsNotificationsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdvisorynotificationsOrganizationsLocationsNotificationsListResponse>;
}
