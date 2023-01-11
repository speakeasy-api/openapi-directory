package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ConsolePortType {
    @JsonProperty("label")
    public ConsolePortTypeLabelEnum label;
    public ConsolePortType withLabel(ConsolePortTypeLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public ConsolePortTypeValueEnum value;
    public ConsolePortType withValue(ConsolePortTypeValueEnum value) {
        this.value = value;
        return this;
    }
}