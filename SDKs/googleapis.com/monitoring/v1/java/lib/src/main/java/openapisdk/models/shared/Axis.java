package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Axis
 * A chart axis.
**/
public class Axis {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public Axis withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scale")
    public AxisScaleEnum scale;
    public Axis withScale(AxisScaleEnum scale) {
        this.scale = scale;
        return this;
    }
}