import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Notifications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Permanently deletes a notification subscription.
     */
    storageNotificationsDelete(req: operations.StorageNotificationsDeleteRequest, security: operations.StorageNotificationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.StorageNotificationsDeleteResponse>;
    /**
     * View a notification configuration.
     */
    storageNotificationsGet(req: operations.StorageNotificationsGetRequest, security: operations.StorageNotificationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.StorageNotificationsGetResponse>;
    /**
     * Creates a notification subscription for a given bucket.
     */
    storageNotificationsInsert(req: operations.StorageNotificationsInsertRequest, security: operations.StorageNotificationsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.StorageNotificationsInsertResponse>;
    /**
     * Retrieves a list of notification subscriptions for a given bucket.
     */
    storageNotificationsList(req: operations.StorageNotificationsListRequest, security: operations.StorageNotificationsListSecurity, config?: AxiosRequestConfig): Promise<operations.StorageNotificationsListResponse>;
}
