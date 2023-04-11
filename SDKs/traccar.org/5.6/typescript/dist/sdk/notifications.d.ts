import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * User notifications management
 */
export declare class Notifications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a Notification
     */
    deleteNotificationsId(req: operations.DeleteNotificationsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNotificationsIdResponse>;
    /**
     * Fetch a list of Notifications
     *
     * @remarks
     * Without params, it returns a list of Notifications the user has access to
     */
    getNotifications(req: operations.GetNotificationsRequest, config?: AxiosRequestConfig): Promise<operations.GetNotificationsResponse>;
    /**
     * Fetch a list of available Notification types
     */
    getNotificationsTypes(config?: AxiosRequestConfig): Promise<operations.GetNotificationsTypesResponse>;
    /**
     * Create a Notification
     */
    postNotifications(req: shared.Notification, config?: AxiosRequestConfig): Promise<operations.PostNotificationsResponse>;
    /**
     * Send test notification to current user via Email and SMS
     */
    postNotificationsTest(config?: AxiosRequestConfig): Promise<operations.PostNotificationsTestResponse>;
    /**
     * Update a Notification
     */
    putNotificationsId(req: operations.PutNotificationsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutNotificationsIdResponse>;
}
