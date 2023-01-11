package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest
 * Request message for the ExchangeCustomToken method.
**/
public class GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customToken")
    public String customToken;
    public GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest withCustomToken(String customToken) {
        this.customToken = customToken;
        return this;
    }
}