import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AccountPermissionAccountProfilesEnum {
    AccountProfileBasic = "ACCOUNT_PROFILE_BASIC",
    AccountProfileStandard = "ACCOUNT_PROFILE_STANDARD"
}
/**
 * Administrative level required to enable this account permission.
 */
export declare enum AccountPermissionLevelEnum {
    User = "USER",
    Administrator = "ADMINISTRATOR"
}
/**
 * AccountPermissions contains information about a particular account permission. Some features of Campaign Manager require an account permission to be present in the account.
 */
export declare class AccountPermission extends SpeakeasyBase {
    /**
     * Account profiles associated with this account permission. Possible values are: - "ACCOUNT_PROFILE_BASIC" - "ACCOUNT_PROFILE_STANDARD"
     */
    accountProfiles?: AccountPermissionAccountProfilesEnum[];
    /**
     * ID of this account permission.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermission".
     */
    kind?: string;
    /**
     * Administrative level required to enable this account permission.
     */
    level?: AccountPermissionLevelEnum;
    /**
     * Name of this account permission.
     */
    name?: string;
    /**
     * Permission group of this account permission.
     */
    permissionGroupId?: string;
}
