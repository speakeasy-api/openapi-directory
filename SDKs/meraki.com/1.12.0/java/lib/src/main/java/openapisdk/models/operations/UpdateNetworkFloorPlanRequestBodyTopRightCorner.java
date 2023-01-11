package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkFloorPlanRequestBodyTopRightCorner
 * The longitude and latitude of the top right corner of your floor plan.
**/
public class UpdateNetworkFloorPlanRequestBodyTopRightCorner {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lat")
    public Float lat;
    public UpdateNetworkFloorPlanRequestBodyTopRightCorner withLat(Float lat) {
        this.lat = lat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lng")
    public Float lng;
    public UpdateNetworkFloorPlanRequestBodyTopRightCorner withLng(Float lng) {
        this.lng = lng;
        return this;
    }
}