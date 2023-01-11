package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest
 * Request message for the ExchangeSafetyNetToken method.
**/
public class GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("safetyNetToken")
    public String safetyNetToken;
    public GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest withSafetyNetToken(String safetyNetToken) {
        this.safetyNetToken = safetyNetToken;
        return this;
    }
}