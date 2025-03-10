package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateNetworkFloorPlanRequestBodyBottomLeftCorner
 * The longitude and latitude of the bottom left corner of your floor plan.
**/
public class CreateNetworkFloorPlanRequestBodyBottomLeftCorner {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lat")
    public Float lat;
    public CreateNetworkFloorPlanRequestBodyBottomLeftCorner withLat(Float lat) {
        this.lat = lat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lng")
    public Float lng;
    public CreateNetworkFloorPlanRequestBodyBottomLeftCorner withLng(Float lng) {
        this.lng = lng;
        return this;
    }
}