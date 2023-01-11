package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Offset
 * Offsets the position of an asset horizontally or vertically by a relative distance.
**/
public class Offset {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("x")
    public Float x;
    public Offset withX(Float x) {
        this.x = x;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("y")
    public Float y;
    public Offset withY(Float y) {
        this.y = y;
        return this;
    }
}