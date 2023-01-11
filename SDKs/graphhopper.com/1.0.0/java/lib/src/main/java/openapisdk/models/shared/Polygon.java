package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Polygon {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coordinates")
    public Double[][][] coordinates;
    public Polygon withCoordinates(Double[][][] coordinates) {
        this.coordinates = coordinates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Polygon withType(String type) {
        this.type = type;
        return this;
    }
}