package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeviceStatus {
    @JsonProperty("label")
    public String label;
    public DeviceStatus withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Long value;
    public DeviceStatus withValue(Long value) {
        this.value = value;
        return this;
    }
}