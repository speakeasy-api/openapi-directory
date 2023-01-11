package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkFloorPlanRequestBodyBottomLeftCorner
 * The longitude and latitude of the bottom left corner of your floor plan.
**/
public class UpdateNetworkFloorPlanRequestBodyBottomLeftCorner {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lat")
    public Float lat;
    public UpdateNetworkFloorPlanRequestBodyBottomLeftCorner withLat(Float lat) {
        this.lat = lat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lng")
    public Float lng;
    public UpdateNetworkFloorPlanRequestBodyBottomLeftCorner withLng(Float lng) {
        this.lng = lng;
        return this;
    }
}