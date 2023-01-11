package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Threshold
 * Defines a threshold for categorizing time series values.
**/
public class Threshold {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public ThresholdColorEnum color;
    public Threshold withColor(ThresholdColorEnum color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direction")
    public ThresholdDirectionEnum direction;
    public Threshold withDirection(ThresholdDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public Threshold withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetAxis")
    public ThresholdTargetAxisEnum targetAxis;
    public Threshold withTargetAxis(ThresholdTargetAxisEnum targetAxis) {
        this.targetAxis = targetAxis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Double value;
    public Threshold withValue(Double value) {
        this.value = value;
        return this;
    }
}