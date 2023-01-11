package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RackType {
    @JsonProperty("label")
    public String label;
    public RackType withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Long value;
    public RackType withValue(Long value) {
        this.value = value;
        return this;
    }
}