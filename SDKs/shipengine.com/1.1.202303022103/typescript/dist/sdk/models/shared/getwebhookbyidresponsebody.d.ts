import { SpeakeasyBase } from "../../../internal/utils";
import { WebhookEventEnum } from "./webhookeventenum";
/**
 * A webhook
 */
export declare class GetWebhookByIdResponseBody extends SpeakeasyBase {
    event: WebhookEventEnum;
    /**
     * The url that the webhook sends the request to
     */
    url: string;
    /**
     * A string that uniquely identifies the webhook
     */
    webhookId: string;
}
