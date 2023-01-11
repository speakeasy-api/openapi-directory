package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Coordinate
 * Container for coordinates.
**/
public class Coordinate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Latitude")
    public Float latitude;
    public Coordinate withLatitude(Float latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Longitude")
    public Float longitude;
    public Coordinate withLongitude(Float longitude) {
        this.longitude = longitude;
        return this;
    }
}