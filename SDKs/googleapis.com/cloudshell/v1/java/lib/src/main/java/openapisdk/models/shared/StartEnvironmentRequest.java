package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartEnvironmentRequest
 * Request message for StartEnvironment.
**/
public class StartEnvironmentRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessToken")
    public String accessToken;
    public StartEnvironmentRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicKeys")
    public String[] publicKeys;
    public StartEnvironmentRequest withPublicKeys(String[] publicKeys) {
        this.publicKeys = publicKeys;
        return this;
    }
}