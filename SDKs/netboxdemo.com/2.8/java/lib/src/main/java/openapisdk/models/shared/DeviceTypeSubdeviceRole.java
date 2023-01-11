package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeviceTypeSubdeviceRole {
    @JsonProperty("label")
    public DeviceTypeSubdeviceRoleLabelEnum label;
    public DeviceTypeSubdeviceRole withLabel(DeviceTypeSubdeviceRoleLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public DeviceTypeSubdeviceRoleValueEnum value;
    public DeviceTypeSubdeviceRole withValue(DeviceTypeSubdeviceRoleValueEnum value) {
        this.value = value;
        return this;
    }
}