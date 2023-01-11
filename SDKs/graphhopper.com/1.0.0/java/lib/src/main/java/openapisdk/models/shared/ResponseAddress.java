package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResponseAddress
 * Address of activity
**/
public class ResponseAddress {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lat")
    public Double lat;
    public ResponseAddress withLat(Double lat) {
        this.lat = lat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location_id")
    public String locationId;
    public ResponseAddress withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lon")
    public Double lon;
    public ResponseAddress withLon(Double lon) {
        this.lon = lon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ResponseAddress withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snapped_waypoint")
    public SnappedWaypoint snappedWaypoint;
    public ResponseAddress withSnappedWaypoint(SnappedWaypoint snappedWaypoint) {
        this.snappedWaypoint = snappedWaypoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street_hint")
    public String streetHint;
    public ResponseAddress withStreetHint(String streetHint) {
        this.streetHint = streetHint;
        return this;
    }
}