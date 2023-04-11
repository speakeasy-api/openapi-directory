import { SpeakeasyBase } from "../../../internal/utils";
export declare class VerifyV2VerificationTemplate extends SpeakeasyBase {
    /**
     * The unique SID identifier of the Account.
     */
    accountSid?: string;
    /**
     * A list of channels that support the Template. Can include: sms, voice
     */
    channels?: string[];
    /**
     * A descriptive string that you create to describe a Template.
     */
    friendlyName?: string;
    /**
     * A 34 character string that uniquely identifies a Verification Template.
     */
    sid?: string;
    /**
     * An object that contains the different translations of the template. Every translation is identified by the language short name and contains its respective information as the approval status, text and created/modified date.
     */
    translations?: any;
}
