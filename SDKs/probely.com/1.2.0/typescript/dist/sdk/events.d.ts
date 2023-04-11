import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Important events in your Probely account are recorded as events.
 *
 * @remarks
 * An event is comprised of the resource acted on, when it occurred and
 * what kind of event (ex: `target_created`).
 *
 * Besides fetching these events using their endpoints you are also able
 * to receive them in real-time by registering webhooks.
 * The event is sent to every registered webhook URL as JSON and an HTTP
 * success status code (2XX) is expected in the response.
 * In case a webhook fails it will be retried with an exponential back-off
 * (maxing out at 4 hours) during 2 days, at the end of which an email is
 * sent to the users informing of this failure.
 * For security we suggest using an unique hard to guess identifier for the
 * webhook:
 * ```
 * https://webhook.example.com/d69179e3b06549469817560c650be98f/
 * ```
 * Webhook URL's are required to be HTTPS.
 *
 * When registering a webhook according to the chosen endpoint you can
 * receive any event for the account or only events for a single target.
 * A target webhook will not receive `user_created`, `user_deleted` and
 * `target_created` events and all events received pertain to the target
 * the webhook was created for.
 *
 */
export declare class Events {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete target webhook
     */
    deleteTargetsTargetIdWebhooksId(req: operations.DeleteTargetsTargetIdWebhooksIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTargetsTargetIdWebhooksIdResponse>;
    /**
     * Delete account webhook
     */
    deleteWebhooksId(req: operations.DeleteWebhooksIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWebhooksIdResponse>;
    /**
     * List account events
     */
    getEvents(config?: AxiosRequestConfig): Promise<operations.GetEventsResponse>;
    /**
     * Retrieve account event
     */
    getEventsId(req: operations.GetEventsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetEventsIdResponse>;
    /**
     * List target events
     */
    getTargetsTargetIdEvents(req: operations.GetTargetsTargetIdEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdEventsResponse>;
    /**
     * Retrieve target event
     */
    getTargetsTargetIdEventsId(req: operations.GetTargetsTargetIdEventsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdEventsIdResponse>;
    /**
     * List target webhooks
     */
    getTargetsTargetIdWebhooks(req: operations.GetTargetsTargetIdWebhooksRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdWebhooksResponse>;
    /**
     * Retrieve target webhook
     */
    getTargetsTargetIdWebhooksId(req: operations.GetTargetsTargetIdWebhooksIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdWebhooksIdResponse>;
    /**
     * List account webhooks
     */
    getWebhooks(config?: AxiosRequestConfig): Promise<operations.GetWebhooksResponse>;
    /**
     * Retrieve account webhook
     */
    getWebhooksId(req: operations.GetWebhooksIdRequest, config?: AxiosRequestConfig): Promise<operations.GetWebhooksIdResponse>;
    /**
     * Partial update target webhook
     */
    patchTargetsTargetIdWebhooksId(req: operations.PatchTargetsTargetIdWebhooksIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchTargetsTargetIdWebhooksIdResponse>;
    /**
     * Partial update account webhook
     */
    patchWebhooksId(req: operations.PatchWebhooksIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchWebhooksIdResponse>;
    /**
     * Create new target webhook
     */
    postTargetsTargetIdWebhooks(req: operations.PostTargetsTargetIdWebhooksRequest, config?: AxiosRequestConfig): Promise<operations.PostTargetsTargetIdWebhooksResponse>;
    /**
     * Create new account webhook
     */
    postWebhooks(req: shared.WebhookInput, config?: AxiosRequestConfig): Promise<operations.PostWebhooksResponse>;
    /**
     * Update target webhook
     */
    putTargetsTargetIdWebhooksId(req: operations.PutTargetsTargetIdWebhooksIdRequest, config?: AxiosRequestConfig): Promise<operations.PutTargetsTargetIdWebhooksIdResponse>;
    /**
     * Update account webhook
     */
    putWebhooksId(req: operations.PutWebhooksIdRequest, config?: AxiosRequestConfig): Promise<operations.PutWebhooksIdResponse>;
}
