package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceTierConfig
 * LINT.IfChange Configuration describing device targeting criteria for the content of an app.
**/
public class DeviceTierConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceGroups")
    public DeviceGroup[] deviceGroups;
    public DeviceTierConfig withDeviceGroups(DeviceGroup[] deviceGroups) {
        this.deviceGroups = deviceGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceTierConfigId")
    public String deviceTierConfigId;
    public DeviceTierConfig withDeviceTierConfigId(String deviceTierConfigId) {
        this.deviceTierConfigId = deviceTierConfigId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceTierSet")
    public DeviceTierSet deviceTierSet;
    public DeviceTierConfig withDeviceTierSet(DeviceTierSet deviceTierSet) {
        this.deviceTierSet = deviceTierSet;
        return this;
    }
}