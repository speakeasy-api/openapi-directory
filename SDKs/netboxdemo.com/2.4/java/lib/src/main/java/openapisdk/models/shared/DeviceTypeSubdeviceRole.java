package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeviceTypeSubdeviceRole {
    @JsonProperty("label")
    public String label;
    public DeviceTypeSubdeviceRole withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Boolean value;
    public DeviceTypeSubdeviceRole withValue(Boolean value) {
        this.value = value;
        return this;
    }
}