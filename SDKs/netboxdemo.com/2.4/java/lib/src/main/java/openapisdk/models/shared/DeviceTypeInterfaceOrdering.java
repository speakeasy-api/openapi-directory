package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeviceTypeInterfaceOrdering {
    @JsonProperty("label")
    public String label;
    public DeviceTypeInterfaceOrdering withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Long value;
    public DeviceTypeInterfaceOrdering withValue(Long value) {
        this.value = value;
        return this;
    }
}