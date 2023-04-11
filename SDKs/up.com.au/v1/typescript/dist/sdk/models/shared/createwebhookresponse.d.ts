import { SpeakeasyBase } from "../../../internal/utils";
import { WebhookResource } from "./webhookresource";
/**
 * Successful response after creating a webhook.
 *
 * @remarks
 *
 */
export declare class CreateWebhookResponse extends SpeakeasyBase {
    /**
     * The webhook that was created.
     *
     * @remarks
     *
     */
    data: WebhookResource;
}
