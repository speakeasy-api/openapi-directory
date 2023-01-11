package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class InterfaceTemplateType {
    @JsonProperty("label")
    public InterfaceTemplateTypeLabelEnum label;
    public InterfaceTemplateType withLabel(InterfaceTemplateTypeLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public InterfaceTemplateTypeValueEnum value;
    public InterfaceTemplateType withValue(InterfaceTemplateTypeValueEnum value) {
        this.value = value;
        return this;
    }
}