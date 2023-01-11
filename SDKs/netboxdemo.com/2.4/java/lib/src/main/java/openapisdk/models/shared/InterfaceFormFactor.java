package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class InterfaceFormFactor {
    @JsonProperty("label")
    public String label;
    public InterfaceFormFactor withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Long value;
    public InterfaceFormFactor withValue(Long value) {
        this.value = value;
        return this;
    }
}