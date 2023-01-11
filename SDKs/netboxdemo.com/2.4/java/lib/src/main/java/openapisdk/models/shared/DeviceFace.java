package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeviceFace {
    @JsonProperty("label")
    public String label;
    public DeviceFace withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Long value;
    public DeviceFace withValue(Long value) {
        this.value = value;
        return this;
    }
}