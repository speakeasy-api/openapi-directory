import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for the ExchangeRecaptchaEnterpriseToken method.
 */
export declare class GoogleFirebaseAppcheckV1betaExchangeRecaptchaEnterpriseTokenRequest extends SpeakeasyBase {
    /**
     * Required. The reCAPTCHA token as returned by the [reCAPTCHA Enterprise JavaScript API](https://cloud.google.com/recaptcha-enterprise/docs/instrument-web-pages).
     */
    recaptchaEnterpriseToken?: string;
}
