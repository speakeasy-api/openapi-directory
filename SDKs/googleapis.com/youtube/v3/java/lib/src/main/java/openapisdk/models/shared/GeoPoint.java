package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GeoPoint
 * Geographical coordinates of a point, in WGS84.
**/
public class GeoPoint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("altitude")
    public Double altitude;
    public GeoPoint withAltitude(Double altitude) {
        this.altitude = altitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latitude")
    public Double latitude;
    public GeoPoint withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longitude")
    public Double longitude;
    public GeoPoint withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
}