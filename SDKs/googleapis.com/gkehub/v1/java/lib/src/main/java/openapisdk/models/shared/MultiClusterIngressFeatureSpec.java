package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MultiClusterIngressFeatureSpec
 * **Multi-cluster Ingress**: The configuration for the MultiClusterIngress feature.
**/
public class MultiClusterIngressFeatureSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configMembership")
    public String configMembership;
    public MultiClusterIngressFeatureSpec withConfigMembership(String configMembership) {
        this.configMembership = configMembership;
        return this;
    }
}