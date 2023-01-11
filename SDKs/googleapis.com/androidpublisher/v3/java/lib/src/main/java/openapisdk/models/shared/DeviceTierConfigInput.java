package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceTierConfigInput
 * LINT.IfChange Configuration describing device targeting criteria for the content of an app.
**/
public class DeviceTierConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceGroups")
    public DeviceGroup[] deviceGroups;
    public DeviceTierConfigInput withDeviceGroups(DeviceGroup[] deviceGroups) {
        this.deviceGroups = deviceGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceTierSet")
    public DeviceTierSet deviceTierSet;
    public DeviceTierConfigInput withDeviceTierSet(DeviceTierSet deviceTierSet) {
        this.deviceTierSet = deviceTierSet;
        return this;
    }
}