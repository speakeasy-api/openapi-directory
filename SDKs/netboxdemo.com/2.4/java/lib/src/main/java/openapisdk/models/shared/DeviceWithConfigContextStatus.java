package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeviceWithConfigContextStatus {
    @JsonProperty("label")
    public String label;
    public DeviceWithConfigContextStatus withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Long value;
    public DeviceWithConfigContextStatus withValue(Long value) {
        this.value = value;
        return this;
    }
}