package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PowerPortTemplateType {
    @JsonProperty("label")
    public PowerPortTemplateTypeLabelEnum label;
    public PowerPortTemplateType withLabel(PowerPortTemplateTypeLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public PowerPortTemplateTypeValueEnum value;
    public PowerPortTemplateType withValue(PowerPortTemplateTypeValueEnum value) {
        this.value = value;
        return this;
    }
}