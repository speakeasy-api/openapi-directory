import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for the ExchangeRecaptchaToken method.
 */
export declare class GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest extends SpeakeasyBase {
    /**
     * Required. The reCAPTCHA token as returned by the [reCAPTCHA v3 JavaScript API](https://developers.google.com/recaptcha/docs/v3).
     */
    recaptchaToken?: string;
}
