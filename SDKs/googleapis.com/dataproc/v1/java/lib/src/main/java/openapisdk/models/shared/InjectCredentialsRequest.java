package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InjectCredentialsRequest
 * A request to inject credentials into a cluster.
**/
public class InjectCredentialsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterUuid")
    public String clusterUuid;
    public InjectCredentialsRequest withClusterUuid(String clusterUuid) {
        this.clusterUuid = clusterUuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credentialsCiphertext")
    public String credentialsCiphertext;
    public InjectCredentialsRequest withCredentialsCiphertext(String credentialsCiphertext) {
        this.credentialsCiphertext = credentialsCiphertext;
        return this;
    }
}