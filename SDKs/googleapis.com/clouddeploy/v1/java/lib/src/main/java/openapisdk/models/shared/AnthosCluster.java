package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AnthosCluster
 * Information specifying an Anthos Cluster.
**/
public class AnthosCluster {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("membership")
    public String membership;
    public AnthosCluster withMembership(String membership) {
        this.membership = membership;
        return this;
    }
}