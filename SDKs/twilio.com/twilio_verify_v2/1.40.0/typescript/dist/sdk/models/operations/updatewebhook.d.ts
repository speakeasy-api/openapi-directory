import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateWebhookServerList: readonly ["https://verify.twilio.com"];
export declare class UpdateWebhookSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateWebhookUpdateWebhookRequest extends SpeakeasyBase {
    /**
     * The array of events that this Webhook is subscribed to. Possible event types: `*, factor.deleted, factor.created, factor.verified, challenge.approved, challenge.denied`
     */
    eventTypes?: string[];
    /**
     * The string that you assigned to describe the webhook. **This value should not contain PII.**
     */
    friendlyName?: string;
    status?: shared.WebhookEnumStatusEnum;
    version?: shared.WebhookEnumVersionEnum;
    /**
     * The URL associated with this Webhook.
     */
    webhookUrl?: string;
}
export declare class UpdateWebhookRequest extends SpeakeasyBase {
    requestBody?: UpdateWebhookUpdateWebhookRequest;
    /**
     * The unique SID identifier of the Service.
     */
    serviceSid: string;
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
    verifyV2ServiceWebhook?: shared.VerifyV2ServiceWebhook;
}
