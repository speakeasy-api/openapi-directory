package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SnappedWaypoint
 * Access point to the (road)network. It is only available if `return_snapped_waypoints` is true (be default it is false).
**/
public class SnappedWaypoint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lat")
    public Double lat;
    public SnappedWaypoint withLat(Double lat) {
        this.lat = lat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lon")
    public Double lon;
    public SnappedWaypoint withLon(Double lon) {
        this.lon = lon;
        return this;
    }
}