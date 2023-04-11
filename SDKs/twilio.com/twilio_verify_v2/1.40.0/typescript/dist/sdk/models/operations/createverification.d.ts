import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateVerificationServerList: readonly ["https://verify.twilio.com"];
export declare class CreateVerificationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateVerificationCreateVerificationRequest extends SpeakeasyBase {
    /**
     * The amount of the associated PSD2 compliant transaction. Requires the PSD2 Service flag enabled.
     */
    amount?: string;
    /**
     * Your [App Hash](https://developers.google.com/identity/sms-retriever/verify#computing_your_apps_hash_string) to be appended at the end of your verification SMS body. Applies only to SMS. Example SMS body: `<#> Your AppName verification code is: 1234 He42w354ol9`.
     */
    appHash?: string;
    /**
     * The verification method to use. One of: [`email`](https://www.twilio.com/docs/verify/email), `sms`, `whatsapp`, `call`, `sna` or `auto`.
     */
    channel: string;
    /**
     * [`email`](https://www.twilio.com/docs/verify/email) channel configuration in json format. The fields 'from' and 'from_name' are optional but if included the 'from' field must have a valid email address.
     */
    channelConfiguration?: any;
    /**
     * A pre-generated code to use for verification. The code can be between 4 and 10 characters, inclusive.
     */
    customCode?: string;
    /**
     * A custom user defined friendly name that overwrites the existing one in the verification message
     */
    customFriendlyName?: string;
    /**
     * The text of a custom message to use for the verification.
     */
    customMessage?: string;
    /**
     * Strongly encouraged if using the auto channel. The IP address of the client's device. If provided, it has to be a valid IPv4 or IPv6 address.
     */
    deviceIp?: string;
    /**
     * Locale will automatically resolve based on phone number country code for SMS, WhatsApp, and call channel verifications. It will fallback to English or the template’s default translation if the selected translation is not available. This parameter will override the automatic locale resolution. [See supported languages and more information here](https://www.twilio.com/docs/verify/supported-languages).
     */
    locale?: string;
    /**
     * The payee of the associated PSD2 compliant transaction. Requires the PSD2 Service flag enabled.
     */
    payee?: string;
    /**
     * The custom key-value pairs of Programmable Rate Limits. Keys correspond to `unique_name` fields defined when [creating your Rate Limit](https://www.twilio.com/docs/verify/api/service-rate-limits). Associated value pairs represent values in the request that you are rate limiting on. You may include multiple Rate Limit values in each request.
     */
    rateLimits?: any;
    /**
     * The digits to send after a phone call is answered, for example, to dial an extension. For more information, see the Programmable Voice documentation of [sendDigits](https://www.twilio.com/docs/voice/twiml/number#attributes-sendDigits).
     */
    sendDigits?: string;
    /**
     * A stringified JSON object in which the keys are the template's special variables and the values are the variables substitutions.
     */
    templateCustomSubstitutions?: string;
    /**
     * The message [template](https://www.twilio.com/docs/verify/api/templates). If provided, will override the default template for the Service. SMS and Voice channels only.
     */
    templateSid?: string;
    /**
     * The phone number or [email](https://www.twilio.com/docs/verify/email) to verify. Phone numbers must be in [E.164 format](https://www.twilio.com/docs/glossary/what-e164).
     */
    to: string;
}
export declare class CreateVerificationRequest extends SpeakeasyBase {
    requestBody?: CreateVerificationCreateVerificationRequest;
    /**
     * The SID of the verification [Service](https://www.twilio.com/docs/verify/api/service) to create the resource under.
     */
    serviceSid: string;
}
export declare class CreateVerificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    verifyV2ServiceVerification?: shared.VerifyV2ServiceVerification;
}
