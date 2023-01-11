package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeviceWithConfigContextFace {
    @JsonProperty("label")
    public String label;
    public DeviceWithConfigContextFace withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Long value;
    public DeviceWithConfigContextFace withValue(Long value) {
        this.value = value;
        return this;
    }
}