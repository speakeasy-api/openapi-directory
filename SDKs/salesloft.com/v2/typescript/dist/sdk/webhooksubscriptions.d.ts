import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Webhook Subscriptions
 */
export declare class WebhookSubscriptions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a webhook subscription
     *
     * @remarks
     * Deletes a webhook subscription. This operation is not reversible without contacting support. This operation can be called multiple times successfully.
     */
    deleteV2WebhookSubscriptionsId(req: operations.DeleteV2WebhookSubscriptionsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteV2WebhookSubscriptionsIdResponse>;
    /**
     * List webhook subscriptions
     *
     * @remarks
     * Fetches all of the customer's webhook subscriptions for your application.
     */
    getV2WebhookSubscriptions(req: operations.GetV2WebhookSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetV2WebhookSubscriptionsResponse>;
    /**
     * Fetch a webhook subscription
     *
     * @remarks
     * Fetches a webhook subscription, by ID only.
     */
    getV2WebhookSubscriptionsId(req: operations.GetV2WebhookSubscriptionsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV2WebhookSubscriptionsIdResponse>;
    /**
     * Create a webhook subscription
     *
     * @remarks
     * Creates a webhook subscription. Visit the <a href="/webhooks.html" target="_blank" rel="noopener noreferrer">webhooks page</a> for additional details and a list of available webhooks.
     * Request must be made with a valid Oauth token or API key.
     */
    postV2WebhookSubscriptions(req: operations.PostV2WebhookSubscriptionsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostV2WebhookSubscriptionsResponse>;
    /**
     * Update a webhook subscription
     *
     * @remarks
     * Updates a webhook subscription.
     * Request must be made with a valid Oauth token or API key.
     */
    putV2WebhookSubscriptionsId(req: operations.PutV2WebhookSubscriptionsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutV2WebhookSubscriptionsIdResponse>;
}
