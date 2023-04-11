import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryEnum } from "./categoryenum";
/**
 * Webhook response
 */
export declare class WebhookResponse extends SpeakeasyBase {
    authorizationHeader?: string;
    categories?: CategoryEnum[];
    enabled?: boolean;
    id?: string;
    payorId?: string;
    webhookUrl?: string;
}
