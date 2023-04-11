import { SpeakeasyBase } from "../../../internal/utils";
import { WebhookDeliveryStatusEnumEnum } from "./webhookdeliverystatusenumenum";
/**
 * Information about the request that was sent to the webhook URL.
 *
 * @remarks
 *
 */
export declare class WebhookDeliveryLogResourceAttributesRequest extends SpeakeasyBase {
    /**
     * The payload that was sent in the request body.
     *
     * @remarks
     *
     */
    body: string;
}
/**
 * Information about the response that was received from the webhook URL.
 *
 * @remarks
 *
 */
export declare class WebhookDeliveryLogResourceAttributesResponse extends SpeakeasyBase {
    /**
     * The payload that was received in the response body.
     *
     * @remarks
     *
     */
    body: string;
    /**
     * The HTTP status code received in the response.
     *
     * @remarks
     *
     */
    statusCode: number;
}
export declare class WebhookDeliveryLogResourceAttributes extends SpeakeasyBase {
    /**
     * The date-time at which this log entry was created.
     *
     * @remarks
     *
     */
    createdAt: Date;
    /**
     * The success or failure status of this delivery attempt.
     *
     * @remarks
     *
     */
    deliveryStatus: WebhookDeliveryStatusEnumEnum;
    /**
     * Information about the request that was sent to the webhook URL.
     *
     * @remarks
     *
     */
    request: WebhookDeliveryLogResourceAttributesRequest;
    /**
     * Information about the response that was received from the webhook URL.
     *
     * @remarks
     *
     */
    response: WebhookDeliveryLogResourceAttributesResponse;
}
export declare class WebhookDeliveryLogResourceRelationshipsWebhookEventData extends SpeakeasyBase {
    /**
     * The unique identifier of the resource within its type.
     *
     * @remarks
     *
     */
    id: string;
    /**
     * The type of this resource: `webhook-events`
     */
    type: string;
}
export declare class WebhookDeliveryLogResourceRelationshipsWebhookEvent extends SpeakeasyBase {
    data: WebhookDeliveryLogResourceRelationshipsWebhookEventData;
}
export declare class WebhookDeliveryLogResourceRelationships extends SpeakeasyBase {
    webhookEvent: WebhookDeliveryLogResourceRelationshipsWebhookEvent;
}
/**
 * Provides historical webhook event delivery information for analysis and
 *
 * @remarks
 * debugging purposes.
 *
 */
export declare class WebhookDeliveryLogResource extends SpeakeasyBase {
    attributes: WebhookDeliveryLogResourceAttributes;
    /**
     * The unique identifier for this log entry.
     *
     * @remarks
     *
     */
    id: string;
    relationships: WebhookDeliveryLogResourceRelationships;
    /**
     * The type of this resource: `webhook-delivery-logs`
     */
    type: string;
}
