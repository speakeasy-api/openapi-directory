import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Compromised State of the DeviceUser object
 */
export declare enum GoogleAppsCloudidentityDevicesV1DeviceUserCompromisedStateEnum {
    CompromisedStateUnspecified = "COMPROMISED_STATE_UNSPECIFIED",
    Compromised = "COMPROMISED",
    NotCompromised = "NOT_COMPROMISED"
}
/**
 * Output only. Management state of the user on the device.
 */
export declare enum GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum {
    ManagementStateUnspecified = "MANAGEMENT_STATE_UNSPECIFIED",
    Wiping = "WIPING",
    Wiped = "WIPED",
    Approved = "APPROVED",
    Blocked = "BLOCKED",
    PendingApproval = "PENDING_APPROVAL",
    Unenrolled = "UNENROLLED"
}
/**
 * Password state of the DeviceUser object
 */
export declare enum GoogleAppsCloudidentityDevicesV1DeviceUserPasswordStateEnum {
    PasswordStateUnspecified = "PASSWORD_STATE_UNSPECIFIED",
    PasswordSet = "PASSWORD_SET",
    PasswordNotSet = "PASSWORD_NOT_SET"
}
/**
 * Represents a user's use of a Device in the Cloud Identity Devices API. A DeviceUser is a resource representing a user's use of a Device
 */
export declare class GoogleAppsCloudidentityDevicesV1DeviceUser extends SpeakeasyBase {
    /**
     * Compromised State of the DeviceUser object
     */
    compromisedState?: GoogleAppsCloudidentityDevicesV1DeviceUserCompromisedStateEnum;
    /**
     * When the user first signed in to the device
     */
    createTime?: string;
    /**
     * Output only. Most recent time when user registered with this service.
     */
    firstSyncTime?: string;
    /**
     * Output only. Default locale used on device, in IETF BCP-47 format.
     */
    languageCode?: string;
    /**
     * Output only. Last time when user synced with policies.
     */
    lastSyncTime?: string;
    /**
     * Output only. Management state of the user on the device.
     */
    managementState?: GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum;
    /**
     * Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the DeviceUser in format: `devices/{device}/deviceUsers/{device_user}`, where `device_user` uniquely identifies a user's use of a device.
     */
    name?: string;
    /**
     * Password state of the DeviceUser object
     */
    passwordState?: GoogleAppsCloudidentityDevicesV1DeviceUserPasswordStateEnum;
    /**
     * Output only. User agent on the device for this specific user
     */
    userAgent?: string;
    /**
     * Email address of the user registered on the device.
     */
    userEmail?: string;
}
