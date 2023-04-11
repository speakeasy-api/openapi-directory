import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceReport } from "./devicereport";
import { Policy } from "./policy";
/**
 * Identifies the extent to which the device is controlled by a managed Google Play EMM in various deployment configurations. Possible values include: - "managedDevice", a device that has the EMM's device policy controller (DPC) as the device owner. - "managedProfile", a device that has a profile managed by the DPC (DPC is profile owner) in addition to a separate, personal profile that is unavailable to the DPC. - "containerApp", no longer used (deprecated). - "unmanagedProfile", a device that has been allowed (by the domain's admin, using the Admin Console to enable the privilege) to use managed Google Play, but the profile is itself not owned by a DPC.
 */
export declare enum DeviceManagementTypeEnum {
    ManagedDevice = "managedDevice",
    ManagedProfile = "managedProfile",
    ContainerApp = "containerApp",
    UnmanagedProfile = "unmanagedProfile"
}
/**
 * A Devices resource represents a mobile device managed by the EMM and belonging to a specific enterprise user.
 */
export declare class Device extends SpeakeasyBase {
    /**
     * The Google Play Services Android ID for the device encoded as a lowercase hex string. For example, "123456789abcdef0".
     */
    androidId?: string;
    /**
     * The internal hardware codename of the device. This comes from android.os.Build.DEVICE. (field named "device" per logs/wireless/android/android_checkin.proto)
     */
    device?: string;
    /**
     * The build fingerprint of the device if known.
     */
    latestBuildFingerprint?: string;
    /**
     * The manufacturer of the device. This comes from android.os.Build.MANUFACTURER.
     */
    maker?: string;
    /**
     * Identifies the extent to which the device is controlled by a managed Google Play EMM in various deployment configurations. Possible values include: - "managedDevice", a device that has the EMM's device policy controller (DPC) as the device owner. - "managedProfile", a device that has a profile managed by the DPC (DPC is profile owner) in addition to a separate, personal profile that is unavailable to the DPC. - "containerApp", no longer used (deprecated). - "unmanagedProfile", a device that has been allowed (by the domain's admin, using the Admin Console to enable the privilege) to use managed Google Play, but the profile is itself not owned by a DPC.
     */
    managementType?: DeviceManagementTypeEnum;
    /**
     * The model name of the device. This comes from android.os.Build.MODEL.
     */
    model?: string;
    /**
     * The device policy for a given managed device.
     */
    policy?: Policy;
    /**
     * The product name of the device. This comes from android.os.Build.PRODUCT.
     */
    product?: string;
    /**
     * Device report updated with the latest app states for managed apps on the device.
     */
    report?: DeviceReport;
    /**
     * Retail brand for the device, if set. See https://developer.android.com/reference/android/os/Build.html#BRAND
     */
    retailBrand?: string;
    /**
     * API compatibility version.
     */
    sdkVersion?: number;
}
