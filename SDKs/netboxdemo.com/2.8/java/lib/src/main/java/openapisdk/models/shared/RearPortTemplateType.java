package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RearPortTemplateType {
    @JsonProperty("label")
    public RearPortTemplateTypeLabelEnum label;
    public RearPortTemplateType withLabel(RearPortTemplateTypeLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public RearPortTemplateTypeValueEnum value;
    public RearPortTemplateType withValue(RearPortTemplateTypeValueEnum value) {
        this.value = value;
        return this;
    }
}