import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations to manage event subscriptions.
 */
export declare class Subscriptions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    deleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchive(req: operations.DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveRequest, security: operations.DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveResponse>;
    getWebhooksV3AppIdSubscriptionsSubscriptionIdGetById(req: operations.GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdRequest, security: operations.GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdResponse>;
    getWebhooksV3AppIdSubscriptionsGetAll(req: operations.GetWebhooksV3AppIdSubscriptionsGetAllRequest, security: operations.GetWebhooksV3AppIdSubscriptionsGetAllSecurity, config?: AxiosRequestConfig): Promise<operations.GetWebhooksV3AppIdSubscriptionsGetAllResponse>;
    patchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdate(req: operations.PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateRequest, security: operations.PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateResponse>;
    postWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatch(req: operations.PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchRequest, security: operations.PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchSecurity, config?: AxiosRequestConfig): Promise<operations.PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchResponse>;
    postWebhooksV3AppIdSubscriptionsCreate(req: operations.PostWebhooksV3AppIdSubscriptionsCreateRequest, security: operations.PostWebhooksV3AppIdSubscriptionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.PostWebhooksV3AppIdSubscriptionsCreateResponse>;
}
