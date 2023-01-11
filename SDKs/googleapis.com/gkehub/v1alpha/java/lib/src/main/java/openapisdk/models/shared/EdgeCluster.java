package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EdgeCluster
 * EdgeCluster contains information specific to Google Edge Clusters.
**/
public class EdgeCluster {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceLink")
    public String resourceLink;
    public EdgeCluster withResourceLink(String resourceLink) {
        this.resourceLink = resourceLink;
        return this;
    }
}