package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RearPortType {
    @JsonProperty("label")
    public RearPortTypeLabelEnum label;
    public RearPortType withLabel(RearPortTypeLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public RearPortTypeValueEnum value;
    public RearPortType withValue(RearPortTypeValueEnum value) {
        this.value = value;
        return this;
    }
}