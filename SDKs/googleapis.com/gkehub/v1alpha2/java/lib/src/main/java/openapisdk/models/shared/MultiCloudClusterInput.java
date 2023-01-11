package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MultiCloudClusterInput
 * MultiCloudCluster contains information specific to GKE Multi-Cloud clusters.
**/
public class MultiCloudClusterInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceLink")
    public String resourceLink;
    public MultiCloudClusterInput withResourceLink(String resourceLink) {
        this.resourceLink = resourceLink;
        return this;
    }
}