import { SpeakeasyBase } from "../../../internal/utils";
import { WebhookEventTypeEnumEnum } from "./webhookeventtypeenumenum";
export declare class WebhookEventResourceAttributes extends SpeakeasyBase {
    /**
     * The date-time at which this event was generated.
     *
     * @remarks
     *
     */
    createdAt: Date;
    /**
     * The type of this event. This can be used to determine what action to
     *
     * @remarks
     * take in response to the event.
     *
     */
    eventType: WebhookEventTypeEnumEnum;
}
export declare class WebhookEventResourceRelationshipsTransactionData extends SpeakeasyBase {
    /**
     * The unique identifier of the resource within its type.
     *
     * @remarks
     *
     */
    id: string;
    /**
     * The type of this resource: `transactions`
     */
    type: string;
}
export declare class WebhookEventResourceRelationshipsTransactionLinks extends SpeakeasyBase {
    /**
     * The link to retrieve the related resource(s) in this relationship.
     *
     * @remarks
     *
     */
    related: string;
}
export declare class WebhookEventResourceRelationshipsTransaction extends SpeakeasyBase {
    data: WebhookEventResourceRelationshipsTransactionData;
    links?: WebhookEventResourceRelationshipsTransactionLinks;
}
export declare class WebhookEventResourceRelationshipsWebhookData extends SpeakeasyBase {
    /**
     * The unique identifier of the resource within its type.
     *
     * @remarks
     *
     */
    id: string;
    /**
     * The type of this resource: `webhooks`
     */
    type: string;
}
export declare class WebhookEventResourceRelationshipsWebhookLinks extends SpeakeasyBase {
    /**
     * The link to retrieve the related resource(s) in this relationship.
     *
     * @remarks
     *
     */
    related: string;
}
export declare class WebhookEventResourceRelationshipsWebhook extends SpeakeasyBase {
    data: WebhookEventResourceRelationshipsWebhookData;
    links?: WebhookEventResourceRelationshipsWebhookLinks;
}
export declare class WebhookEventResourceRelationships extends SpeakeasyBase {
    transaction?: WebhookEventResourceRelationshipsTransaction;
    webhook: WebhookEventResourceRelationshipsWebhook;
}
/**
 * Provides the event data used in asynchronous webhook event callbacks to
 *
 * @remarks
 * subscribed endpoints. Webhooks events have defined `eventType`s and may
 * optionally relate to other resources within the Up API.
 *
 */
export declare class WebhookEventResource extends SpeakeasyBase {
    attributes: WebhookEventResourceAttributes;
    /**
     * The unique identifier for this event. This will remain constant across
     *
     * @remarks
     * delivery retries.
     *
     */
    id: string;
    relationships: WebhookEventResourceRelationships;
    /**
     * The type of this resource: `webhook-events`
     */
    type: string;
}
