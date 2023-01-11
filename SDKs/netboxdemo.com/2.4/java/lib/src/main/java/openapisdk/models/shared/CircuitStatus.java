package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CircuitStatus {
    @JsonProperty("label")
    public String label;
    public CircuitStatus withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Long value;
    public CircuitStatus withValue(Long value) {
        this.value = value;
        return this;
    }
}