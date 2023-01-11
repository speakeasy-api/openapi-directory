package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListStepAccessibilityClustersResponse
 * Response message for AccessibilityService.ListStepAccessibilityClusters.
**/
public class ListStepAccessibilityClustersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusters")
    public SuggestionClusterProto[] clusters;
    public ListStepAccessibilityClustersResponse withClusters(SuggestionClusterProto[] clusters) {
        this.clusters = clusters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListStepAccessibilityClustersResponse withName(String name) {
        this.name = name;
        return this;
    }
}