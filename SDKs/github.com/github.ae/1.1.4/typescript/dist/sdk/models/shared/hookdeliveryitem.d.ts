import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Delivery made by a webhook, without request and response information.
 */
export declare class HookDeliveryItem extends SpeakeasyBase {
    /**
     * The type of activity for the event that triggered the delivery.
     */
    action: string;
    /**
     * Time when the webhook delivery occurred.
     */
    deliveredAt: Date;
    /**
     * Time spent delivering.
     */
    duration: number;
    /**
     * The event that triggered the delivery.
     */
    event: string;
    /**
     * Unique identifier for the event (shared with all deliveries for all webhooks that subscribe to this event).
     */
    guid: string;
    /**
     * Unique identifier of the webhook delivery.
     */
    id: number;
    /**
     * The id of the GitHub App installation associated with this event.
     */
    installationId: number;
    /**
     * Whether the webhook delivery is a redelivery.
     */
    redelivery: boolean;
    /**
     * The id of the repository associated with this event.
     */
    repositoryId: number;
    /**
     * Describes the response returned after attempting the delivery.
     */
    status: string;
    /**
     * Status code received when delivery was made.
     */
    statusCode: number;
}
