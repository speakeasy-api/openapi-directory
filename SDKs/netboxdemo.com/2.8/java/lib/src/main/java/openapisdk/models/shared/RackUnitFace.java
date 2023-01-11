package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RackUnitFace {
    @JsonProperty("label")
    public RackUnitFaceLabelEnum label;
    public RackUnitFace withLabel(RackUnitFaceLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public RackUnitFaceValueEnum value;
    public RackUnitFace withValue(RackUnitFaceValueEnum value) {
        this.value = value;
        return this;
    }
}