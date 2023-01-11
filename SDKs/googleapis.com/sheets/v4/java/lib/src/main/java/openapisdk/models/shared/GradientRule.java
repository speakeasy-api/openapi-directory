package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GradientRule
 * A rule that applies a gradient color scale format, based on the interpolation points listed. The format of a cell will vary based on its contents as compared to the values of the interpolation points.
**/
public class GradientRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxpoint")
    public InterpolationPoint maxpoint;
    public GradientRule withMaxpoint(InterpolationPoint maxpoint) {
        this.maxpoint = maxpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("midpoint")
    public InterpolationPoint midpoint;
    public GradientRule withMidpoint(InterpolationPoint midpoint) {
        this.midpoint = midpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minpoint")
    public InterpolationPoint minpoint;
    public GradientRule withMinpoint(InterpolationPoint minpoint) {
        this.minpoint = minpoint;
        return this;
    }
}