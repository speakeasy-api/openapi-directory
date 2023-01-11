package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IsochroneResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyrights")
    public String[] copyrights;
    public IsochroneResponse withCopyrights(String[] copyrights) {
        this.copyrights = copyrights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("polygons")
    public IsochroneResponsePolygon[] polygons;
    public IsochroneResponse withPolygons(IsochroneResponsePolygon[] polygons) {
        this.polygons = polygons;
        return this;
    }
}