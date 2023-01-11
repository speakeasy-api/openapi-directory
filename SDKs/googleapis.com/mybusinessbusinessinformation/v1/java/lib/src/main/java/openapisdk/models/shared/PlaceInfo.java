package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlaceInfo
 * Defines an area that's represented by a place ID.
**/
public class PlaceInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placeId")
    public String placeId;
    public PlaceInfo withPlaceId(String placeId) {
        this.placeId = placeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placeName")
    public String placeName;
    public PlaceInfo withPlaceName(String placeName) {
        this.placeName = placeName;
        return this;
    }
}