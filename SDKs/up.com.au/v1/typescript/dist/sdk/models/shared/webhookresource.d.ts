import { SpeakeasyBase } from "../../../internal/utils";
export declare class WebhookResourceAttributes extends SpeakeasyBase {
    /**
     * The date-time at which this webhook was created.
     *
     * @remarks
     *
     */
    createdAt: Date;
    /**
     * An optional description that was provided at the time the webhook was
     *
     * @remarks
     * created.
     *
     */
    description: string;
    /**
     * A shared secret key used to sign all webhook events sent to the
     *
     * @remarks
     * configured webhook URL. This field is returned only once, upon the
     * initial creation of the webhook. If lost, create a new webhook and
     * delete this webhook.
     *
     * The webhook URL receives a request with a
     * `X-Up-Authenticity-Signature` header, which is the SHA-256 HMAC of
     * the entire raw request body signed using this `secretKey`. It is
     * advised to compute and check this signature to verify the
     * authenticity of requests sent to the webhook URL. See
     * [Handling webhook events](#callback_post_webhookURL) for full
     * details.
     *
     */
    secretKey?: string;
    /**
     * The URL that this webhook is configured to `POST` events to.
     *
     * @remarks
     *
     */
    url: string;
}
export declare class WebhookResourceLinks extends SpeakeasyBase {
    /**
     * The canonical link to this resource within the API.
     *
     * @remarks
     *
     */
    self: string;
}
export declare class WebhookResourceRelationshipsLogsLinks extends SpeakeasyBase {
    /**
     * The link to retrieve the related resource(s) in this relationship.
     *
     * @remarks
     *
     */
    related: string;
}
export declare class WebhookResourceRelationshipsLogs extends SpeakeasyBase {
    links?: WebhookResourceRelationshipsLogsLinks;
}
export declare class WebhookResourceRelationships extends SpeakeasyBase {
    logs: WebhookResourceRelationshipsLogs;
}
/**
 * Provides information about a webhook.
 *
 * @remarks
 *
 */
export declare class WebhookResource extends SpeakeasyBase {
    attributes: WebhookResourceAttributes;
    /**
     * The unique identifier for this webhook.
     *
     * @remarks
     *
     */
    id: string;
    links?: WebhookResourceLinks;
    relationships: WebhookResourceRelationships;
    /**
     * The type of this resource: `webhooks`
     */
    type: string;
}
