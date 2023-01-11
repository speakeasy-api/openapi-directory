package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateNetworkFloorPlanRequestBodyTopLeftCorner
 * The longitude and latitude of the top left corner of your floor plan.
**/
public class CreateNetworkFloorPlanRequestBodyTopLeftCorner {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lat")
    public Float lat;
    public CreateNetworkFloorPlanRequestBodyTopLeftCorner withLat(Float lat) {
        this.lat = lat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lng")
    public Float lng;
    public CreateNetworkFloorPlanRequestBodyTopLeftCorner withLng(Float lng) {
        this.lng = lng;
        return this;
    }
}