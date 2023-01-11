package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PointStyle
 * The style of a point on the chart.
**/
public class PointStyle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shape")
    public PointStyleShapeEnum shape;
    public PointStyle withShape(PointStyleShapeEnum shape) {
        this.shape = shape;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Double size;
    public PointStyle withSize(Double size) {
        this.size = size;
        return this;
    }
}