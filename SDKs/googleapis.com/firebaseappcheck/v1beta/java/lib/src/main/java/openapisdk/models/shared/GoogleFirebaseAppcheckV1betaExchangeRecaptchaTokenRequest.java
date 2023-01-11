package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest
 * Request message for the ExchangeRecaptchaToken method.
**/
public class GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recaptchaToken")
    public String recaptchaToken;
    public GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest withRecaptchaToken(String recaptchaToken) {
        this.recaptchaToken = recaptchaToken;
        return this;
    }
}