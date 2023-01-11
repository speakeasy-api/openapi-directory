package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class InterfaceTemplateFormFactor {
    @JsonProperty("label")
    public String label;
    public InterfaceTemplateFormFactor withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Long value;
    public InterfaceTemplateFormFactor withValue(Long value) {
        this.value = value;
        return this;
    }
}