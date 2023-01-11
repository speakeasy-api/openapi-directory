package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceTypeTargetingOptionDetails
 * Represents a targetable device type. This will be populated in the device_type_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_DEVICE_TYPE`.
**/
public class DeviceTypeTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceType")
    public DeviceTypeTargetingOptionDetailsDeviceTypeEnum deviceType;
    public DeviceTypeTargetingOptionDetails withDeviceType(DeviceTypeTargetingOptionDetailsDeviceTypeEnum deviceType) {
        this.deviceType = deviceType;
        return this;
    }
}