import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Pubsubnotificationsettings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves a Merchant Center account's pubsub notification settings.
     */
    contentPubsubnotificationsettingsGet(req: operations.ContentPubsubnotificationsettingsGetRequest, security: operations.ContentPubsubnotificationsettingsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ContentPubsubnotificationsettingsGetResponse>;
    /**
     * Register a Merchant Center account for pubsub notifications. Note that cloud topic name shouldn't be provided as part of the request.
     */
    contentPubsubnotificationsettingsUpdate(req: operations.ContentPubsubnotificationsettingsUpdateRequest, security: operations.ContentPubsubnotificationsettingsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ContentPubsubnotificationsettingsUpdateResponse>;
}
