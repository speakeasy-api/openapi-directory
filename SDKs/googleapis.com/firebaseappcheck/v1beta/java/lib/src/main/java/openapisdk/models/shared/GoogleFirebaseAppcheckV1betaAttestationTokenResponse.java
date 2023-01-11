package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1betaAttestationTokenResponse
 * Encapsulates an *App Check token*, which are used to access Firebase services protected by App Check.
**/
public class GoogleFirebaseAppcheckV1betaAttestationTokenResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attestationToken")
    public String attestationToken;
    public GoogleFirebaseAppcheckV1betaAttestationTokenResponse withAttestationToken(String attestationToken) {
        this.attestationToken = attestationToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public String ttl;
    public GoogleFirebaseAppcheckV1betaAttestationTokenResponse withTtl(String ttl) {
        this.ttl = ttl;
        return this;
    }
}