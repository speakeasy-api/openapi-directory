package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class InterfaceMode {
    @JsonProperty("label")
    public String label;
    public InterfaceMode withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Long value;
    public InterfaceMode withValue(Long value) {
        this.value = value;
        return this;
    }
}