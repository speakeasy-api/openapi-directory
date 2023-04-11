import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class VerifyV2ServiceMessagingConfiguration extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Service resource.
     */
    accountSid?: string;
    /**
     * The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the country this configuration will be applied to. If this is a global configuration, Country will take the value `all`.
     */
    country?: string;
    /**
     * The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: Date;
    /**
     * The SID of the [Messaging Service](https://www.twilio.com/docs/sms/services/api) to be used to send SMS to the country of this configuration.
     */
    messagingServiceSid?: string;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) that the resource is associated with.
     */
    serviceSid?: string;
    /**
     * The URL of this resource.
     */
    url?: string;
}
