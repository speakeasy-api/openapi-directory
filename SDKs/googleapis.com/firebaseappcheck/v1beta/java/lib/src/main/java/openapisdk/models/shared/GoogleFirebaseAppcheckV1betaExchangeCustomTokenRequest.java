package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1betaExchangeCustomTokenRequest
 * Request message for the ExchangeCustomToken method.
**/
public class GoogleFirebaseAppcheckV1betaExchangeCustomTokenRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customToken")
    public String customToken;
    public GoogleFirebaseAppcheckV1betaExchangeCustomTokenRequest withCustomToken(String customToken) {
        this.customToken = customToken;
        return this;
    }
}