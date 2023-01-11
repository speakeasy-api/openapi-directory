package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlacementTag
 * Placement Tag
**/
public class PlacementTag {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placementId")
    public String placementId;
    public PlacementTag withPlacementId(String placementId) {
        this.placementId = placementId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagDatas")
    public TagData[] tagDatas;
    public PlacementTag withTagDatas(TagData[] tagDatas) {
        this.tagDatas = tagDatas;
        return this;
    }
}