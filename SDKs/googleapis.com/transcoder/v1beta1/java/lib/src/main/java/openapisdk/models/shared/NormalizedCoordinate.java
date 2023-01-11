package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NormalizedCoordinate
 * 2D normalized coordinates. Default: `{0.0, 0.0}`
**/
public class NormalizedCoordinate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("x")
    public Double x;
    public NormalizedCoordinate withX(Double x) {
        this.x = x;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("y")
    public Double y;
    public NormalizedCoordinate withY(Double y) {
        this.y = y;
        return this;
    }
}