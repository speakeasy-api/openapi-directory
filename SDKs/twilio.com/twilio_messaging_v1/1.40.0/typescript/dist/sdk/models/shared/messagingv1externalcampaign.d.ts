import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class MessagingV1ExternalCampaign extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that the Campaign belongs to.
     */
    accountSid?: string;
    /**
     * ID of the preregistered campaign.
     */
    campaignId?: string;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/services/api) that the resource is associated with.
     */
    messagingServiceSid?: string;
    /**
     * The unique string that identifies a US A2P Compliance resource `QE2c6890da8086d771620e9b13fadeba0b`.
     */
    sid?: string;
}
