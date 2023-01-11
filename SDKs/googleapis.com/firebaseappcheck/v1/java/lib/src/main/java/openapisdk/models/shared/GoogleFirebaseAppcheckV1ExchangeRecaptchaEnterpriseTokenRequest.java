package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest
 * Request message for the ExchangeRecaptchaEnterpriseToken method.
**/
public class GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recaptchaEnterpriseToken")
    public String recaptchaEnterpriseToken;
    public GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest withRecaptchaEnterpriseToken(String recaptchaEnterpriseToken) {
        this.recaptchaEnterpriseToken = recaptchaEnterpriseToken;
        return this;
    }
}