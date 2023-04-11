import { SpeakeasyBase } from "../../../internal/utils";
import { WebhookEnumMethodsEnum } from "./webhookenummethodsenum";
import { WebhookEnumStatusEnum } from "./webhookenumstatusenum";
import { WebhookEnumVersionEnum } from "./webhookenumversionenum";
/**
 * Created
 */
export declare class VerifyV2ServiceWebhook extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Service resource.
     */
    accountSid?: string;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The array of events that this Webhook is subscribed to. Possible event types: `*, factor.deleted, factor.created, factor.verified, challenge.approved, challenge.denied`
     */
    eventTypes?: string[];
    /**
     * The string that you assigned to describe the webhook. **This value should not contain PII.**
     */
    friendlyName?: string;
    /**
     * The unique SID identifier of the Service.
     */
    serviceSid?: string;
    /**
     * The unique string that we created to identify the Webhook resource.
     */
    sid?: string;
    status?: WebhookEnumStatusEnum;
    /**
     * The absolute URL of the Webhook resource.
     */
    url?: string;
    version?: WebhookEnumVersionEnum;
    webhookMethod?: WebhookEnumMethodsEnum;
    /**
     * The URL associated with this Webhook.
     */
    webhookUrl?: string;
}
