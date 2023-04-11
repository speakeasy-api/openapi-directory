import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Subscriptions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a subscription.
     */
    mirrorSubscriptionsDelete(req: operations.MirrorSubscriptionsDeleteRequest, security: operations.MirrorSubscriptionsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.MirrorSubscriptionsDeleteResponse>;
    /**
     * Creates a new subscription.
     */
    mirrorSubscriptionsInsert(req: operations.MirrorSubscriptionsInsertRequest, security: operations.MirrorSubscriptionsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.MirrorSubscriptionsInsertResponse>;
    /**
     * Retrieves a list of subscriptions for the authenticated user and service.
     */
    mirrorSubscriptionsList(req: operations.MirrorSubscriptionsListRequest, security: operations.MirrorSubscriptionsListSecurity, config?: AxiosRequestConfig): Promise<operations.MirrorSubscriptionsListResponse>;
    /**
     * Updates an existing subscription in place.
     */
    mirrorSubscriptionsUpdate(req: operations.MirrorSubscriptionsUpdateRequest, security: operations.MirrorSubscriptionsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.MirrorSubscriptionsUpdateResponse>;
}
