package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ConsolePortTemplateType {
    @JsonProperty("label")
    public ConsolePortTemplateTypeLabelEnum label;
    public ConsolePortTemplateType withLabel(ConsolePortTemplateTypeLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public ConsolePortTemplateTypeValueEnum value;
    public ConsolePortTemplateType withValue(ConsolePortTemplateTypeValueEnum value) {
        this.value = value;
        return this;
    }
}