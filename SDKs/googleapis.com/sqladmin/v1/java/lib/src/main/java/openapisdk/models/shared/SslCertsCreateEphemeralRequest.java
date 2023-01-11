package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SslCertsCreateEphemeralRequest
 * SslCerts create ephemeral certificate request.
**/
public class SslCertsCreateEphemeralRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access_token")
    public String accessToken;
    public SslCertsCreateEphemeralRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public_key")
    public String publicKey;
    public SslCertsCreateEphemeralRequest withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
}