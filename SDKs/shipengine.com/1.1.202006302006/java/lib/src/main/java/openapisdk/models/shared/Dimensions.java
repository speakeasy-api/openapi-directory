package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Dimensions
 * The dimensions of a package
**/
public class Dimensions {
    @JsonProperty("height")
    public Double height;
    public Dimensions withHeight(Double height) {
        this.height = height;
        return this;
    }
    @JsonProperty("length")
    public Double length;
    public Dimensions withLength(Double length) {
        this.length = length;
        return this;
    }
    @JsonProperty("unit")
    public java.util.Map<String, Object> unit;
    public Dimensions withUnit(java.util.Map<String, Object> unit) {
        this.unit = unit;
        return this;
    }
    @JsonProperty("width")
    public Double width;
    public Dimensions withWidth(Double width) {
        this.width = width;
        return this;
    }
}