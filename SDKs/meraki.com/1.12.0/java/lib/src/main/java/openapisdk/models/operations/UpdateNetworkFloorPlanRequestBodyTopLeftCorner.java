package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkFloorPlanRequestBodyTopLeftCorner
 * The longitude and latitude of the top left corner of your floor plan.
**/
public class UpdateNetworkFloorPlanRequestBodyTopLeftCorner {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lat")
    public Float lat;
    public UpdateNetworkFloorPlanRequestBodyTopLeftCorner withLat(Float lat) {
        this.lat = lat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lng")
    public Float lng;
    public UpdateNetworkFloorPlanRequestBodyTopLeftCorner withLng(Float lng) {
        this.lng = lng;
        return this;
    }
}