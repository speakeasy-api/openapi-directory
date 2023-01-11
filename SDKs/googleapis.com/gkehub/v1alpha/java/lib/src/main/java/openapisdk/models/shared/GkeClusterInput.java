package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GkeClusterInput
 * GkeCluster contains information specific to GKE clusters.
**/
public class GkeClusterInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceLink")
    public String resourceLink;
    public GkeClusterInput withResourceLink(String resourceLink) {
        this.resourceLink = resourceLink;
        return this;
    }
}