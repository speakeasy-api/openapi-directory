package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RackType {
    @JsonProperty("label")
    public RackTypeLabelEnum label;
    public RackType withLabel(RackTypeLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public RackTypeValueEnum value;
    public RackType withValue(RackTypeValueEnum value) {
        this.value = value;
        return this;
    }
}