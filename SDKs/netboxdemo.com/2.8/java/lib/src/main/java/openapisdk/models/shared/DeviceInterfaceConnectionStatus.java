package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeviceInterfaceConnectionStatus {
    @JsonProperty("label")
    public DeviceInterfaceConnectionStatusLabelEnum label;
    public DeviceInterfaceConnectionStatus withLabel(DeviceInterfaceConnectionStatusLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Boolean value;
    public DeviceInterfaceConnectionStatus withValue(Boolean value) {
        this.value = value;
        return this;
    }
}