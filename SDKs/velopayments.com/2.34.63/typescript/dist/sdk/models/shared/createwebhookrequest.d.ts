import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryEnum } from "./categoryenum";
export declare class CreateWebhookRequest extends SpeakeasyBase {
    /**
     * the authorization header to include with the notification.
     */
    authorizationHeader?: string;
    /**
     * the categories to enable.
     */
    categories?: CategoryEnum[];
    /**
     * whether the webhook is enabled.
     */
    enabled: boolean;
    payorId: string;
    /**
     * the webhook URL to use.
     */
    webhookUrl: string;
}
