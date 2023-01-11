package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1betaAppCheckToken
 * Encapsulates an *App Check token*, which are used to access Firebase services protected by App Check.
**/
public class GoogleFirebaseAppcheckV1betaAppCheckToken {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attestationToken")
    public String attestationToken;
    public GoogleFirebaseAppcheckV1betaAppCheckToken withAttestationToken(String attestationToken) {
        this.attestationToken = attestationToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public String token;
    public GoogleFirebaseAppcheckV1betaAppCheckToken withToken(String token) {
        this.token = token;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public String ttl;
    public GoogleFirebaseAppcheckV1betaAppCheckToken withTtl(String ttl) {
        this.ttl = ttl;
        return this;
    }
}