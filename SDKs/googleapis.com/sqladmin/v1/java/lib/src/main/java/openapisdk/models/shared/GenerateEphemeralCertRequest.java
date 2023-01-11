package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GenerateEphemeralCertRequest
 * Ephemeral certificate creation request.
**/
public class GenerateEphemeralCertRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access_token")
    public String accessToken;
    public GenerateEphemeralCertRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public_key")
    public String publicKey;
    public GenerateEphemeralCertRequest withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readTime")
    public String readTime;
    public GenerateEphemeralCertRequest withReadTime(String readTime) {
        this.readTime = readTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validDuration")
    public String validDuration;
    public GenerateEphemeralCertRequest withValidDuration(String validDuration) {
        this.validDuration = validDuration;
        return this;
    }
}