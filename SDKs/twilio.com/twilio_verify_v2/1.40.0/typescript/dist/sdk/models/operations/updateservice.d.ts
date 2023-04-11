import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateServiceServerList: readonly ["https://verify.twilio.com"];
export declare class UpdateServiceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateServiceUpdateServiceRequest extends SpeakeasyBase {
    /**
     * The length of the verification code to generate. Must be an integer value between 4 and 10, inclusive.
     */
    codeLength?: number;
    /**
     * Whether to allow sending verifications with a custom code instead of a randomly generated one. Not available for all customers.
     */
    customCodeEnabled?: boolean;
    /**
     * The default message [template](https://www.twilio.com/docs/verify/api/templates). Will be used for all SMS verifications unless explicitly overriden. SMS channel only.
     */
    defaultTemplateSid?: string;
    /**
     * Whether to add a privacy warning at the end of an SMS. **Disabled by default and applies only for SMS.**
     */
    doNotShareWarningEnabled?: boolean;
    /**
     * Whether to ask the user to press a number before delivering the verify code in a phone call.
     */
    dtmfInputRequired?: boolean;
    /**
     * A descriptive string that you create to describe the verification service. It can be up to 30 characters long. **This value should not contain PII.**
     */
    friendlyName?: string;
    /**
     * Whether to perform a lookup with each verification started and return info about the phone number.
     */
    lookupEnabled?: boolean;
    /**
     * Whether to pass PSD2 transaction parameters when starting a verification.
     */
    psd2Enabled?: boolean;
    /**
     * Optional configuration for the Push factors. Set the APN Credential for this service. This will allow to send push notifications to iOS devices. See [Credential Resource](https://www.twilio.com/docs/notify/api/credential-resource)
     */
    pushApnCredentialSid?: string;
    /**
     * Optional configuration for the Push factors. Set the FCM Credential for this service. This will allow to send push notifications to Android devices. See [Credential Resource](https://www.twilio.com/docs/notify/api/credential-resource)
     */
    pushFcmCredentialSid?: string;
    /**
     * Optional configuration for the Push factors. If true, include the date in the Challenge's response. Otherwise, the date is omitted from the response. See [Challenge](https://www.twilio.com/docs/verify/api/challenge) resource’s details parameter for more info. Default: false. **Deprecated** do not use this parameter.
     */
    pushIncludeDate?: boolean;
    /**
     * Whether to skip sending SMS verifications to landlines. Requires `lookup_enabled`.
     */
    skipSmsToLandlines?: boolean;
    /**
     * Optional configuration for the TOTP factors. Number of digits for generated TOTP codes. Must be between 3 and 8, inclusive. Defaults to 6
     */
    totpCodeLength?: number;
    /**
     * Optional configuration for the TOTP factors. Set TOTP Issuer for this service. This will allow to configure the issuer of the TOTP URI.
     */
    totpIssuer?: string;
    /**
     * Optional configuration for the TOTP factors. The number of time-steps, past and future, that are valid for validation of TOTP codes. Must be between 0 and 2, inclusive. Defaults to 1
     */
    totpSkew?: number;
    /**
     * Optional configuration for the TOTP factors. Defines how often, in seconds, are TOTP codes generated. i.e, a new TOTP code is generated every time_step seconds. Must be between 20 and 60 seconds, inclusive. Defaults to 30 seconds
     */
    totpTimeStep?: number;
    /**
     * The name of an alternative text-to-speech service to use in phone calls. Applies only to TTS languages.
     */
    ttsName?: string;
}
export declare class UpdateServiceRequest extends SpeakeasyBase {
    requestBody?: UpdateServiceUpdateServiceRequest;
    /**
     * The Twilio-provided string that uniquely identifies the Service resource to update.
     */
    sid: string;
}
export declare class UpdateServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    verifyV2Service?: shared.VerifyV2Service;
}
