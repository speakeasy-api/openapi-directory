package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1betaExchangeSafetyNetTokenRequest
 * Request message for the ExchangeSafetyNetToken method.
**/
public class GoogleFirebaseAppcheckV1betaExchangeSafetyNetTokenRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("safetyNetToken")
    public String safetyNetToken;
    public GoogleFirebaseAppcheckV1betaExchangeSafetyNetTokenRequest withSafetyNetToken(String safetyNetToken) {
        this.safetyNetToken = safetyNetToken;
        return this;
    }
}