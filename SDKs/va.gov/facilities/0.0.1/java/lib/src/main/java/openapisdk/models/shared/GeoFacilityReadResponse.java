package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GeoFacilityReadResponse {
    @JsonProperty("geometry")
    public Geometry geometry;
    public GeoFacilityReadResponse withGeometry(Geometry geometry) {
        this.geometry = geometry;
        return this;
    }
    @JsonProperty("properties")
    public Properties properties;
    public GeoFacilityReadResponse withProperties(Properties properties) {
        this.properties = properties;
        return this;
    }
    @JsonProperty("type")
    public GeoFacilityReadResponseTypeEnum type;
    public GeoFacilityReadResponse withType(GeoFacilityReadResponseTypeEnum type) {
        this.type = type;
        return this;
    }
}