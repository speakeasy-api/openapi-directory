package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceTypeAssignedTargetingOptionDetailsInput
 * Targeting details for device type. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_DEVICE_TYPE`.
**/
public class DeviceTypeAssignedTargetingOptionDetailsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceType")
    public DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum deviceType;
    public DeviceTypeAssignedTargetingOptionDetailsInput withDeviceType(DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum deviceType) {
        this.deviceType = deviceType;
        return this;
    }
}