import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateWebhookServerList: readonly ["https://verify.twilio.com"];
export declare class CreateWebhookSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateWebhookCreateWebhookRequest extends SpeakeasyBase {
    /**
     * The array of events that this Webhook is subscribed to. Possible event types: `*, factor.deleted, factor.created, factor.verified, challenge.approved, challenge.denied`
     */
    eventTypes: string[];
    /**
     * The string that you assigned to describe the webhook. **This value should not contain PII.**
     */
    friendlyName: string;
    status?: shared.WebhookEnumStatusEnum;
    version?: shared.WebhookEnumVersionEnum;
    /**
     * The URL associated with this Webhook.
     */
    webhookUrl: string;
}
export declare class CreateWebhookRequest extends SpeakeasyBase {
    requestBody?: CreateWebhookCreateWebhookRequest;
    /**
     * The unique SID identifier of the Service.
     */
    serviceSid: string;
}
export declare class CreateWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    verifyV2ServiceWebhook?: shared.VerifyV2ServiceWebhook;
}
