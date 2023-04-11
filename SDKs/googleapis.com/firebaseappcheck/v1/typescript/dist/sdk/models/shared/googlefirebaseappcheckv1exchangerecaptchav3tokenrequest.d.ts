import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for the ExchangeRecaptchaV3Token method.
 */
export declare class GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest extends SpeakeasyBase {
    /**
     * Required. The reCAPTCHA token as returned by the [reCAPTCHA v3 JavaScript API](https://developers.google.com/recaptcha/docs/v3).
     */
    recaptchaV3Token?: string;
}
