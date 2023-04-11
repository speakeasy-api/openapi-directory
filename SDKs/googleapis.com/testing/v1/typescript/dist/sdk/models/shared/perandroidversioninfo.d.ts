import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The number of online devices for an Android version.
 */
export declare enum PerAndroidVersionInfoDeviceCapacityEnum {
    DeviceCapacityUnspecified = "DEVICE_CAPACITY_UNSPECIFIED",
    DeviceCapacityHigh = "DEVICE_CAPACITY_HIGH",
    DeviceCapacityMedium = "DEVICE_CAPACITY_MEDIUM",
    DeviceCapacityLow = "DEVICE_CAPACITY_LOW",
    DeviceCapacityNone = "DEVICE_CAPACITY_NONE"
}
/**
 * A version-specific information of an Android model.
 */
export declare class PerAndroidVersionInfo extends SpeakeasyBase {
    /**
     * The number of online devices for an Android version.
     */
    deviceCapacity?: PerAndroidVersionInfoDeviceCapacityEnum;
    /**
     * An Android version.
     */
    versionId?: string;
}
