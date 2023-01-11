package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ConsoleServerPortTemplateType {
    @JsonProperty("label")
    public ConsoleServerPortTemplateTypeLabelEnum label;
    public ConsoleServerPortTemplateType withLabel(ConsoleServerPortTemplateTypeLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public ConsoleServerPortTemplateTypeValueEnum value;
    public ConsoleServerPortTemplateType withValue(ConsoleServerPortTemplateTypeValueEnum value) {
        this.value = value;
        return this;
    }
}