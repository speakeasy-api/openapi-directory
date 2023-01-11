package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Secret
 * Secret provides a reference to entries in Secret Manager.
**/
public class Secret {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secretVersion")
    public String secretVersion;
    public Secret withSecretVersion(String secretVersion) {
        this.secretVersion = secretVersion;
        return this;
    }
}