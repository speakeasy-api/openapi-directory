package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceGroup
 * LINT.IfChange A group of devices. A group is defined by a set of device selectors. A device belongs to the group if it matches any selector (logical OR).
**/
public class DeviceGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceSelectors")
    public DeviceSelector[] deviceSelectors;
    public DeviceGroup withDeviceSelectors(DeviceSelector[] deviceSelectors) {
        this.deviceSelectors = deviceSelectors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DeviceGroup withName(String name) {
        this.name = name;
        return this;
    }
}