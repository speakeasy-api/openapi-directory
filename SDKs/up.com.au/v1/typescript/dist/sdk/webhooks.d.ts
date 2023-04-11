import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Webhooks provide a mechanism for a configured URL to receive
 *
 * @remarks
 * events when transaction activity occurs on Up. You can think of
 * webhooks as being like push notifications for your server-side
 * application.
 *
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
     * Delete webhook
     *
     * @remarks
     * Delete a specific webhook by providing its unique identifier. Once
     * deleted, webhook events will no longer be sent to the configured URL.
     *
     */
    deleteWebhooksId(req: operations.DeleteWebhooksIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWebhooksIdResponse>;
    /**
     * List webhooks
     *
     * @remarks
     * Retrieve a list of configured webhooks. The returned list is
     * [paginated](#pagination) and can be scrolled by following the `next`
     * and `prev` links where present. Results are ordered oldest first to
     * newest last.
     *
     */
    getWebhooks(req: operations.GetWebhooksRequest, config?: AxiosRequestConfig): Promise<operations.GetWebhooksResponse>;
    /**
     * Retrieve webhook
     *
     * @remarks
     * Retrieve a specific webhook by providing its unique identifier.
     *
     */
    getWebhooksId(req: operations.GetWebhooksIdRequest, config?: AxiosRequestConfig): Promise<operations.GetWebhooksIdResponse>;
    /**
     * List webhook logs
     *
     * @remarks
     * Retrieve a list of delivery logs for a webhook by providing its unique
     * identifier. This is useful for analysis and debugging purposes. The
     * returned list is [paginated](#pagination) and can be scrolled by
     * following the `next` and `prev` links where present. Results are ordered
     * newest first to oldest last. Logs may be automatically purged after a
     * period of time.
     *
     */
    getWebhooksWebhookIdLogs(req: operations.GetWebhooksWebhookIdLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetWebhooksWebhookIdLogsResponse>;
    /**
     * Create webhook
     *
     * @remarks
     * Create a new webhook with a given URL. The URL will receive webhook
     * events as JSON-encoded `POST` requests. The URL must respond with a HTTP
     * `200` status on success.
     *
     * There is currently a limit of 10 webhooks at any given time. Once this
     * limit is reached, existing webhooks will need to be deleted before new
     * webhooks can be created.
     *
     * Event delivery is retried with exponential backoff if the URL is
     * unreachable or it does not respond with a `200` status. The response
     * includes a `secretKey` attribute, which is used to sign requests sent to
     * the webhook URL. It will not be returned from any other endpoints within
     * the Up API. If the `secretKey` is lost, simply create a new webhook with
     * the same URL, capture its `secretKey` and then delete the original
     * webhook. See [Handling webhook events](#callback_post_webhookURL) for
     * details on how to process webhook events.
     *
     * It is probably a good idea to test the webhook by
     * [sending it a `PING` event](#post_webhooks_webhookId_ping) after creating
     * it.
     *
     */
    postWebhooks(req: shared.CreateWebhookRequest, config?: AxiosRequestConfig): Promise<operations.PostWebhooksResponse>;
    /**
     * Ping webhook
     *
     * @remarks
     * Send a `PING` event to a webhook by providing its unique identifier.
     * This is useful for testing and debugging purposes. The event is delivered
     * asynchronously and its data is returned in the response to this request.
     *
     */
    postWebhooksWebhookIdPing(req: operations.PostWebhooksWebhookIdPingRequest, config?: AxiosRequestConfig): Promise<operations.PostWebhooksWebhookIdPingResponse>;
}
