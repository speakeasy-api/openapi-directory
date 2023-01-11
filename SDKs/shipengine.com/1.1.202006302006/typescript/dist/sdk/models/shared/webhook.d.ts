import { SpeakeasyBase } from "../../../internal/utils";
import { WebhookEventEnum } from "./webhookeventenum";
/**
 * A webhook
**/
export declare class Webhook extends SpeakeasyBase {
    event?: WebhookEventEnum;
    url?: Record<string, any>;
    webhookId?: Record<string, any>;
}
