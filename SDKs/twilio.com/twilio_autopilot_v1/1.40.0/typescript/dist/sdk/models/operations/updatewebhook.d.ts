import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateWebhookServerList: readonly ["https://autopilot.twilio.com"];
export declare class UpdateWebhookSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateWebhookUpdateWebhookRequest extends SpeakeasyBase {
    /**
     * The list of space-separated events that this Webhook will subscribe to.
     */
    events?: string;
    /**
     * An application-defined string that uniquely identifies the new resource. It can be used as an alternative to the `sid` in the URL path to address the resource. This value must be unique and 64 characters or less in length.
     */
    uniqueName?: string;
    /**
     * The method to be used when calling the webhook's URL.
     */
    webhookMethod?: string;
    /**
     * The URL associated with this Webhook.
     */
    webhookUrl?: string;
}
export declare class UpdateWebhookRequest extends SpeakeasyBase {
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource to update.
     */
    assistantSid: string;
    requestBody?: UpdateWebhookUpdateWebhookRequest;
    /**
     * The Twilio-provided string that uniquely identifies the Webhook resource to update.
     */
    sid: string;
}
export declare class UpdateWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    autopilotV1AssistantWebhook?: shared.AutopilotV1AssistantWebhook;
}
