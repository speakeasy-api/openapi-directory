import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleIdentityAccesscontextmanagerV1OsConstraint } from "./googleidentityaccesscontextmanagerv1osconstraint";
export declare enum GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedDeviceManagementLevelsEnum {
    ManagementUnspecified = "MANAGEMENT_UNSPECIFIED",
    None = "NONE",
    Basic = "BASIC",
    Complete = "COMPLETE"
}
export declare enum GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedEncryptionStatusesEnum {
    EncryptionUnspecified = "ENCRYPTION_UNSPECIFIED",
    EncryptionUnsupported = "ENCRYPTION_UNSUPPORTED",
    Unencrypted = "UNENCRYPTED",
    Encrypted = "ENCRYPTED"
}
/**
 * `DevicePolicy` specifies device specific restrictions necessary to acquire a given access level. A `DevicePolicy` specifies requirements for requests from devices to be granted access levels, it does not do any enforcement on the device. `DevicePolicy` acts as an AND over all specified fields, and each repeated field is an OR over its elements. Any unset fields are ignored. For example, if the proto is { os_type : DESKTOP_WINDOWS, os_type : DESKTOP_LINUX, encryption_status: ENCRYPTED}, then the DevicePolicy will be true for requests originating from encrypted Linux desktops and encrypted Windows desktops.
 */
export declare class GoogleIdentityAccesscontextmanagerV1DevicePolicy extends SpeakeasyBase {
    /**
     * Allowed device management levels, an empty list allows all management levels.
     */
    allowedDeviceManagementLevels?: GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedDeviceManagementLevelsEnum[];
    /**
     * Allowed encryptions statuses, an empty list allows all statuses.
     */
    allowedEncryptionStatuses?: GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedEncryptionStatusesEnum[];
    /**
     * Allowed OS versions, an empty list allows all types and all versions.
     */
    osConstraints?: GoogleIdentityAccesscontextmanagerV1OsConstraint[];
    /**
     * Whether the device needs to be approved by the customer admin.
     */
    requireAdminApproval?: boolean;
    /**
     * Whether the device needs to be corp owned.
     */
    requireCorpOwned?: boolean;
    /**
     * Whether or not screenlock is required for the DevicePolicy to be true. Defaults to `false`.
     */
    requireScreenlock?: boolean;
}
