import { SpeakeasyBase } from "../../../internal/utils";
import { VerificationEnumChannelEnum } from "./verificationenumchannelenum";
/**
 * Created
 */
export declare class VerifyV2ServiceVerification extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Verification resource.
     */
    accountSid?: string;
    /**
     * The amount of the associated PSD2 compliant transaction. Requires the PSD2 Service flag enabled.
     */
    amount?: string;
    channel?: VerificationEnumChannelEnum;
    /**
     * The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: Date;
    /**
     * Information about the phone number being verified.
     */
    lookup?: any;
    /**
     * The payee of the associated PSD2 compliant transaction. Requires the PSD2 Service flag enabled.
     */
    payee?: string;
    /**
     * An array of verification attempt objects containing the channel attempted and the channel-specific transaction SID.
     */
    sendCodeAttempts?: any[];
    /**
     * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is associated with.
     */
    serviceSid?: string;
    /**
     * The unique string that we created to identify the Verification resource.
     */
    sid?: string;
    /**
     * The set of fields used for a silent network auth (`sna`) verification. Contains a single field with the URL to be invoked to verify the phone number.
     */
    sna?: any;
    /**
     * The status of the verification. One of: `pending`, `approved`, or `canceled`
     */
    status?: string;
    /**
     * The phone number or [email](https://www.twilio.com/docs/verify/email) being verified. Phone numbers must be in [E.164 format](https://www.twilio.com/docs/glossary/what-e164).
     */
    to?: string;
    /**
     * The absolute URL of the Verification resource.
     */
    url?: string;
    /**
     * Use "status" instead. Legacy property indicating whether the verification was successful.
     */
    valid?: boolean;
}
