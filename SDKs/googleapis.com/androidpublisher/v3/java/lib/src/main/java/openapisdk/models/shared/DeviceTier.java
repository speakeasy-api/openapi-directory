package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceTier
 * A single device tier. Devices matching any of the device groups in device_group_names are considered to match the tier.
**/
public class DeviceTier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceGroupNames")
    public String[] deviceGroupNames;
    public DeviceTier withDeviceGroupNames(String[] deviceGroupNames) {
        this.deviceGroupNames = deviceGroupNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("level")
    public Integer level;
    public DeviceTier withLevel(Integer level) {
        this.level = level;
        return this;
    }
}