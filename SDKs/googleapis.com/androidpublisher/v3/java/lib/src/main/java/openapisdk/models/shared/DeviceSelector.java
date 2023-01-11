package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceSelector
 * Selector for a device group. A selector consists of a set of conditions on the device that should all match (logical AND) to determine a device group eligibility. For instance, if a selector specifies RAM conditions, device model inclusion and device model exclusion, a device is considered to match if: device matches RAM conditions AND device matches one of the included device models AND device doesn't match excluded device models
**/
public class DeviceSelector {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceRam")
    public DeviceRam deviceRam;
    public DeviceSelector withDeviceRam(DeviceRam deviceRam) {
        this.deviceRam = deviceRam;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedDeviceIds")
    public DeviceId[] excludedDeviceIds;
    public DeviceSelector withExcludedDeviceIds(DeviceId[] excludedDeviceIds) {
        this.excludedDeviceIds = excludedDeviceIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forbiddenSystemFeatures")
    public SystemFeature[] forbiddenSystemFeatures;
    public DeviceSelector withForbiddenSystemFeatures(SystemFeature[] forbiddenSystemFeatures) {
        this.forbiddenSystemFeatures = forbiddenSystemFeatures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includedDeviceIds")
    public DeviceId[] includedDeviceIds;
    public DeviceSelector withIncludedDeviceIds(DeviceId[] includedDeviceIds) {
        this.includedDeviceIds = includedDeviceIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requiredSystemFeatures")
    public SystemFeature[] requiredSystemFeatures;
    public DeviceSelector withRequiredSystemFeatures(SystemFeature[] requiredSystemFeatures) {
        this.requiredSystemFeatures = requiredSystemFeatures;
        return this;
    }
}