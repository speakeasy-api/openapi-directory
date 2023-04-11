import { SpeakeasyBase } from "../../../internal/utils";
import { VerificationAttemptEnumChannelsEnum } from "./verificationattemptenumchannelsenum";
import { VerificationAttemptEnumConversionStatusEnum } from "./verificationattemptenumconversionstatusenum";
/**
 * OK
 */
export declare class VerifyV2VerificationAttempt extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Verification resource.
     */
    accountSid?: string;
    channel?: VerificationAttemptEnumChannelsEnum;
    /**
     * An object containing the channel specific information for an attempt.
     */
    channelData?: any;
    conversionStatus?: VerificationAttemptEnumConversionStatusEnum;
    /**
     * The date that this Attempt was created, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date that this Attempt was updated, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * An object containing the charge for this verification attempt related to the channel costs and the currency used. The costs related to the succeeded verifications are not included. May not be immediately available. More information on pricing is available [here](https://www.twilio.com/verify/pricing).
     */
    price?: any;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) used to generate the attempt.
     */
    serviceSid?: string;
    /**
     * The SID that uniquely identifies the verification attempt resource.
     */
    sid?: string;
    url?: string;
    /**
     * The SID of the [Verification](https://www.twilio.com/docs/verify/api/verification) that generated the attempt.
     */
    verificationSid?: string;
}
