import { SpeakeasyBase } from "../../../internal/utils";
import { WebhookEventResource } from "./webhookeventresource";
/**
 * Asynchronous callback request used for webhook event delivery.
 *
 * @remarks
 *
 */
export declare class WebhookEventCallback extends SpeakeasyBase {
    /**
     * The webhook event data sent to the subscribed webhook.
     *
     * @remarks
     *
     */
    data: WebhookEventResource;
}
