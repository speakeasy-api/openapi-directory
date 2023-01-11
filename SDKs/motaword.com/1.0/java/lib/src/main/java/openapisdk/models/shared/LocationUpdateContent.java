package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LocationUpdateContent {
    @JsonProperty("lat")
    public Float lat;
    public LocationUpdateContent withLat(Float lat) {
        this.lat = lat;
        return this;
    }
    @JsonProperty("lon")
    public Float lon;
    public LocationUpdateContent withLon(Float lon) {
        this.lon = lon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public Long timestamp;
    public LocationUpdateContent withTimestamp(Long timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}