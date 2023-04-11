import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Webhooks allow your own system to be automatically notified upon certin events, such as a new message received from one of your contacts or a status change notification for your messages
 */
export declare class Webhooks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Fetch active webhooks
     *
     * @remarks
     * When messages are acknowledge by carriers, a notification is sent to the specified URL
     */
    webhooksFetchAll(req: operations.WebhooksFetchAllRequest, security: operations.WebhooksFetchAllSecurity, config?: AxiosRequestConfig): Promise<operations.WebhooksFetchAllResponse>;
    /**
     * Subscribe to message events
     *
     * @remarks
     * When messages are acknowledge by carriers, a notification is sent to the specified URL
     */
    webhooksSubscribe(req: operations.WebhooksSubscribeRequest, security: operations.WebhooksSubscribeSecurity, config?: AxiosRequestConfig): Promise<operations.WebhooksSubscribeResponse>;
    /**
     * Unsubscribe to message events
     *
     * @remarks
     * Delete subscription for receiving notifications
     */
    webhooksUnsubscribe(req: operations.WebhooksUnsubscribeRequest, security: operations.WebhooksUnsubscribeSecurity, config?: AxiosRequestConfig): Promise<operations.WebhooksUnsubscribeResponse>;
}
