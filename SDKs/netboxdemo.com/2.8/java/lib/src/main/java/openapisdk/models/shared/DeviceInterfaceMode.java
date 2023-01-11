package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeviceInterfaceMode {
    @JsonProperty("label")
    public DeviceInterfaceModeLabelEnum label;
    public DeviceInterfaceMode withLabel(DeviceInterfaceModeLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public DeviceInterfaceModeValueEnum value;
    public DeviceInterfaceMode withValue(DeviceInterfaceModeValueEnum value) {
        this.value = value;
        return this;
    }
}