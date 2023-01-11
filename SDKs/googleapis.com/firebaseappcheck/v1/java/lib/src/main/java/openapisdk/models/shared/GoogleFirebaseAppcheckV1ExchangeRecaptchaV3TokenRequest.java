package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest
 * Request message for the ExchangeRecaptchaV3Token method.
**/
public class GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recaptchaV3Token")
    public String recaptchaV3Token;
    public GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest withRecaptchaV3Token(String recaptchaV3Token) {
        this.recaptchaV3Token = recaptchaV3Token;
        return this;
    }
}