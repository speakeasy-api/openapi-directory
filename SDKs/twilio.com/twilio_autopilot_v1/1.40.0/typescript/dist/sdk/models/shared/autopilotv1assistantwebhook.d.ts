import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class AutopilotV1AssistantWebhook extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Webhook resource.
     */
    accountSid?: string;
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource.
     */
    assistantSid?: string;
    /**
     * The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: Date;
    /**
     * The list of space-separated events that this Webhook is subscribed to.
     */
    events?: string;
    /**
     * The unique string that we created to identify the Webhook resource.
     */
    sid?: string;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource.
     */
    uniqueName?: string;
    /**
     * The absolute URL of the Webhook resource.
     */
    url?: string;
    /**
     * The method used when calling the webhook's URL.
     */
    webhookMethod?: string;
    /**
     * The URL associated with this Webhook.
     */
    webhookUrl?: string;
}
