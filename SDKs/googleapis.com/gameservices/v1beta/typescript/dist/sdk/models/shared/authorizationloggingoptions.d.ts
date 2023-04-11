import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the permission that was checked.
 */
export declare enum AuthorizationLoggingOptionsPermissionTypeEnum {
    PermissionTypeUnspecified = "PERMISSION_TYPE_UNSPECIFIED",
    AdminRead = "ADMIN_READ",
    AdminWrite = "ADMIN_WRITE",
    DataRead = "DATA_READ",
    DataWrite = "DATA_WRITE"
}
/**
 * Authorization-related information used by Cloud Audit Logging.
 */
export declare class AuthorizationLoggingOptions extends SpeakeasyBase {
    /**
     * The type of the permission that was checked.
     */
    permissionType?: AuthorizationLoggingOptionsPermissionTypeEnum;
}
