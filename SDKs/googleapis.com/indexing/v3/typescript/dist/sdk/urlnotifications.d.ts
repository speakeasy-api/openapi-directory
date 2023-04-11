import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UrlNotifications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets metadata about a Web Document. This method can _only_ be used to query URLs that were previously seen in successful Indexing API notifications. Includes the latest `UrlNotification` received via this API.
     */
    indexingUrlNotificationsGetMetadata(req: operations.IndexingUrlNotificationsGetMetadataRequest, security: operations.IndexingUrlNotificationsGetMetadataSecurity, config?: AxiosRequestConfig): Promise<operations.IndexingUrlNotificationsGetMetadataResponse>;
    /**
     * Notifies that a URL has been updated or deleted.
     */
    indexingUrlNotificationsPublish(req: operations.IndexingUrlNotificationsPublishRequest, security: operations.IndexingUrlNotificationsPublishSecurity, config?: AxiosRequestConfig): Promise<operations.IndexingUrlNotificationsPublishResponse>;
}
