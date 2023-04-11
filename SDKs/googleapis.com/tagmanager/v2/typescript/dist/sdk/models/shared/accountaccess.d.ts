import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Whether the user has no access, user access, or admin access to an account. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update
 */
export declare enum AccountAccessPermissionEnum {
    AccountPermissionUnspecified = "accountPermissionUnspecified",
    NoAccess = "noAccess",
    User = "user",
    Admin = "admin"
}
/**
 * Defines the Google Tag Manager Account access permissions.
 */
export declare class AccountAccess extends SpeakeasyBase {
    /**
     * Whether the user has no access, user access, or admin access to an account. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update
     */
    permission?: AccountAccessPermissionEnum;
}
