package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateNetworkFloorPlanRequestBodyTopRightCorner
 * The longitude and latitude of the top right corner of your floor plan.
**/
public class CreateNetworkFloorPlanRequestBodyTopRightCorner {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lat")
    public Float lat;
    public CreateNetworkFloorPlanRequestBodyTopRightCorner withLat(Float lat) {
        this.lat = lat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lng")
    public Float lng;
    public CreateNetworkFloorPlanRequestBodyTopRightCorner withLng(Float lng) {
        this.lng = lng;
        return this;
    }
}