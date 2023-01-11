package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RackWidth {
    @JsonProperty("label")
    public String label;
    public RackWidth withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Long value;
    public RackWidth withValue(Long value) {
        this.value = value;
        return this;
    }
}