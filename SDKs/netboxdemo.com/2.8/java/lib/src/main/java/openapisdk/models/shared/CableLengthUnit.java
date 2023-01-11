package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CableLengthUnit {
    @JsonProperty("label")
    public CableLengthUnitLabelEnum label;
    public CableLengthUnit withLabel(CableLengthUnitLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public CableLengthUnitValueEnum value;
    public CableLengthUnit withValue(CableLengthUnitValueEnum value) {
        this.value = value;
        return this;
    }
}