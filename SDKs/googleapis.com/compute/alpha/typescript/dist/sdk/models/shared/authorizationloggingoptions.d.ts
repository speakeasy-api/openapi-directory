import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This is deprecated and has no effect. Do not use.
 */
export declare enum AuthorizationLoggingOptionsPermissionTypeEnum {
    AdminRead = "ADMIN_READ",
    AdminWrite = "ADMIN_WRITE",
    DataRead = "DATA_READ",
    DataWrite = "DATA_WRITE",
    PermissionTypeUnspecified = "PERMISSION_TYPE_UNSPECIFIED"
}
/**
 * This is deprecated and has no effect. Do not use.
 */
export declare class AuthorizationLoggingOptions extends SpeakeasyBase {
    /**
     * This is deprecated and has no effect. Do not use.
     */
    permissionType?: AuthorizationLoggingOptionsPermissionTypeEnum;
}
