import { SpeakeasyBase } from "../../../internal/utils";
import { VerificationCheckEnumChannelEnum } from "./verificationcheckenumchannelenum";
/**
 * Created
 */
export declare class VerifyV2ServiceVerificationCheck extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the VerificationCheck resource.
     */
    accountSid?: string;
    /**
     * The amount of the associated PSD2 compliant transaction. Requires the PSD2 Service flag enabled.
     */
    amount?: string;
    channel?: VerificationCheckEnumChannelEnum;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the Verification Check resource was created.
     */
    dateCreated?: Date;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the Verification Check resource was last updated.
     */
    dateUpdated?: Date;
    /**
     * The payee of the associated PSD2 compliant transaction. Requires the PSD2 Service flag enabled.
     */
    payee?: string;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is associated with.
     */
    serviceSid?: string;
    /**
     * The unique string that we created to identify the VerificationCheck resource.
     */
    sid?: string;
    /**
     * List of error codes as a result of attempting a verification using the `sna` channel. The error codes are chronologically ordered, from the first attempt to the latest attempt. This will be an empty list if no errors occured or `null` if the last channel used wasn't `sna`.
     */
    snaAttemptsErrorCodes?: any[];
    /**
     * The status of the verification. Can be: `pending`, `approved`, or `canceled`.
     */
    status?: string;
    /**
     * The phone number or [email](https://www.twilio.com/docs/verify/email) being verified. Phone numbers must be in [E.164 format](https://www.twilio.com/docs/glossary/what-e164).
     */
    to?: string;
    /**
     * Use "status" instead. Legacy property indicating whether the verification was successful.
     */
    valid?: boolean;
}
