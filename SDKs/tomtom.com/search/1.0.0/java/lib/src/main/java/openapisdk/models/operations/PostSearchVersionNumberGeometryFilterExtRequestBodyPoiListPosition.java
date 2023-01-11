package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lat")
    public Float lat;
    public PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition withLat(Float lat) {
        this.lat = lat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lon")
    public Float lon;
    public PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition withLon(Float lon) {
        this.lon = lon;
        return this;
    }
}