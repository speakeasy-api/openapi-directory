import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class VerifyV2Service extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Service resource.
     */
    accountSid?: string;
    /**
     * The length of the verification code to generate.
     */
    codeLength?: number;
    /**
     * Whether to allow sending verifications with a custom code instead of a randomly generated one. Not available for all customers.
     */
    customCodeEnabled?: boolean;
    /**
     * The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: Date;
    defaultTemplateSid?: string;
    /**
     * Whether to add a security warning at the end of an SMS verification body. Disabled by default and applies only to SMS. Example SMS body: `Your AppName verification code is: 1234. Don’t share this code with anyone; our employees will never ask for the code`
     */
    doNotShareWarningEnabled?: boolean;
    /**
     * Whether to ask the user to press a number before delivering the verify code in a phone call.
     */
    dtmfInputRequired?: boolean;
    /**
     * The string that you assigned to describe the verification service. **This value should not contain PII.**
     */
    friendlyName?: string;
    /**
     * The URLs of related resources.
     */
    links?: Record<string, any>;
    /**
     * Whether to perform a lookup with each verification started and return info about the phone number.
     */
    lookupEnabled?: boolean;
    /**
     * Whether to pass PSD2 transaction parameters when starting a verification.
     */
    psd2Enabled?: boolean;
    /**
     * Configurations for the Push factors (channel) created under this Service.
     */
    push?: any;
    /**
     * The unique string that we created to identify the Service resource.
     */
    sid?: string;
    /**
     * Whether to skip sending SMS verifications to landlines. Requires `lookup_enabled`.
     */
    skipSmsToLandlines?: boolean;
    /**
     * Configurations for the TOTP factors (channel) created under this Service.
     */
    totp?: any;
    /**
     * The name of an alternative text-to-speech service to use in phone calls. Applies only to TTS languages.
     */
    ttsName?: string;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
}
