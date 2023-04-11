import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Identifies the extent to which the device is controlled by an Android EMM in various deployment configurations. Possible values include: - "managedDevice", a device where the DPC is set as device owner, - "managedProfile", a device where the DPC is set as profile owner.
 */
export declare enum NewDeviceEventManagementTypeEnum {
    ManagedDevice = "managedDevice",
    ManagedProfile = "managedProfile"
}
/**
 * An event generated when a new device is ready to be managed.
 */
export declare class NewDeviceEvent extends SpeakeasyBase {
    /**
     * The Android ID of the device. This field will always be present.
     */
    deviceId?: string;
    /**
     * Policy app on the device.
     */
    dpcPackageName?: string;
    /**
     * Identifies the extent to which the device is controlled by an Android EMM in various deployment configurations. Possible values include: - "managedDevice", a device where the DPC is set as device owner, - "managedProfile", a device where the DPC is set as profile owner.
     */
    managementType?: NewDeviceEventManagementTypeEnum;
    /**
     * The ID of the user. This field will always be present.
     */
    userId?: string;
}
