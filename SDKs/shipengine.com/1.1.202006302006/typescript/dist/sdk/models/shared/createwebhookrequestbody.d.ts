import { SpeakeasyBase } from "../../../internal/utils";
import { WebhookEventEnum } from "./webhookeventenum";
/**
 * A create webhook request body
**/
export declare class CreateWebhookRequestBody extends SpeakeasyBase {
    event: WebhookEventEnum;
    url: Record<string, any>;
}
