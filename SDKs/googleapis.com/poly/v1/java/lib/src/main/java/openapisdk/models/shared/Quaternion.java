package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Quaternion
 * A [Quaternion](//en.wikipedia.org/wiki/Quaternion). Please note: if in the response you see "w: 1" and nothing else this is the default value of [0, 0, 0, 1] where x,y, and z are 0.
**/
public class Quaternion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("w")
    public Double w;
    public Quaternion withW(Double w) {
        this.w = w;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("x")
    public Double x;
    public Quaternion withX(Double x) {
        this.x = x;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("y")
    public Double y;
    public Quaternion withY(Double y) {
        this.y = y;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("z")
    public Double z;
    public Quaternion withZ(Double z) {
        this.z = z;
        return this;
    }
}