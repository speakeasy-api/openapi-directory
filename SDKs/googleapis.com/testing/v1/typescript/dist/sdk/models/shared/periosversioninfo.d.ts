import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The number of online devices for an iOS version.
 */
export declare enum PerIosVersionInfoDeviceCapacityEnum {
    DeviceCapacityUnspecified = "DEVICE_CAPACITY_UNSPECIFIED",
    DeviceCapacityHigh = "DEVICE_CAPACITY_HIGH",
    DeviceCapacityMedium = "DEVICE_CAPACITY_MEDIUM",
    DeviceCapacityLow = "DEVICE_CAPACITY_LOW",
    DeviceCapacityNone = "DEVICE_CAPACITY_NONE"
}
/**
 * A version-specific information of an iOS model.
 */
export declare class PerIosVersionInfo extends SpeakeasyBase {
    /**
     * The number of online devices for an iOS version.
     */
    deviceCapacity?: PerIosVersionInfoDeviceCapacityEnum;
    /**
     * An iOS version.
     */
    versionId?: string;
}
