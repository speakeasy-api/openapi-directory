package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PowerPortType {
    @JsonProperty("label")
    public PowerPortTypeLabelEnum label;
    public PowerPortType withLabel(PowerPortTypeLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public PowerPortTypeValueEnum value;
    public PowerPortType withValue(PowerPortTypeValueEnum value) {
        this.value = value;
        return this;
    }
}