import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Levels of availability for a user role permission.
 */
export declare enum UserRolePermissionAvailabilityEnum {
    NotAvailableByDefault = "NOT_AVAILABLE_BY_DEFAULT",
    AccountByDefault = "ACCOUNT_BY_DEFAULT",
    SubaccountAndAccountByDefault = "SUBACCOUNT_AND_ACCOUNT_BY_DEFAULT",
    AccountAlways = "ACCOUNT_ALWAYS",
    SubaccountAndAccountAlways = "SUBACCOUNT_AND_ACCOUNT_ALWAYS",
    UserProfileOnly = "USER_PROFILE_ONLY"
}
/**
 * Contains properties of a user role permission.
 */
export declare class UserRolePermission extends SpeakeasyBase {
    /**
     * Levels of availability for a user role permission.
     */
    availability?: UserRolePermissionAvailabilityEnum;
    /**
     * ID of this user role permission.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermission".
     */
    kind?: string;
    /**
     * Name of this user role permission.
     */
    name?: string;
    /**
     * ID of the permission group that this user role permission belongs to.
     */
    permissionGroupId?: string;
}
