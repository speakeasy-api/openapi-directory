package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GkeCluster
 * GkeCluster contains information specific to GKE clusters.
**/
public class GkeCluster {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterMissing")
    public Boolean clusterMissing;
    public GkeCluster withClusterMissing(Boolean clusterMissing) {
        this.clusterMissing = clusterMissing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceLink")
    public String resourceLink;
    public GkeCluster withResourceLink(String resourceLink) {
        this.resourceLink = resourceLink;
        return this;
    }
}