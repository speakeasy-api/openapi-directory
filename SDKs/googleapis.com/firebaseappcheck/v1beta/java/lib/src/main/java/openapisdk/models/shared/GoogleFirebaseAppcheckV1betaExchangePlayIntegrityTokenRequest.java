package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1betaExchangePlayIntegrityTokenRequest
 * Request message for the ExchangePlayIntegrityToken method.
**/
public class GoogleFirebaseAppcheckV1betaExchangePlayIntegrityTokenRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playIntegrityToken")
    public String playIntegrityToken;
    public GoogleFirebaseAppcheckV1betaExchangePlayIntegrityTokenRequest withPlayIntegrityToken(String playIntegrityToken) {
        this.playIntegrityToken = playIntegrityToken;
        return this;
    }
}