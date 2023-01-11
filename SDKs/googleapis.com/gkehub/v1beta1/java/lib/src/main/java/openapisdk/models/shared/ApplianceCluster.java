package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApplianceCluster
 * ApplianceCluster contains information specific to GDC Edge Appliance Clusters.
**/
public class ApplianceCluster {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceLink")
    public String resourceLink;
    public ApplianceCluster withResourceLink(String resourceLink) {
        this.resourceLink = resourceLink;
        return this;
    }
}