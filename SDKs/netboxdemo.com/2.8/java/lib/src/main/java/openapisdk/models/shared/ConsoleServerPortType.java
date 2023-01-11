package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ConsoleServerPortType {
    @JsonProperty("label")
    public ConsoleServerPortTypeLabelEnum label;
    public ConsoleServerPortType withLabel(ConsoleServerPortTypeLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public ConsoleServerPortTypeValueEnum value;
    public ConsoleServerPortType withValue(ConsoleServerPortTypeValueEnum value) {
        this.value = value;
        return this;
    }
}