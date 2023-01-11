package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkFloorPlanRequestBodyBottomRightCorner
 * The longitude and latitude of the bottom right corner of your floor plan.
**/
public class UpdateNetworkFloorPlanRequestBodyBottomRightCorner {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lat")
    public Float lat;
    public UpdateNetworkFloorPlanRequestBodyBottomRightCorner withLat(Float lat) {
        this.lat = lat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lng")
    public Float lng;
    public UpdateNetworkFloorPlanRequestBodyBottomRightCorner withLng(Float lng) {
        this.lng = lng;
        return this;
    }
}