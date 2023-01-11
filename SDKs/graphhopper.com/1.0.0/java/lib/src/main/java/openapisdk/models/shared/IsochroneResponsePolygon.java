package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IsochroneResponsePolygon
 * A found path
**/
public class IsochroneResponsePolygon {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geometry")
    public Polygon geometry;
    public IsochroneResponsePolygon withGeometry(Polygon geometry) {
        this.geometry = geometry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public IsochroneResponsePolygonProperties properties;
    public IsochroneResponsePolygon withProperties(IsochroneResponsePolygonProperties properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public IsochroneResponsePolygon withType(String type) {
        this.type = type;
        return this;
    }
}