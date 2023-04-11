import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryEnum } from "./categoryenum";
export declare class UpdateWebhookRequest extends SpeakeasyBase {
    /**
     * the authorization header to include with the notification.
     */
    authorizationHeader?: string;
    /**
     * The notification categories to enable.
     */
    categories?: CategoryEnum[];
    /**
     * whether the webhook is enabled.
     */
    enabled?: boolean;
    /**
     * the webhook URL to use.
     */
    webhookUrl?: string;
}
