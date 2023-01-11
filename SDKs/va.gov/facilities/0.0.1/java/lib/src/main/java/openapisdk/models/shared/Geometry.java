package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Geometry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coordinates")
    public Double[] coordinates;
    public Geometry withCoordinates(Double[] coordinates) {
        this.coordinates = coordinates;
        return this;
    }
    @JsonProperty("type")
    public GeometryTypeEnum type;
    public Geometry withType(GeometryTypeEnum type) {
        this.type = type;
        return this;
    }
}