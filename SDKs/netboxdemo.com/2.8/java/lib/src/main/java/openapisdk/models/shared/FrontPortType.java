package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FrontPortType {
    @JsonProperty("label")
    public FrontPortTypeLabelEnum label;
    public FrontPortType withLabel(FrontPortTypeLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public FrontPortTypeValueEnum value;
    public FrontPortType withValue(FrontPortTypeValueEnum value) {
        this.value = value;
        return this;
    }
}