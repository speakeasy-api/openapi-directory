package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class VlanStatus {
    @JsonProperty("label")
    public String label;
    public VlanStatus withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Long value;
    public VlanStatus withValue(Long value) {
        this.value = value;
        return this;
    }
}