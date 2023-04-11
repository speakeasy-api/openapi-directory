import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Ownership privileges on device.
 */
export declare enum AndroidAttributesOwnershipPrivilegeEnum {
    OwnershipPrivilegeUnspecified = "OWNERSHIP_PRIVILEGE_UNSPECIFIED",
    DeviceAdministrator = "DEVICE_ADMINISTRATOR",
    ProfileOwner = "PROFILE_OWNER",
    DeviceOwner = "DEVICE_OWNER"
}
/**
 * Resource representing the Android specific attributes of a Device.
 */
export declare class AndroidAttributes extends SpeakeasyBase {
    /**
     * Whether applications from unknown sources can be installed on device.
     */
    enabledUnknownSources?: boolean;
    /**
     * Whether this account is on an owner/primary profile. For phones, only true for owner profiles. Android 4+ devices can have secondary or restricted user profiles.
     */
    ownerProfileAccount?: boolean;
    /**
     * Ownership privileges on device.
     */
    ownershipPrivilege?: AndroidAttributesOwnershipPrivilegeEnum;
    /**
     * Whether device supports Android work profiles. If false, this service will not block access to corp data even if an administrator turns on the "Enforce Work Profile" policy.
     */
    supportsWorkProfile?: boolean;
}
