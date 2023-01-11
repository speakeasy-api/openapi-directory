package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1betaExchangeDebugTokenRequest
 * Request message for the ExchangeDebugToken method.
**/
public class GoogleFirebaseAppcheckV1betaExchangeDebugTokenRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debugToken")
    public String debugToken;
    public GoogleFirebaseAppcheckV1betaExchangeDebugTokenRequest withDebugToken(String debugToken) {
        this.debugToken = debugToken;
        return this;
    }
}