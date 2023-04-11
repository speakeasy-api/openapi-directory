import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response of getting recaptcha param.
 */
export declare class GetRecaptchaParamResponse extends SpeakeasyBase {
    /**
     * The fixed string "identitytoolkit#GetRecaptchaParamResponse".
     */
    kind?: string;
    /**
     * Site key registered at recaptcha.
     */
    recaptchaSiteKey?: string;
    /**
     * The stoken field for the recaptcha widget, used to request captcha challenge.
     */
    recaptchaStoken?: string;
}
