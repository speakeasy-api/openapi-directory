package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Secret
 * A securely stored value.
**/
public class Secret {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudSecret")
    public String cloudSecret;
    public Secret withCloudSecret(String cloudSecret) {
        this.cloudSecret = cloudSecret;
        return this;
    }
}