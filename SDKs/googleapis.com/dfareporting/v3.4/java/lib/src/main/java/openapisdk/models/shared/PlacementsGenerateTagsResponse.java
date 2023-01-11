package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlacementsGenerateTagsResponse
 * Placement GenerateTags Response
**/
public class PlacementsGenerateTagsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PlacementsGenerateTagsResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placementTags")
    public PlacementTag[] placementTags;
    public PlacementsGenerateTagsResponse withPlacementTags(PlacementTag[] placementTags) {
        this.placementTags = placementTags;
        return this;
    }
}