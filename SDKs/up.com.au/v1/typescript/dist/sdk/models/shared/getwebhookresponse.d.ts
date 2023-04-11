import { SpeakeasyBase } from "../../../internal/utils";
import { WebhookResource } from "./webhookresource";
/**
 * Successful response to get a single webhook.
 *
 * @remarks
 *
 */
export declare class GetWebhookResponse extends SpeakeasyBase {
    /**
     * The webhook returned in this response.
     *
     * @remarks
     *
     */
    data: WebhookResource;
}
