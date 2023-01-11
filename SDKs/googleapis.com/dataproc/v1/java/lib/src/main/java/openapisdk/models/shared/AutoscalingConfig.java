package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AutoscalingConfig
 * Autoscaling Policy config associated with the cluster.
**/
public class AutoscalingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyUri")
    public String policyUri;
    public AutoscalingConfig withPolicyUri(String policyUri) {
        this.policyUri = policyUri;
        return this;
    }
}