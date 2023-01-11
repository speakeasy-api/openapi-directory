package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MultiCloudCluster
 * MultiCloudCluster contains information specific to GKE Multi-Cloud clusters.
**/
public class MultiCloudCluster {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterMissing")
    public Boolean clusterMissing;
    public MultiCloudCluster withClusterMissing(Boolean clusterMissing) {
        this.clusterMissing = clusterMissing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceLink")
    public String resourceLink;
    public MultiCloudCluster withResourceLink(String resourceLink) {
        this.resourceLink = resourceLink;
        return this;
    }
}