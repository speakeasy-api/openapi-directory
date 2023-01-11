package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DecodeIntegrityTokenRequest
 * Request to decode the integrity token.
**/
public class DecodeIntegrityTokenRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrityToken")
    public String integrityToken;
    public DecodeIntegrityTokenRequest withIntegrityToken(String integrityToken) {
        this.integrityToken = integrityToken;
        return this;
    }
}