import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AccountAccessPermissionEnum {
    Read = "read",
    Edit = "edit",
    Publish = "publish",
    Delete = "delete",
    Manage = "manage",
    EditWorkspace = "editWorkspace"
}
/**
 * Defines the Google Tag Manager Account access permissions.
 */
export declare class AccountAccess extends SpeakeasyBase {
    /**
     * List of Account permissions. Valid account permissions are read and manage. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update
     */
    permission?: AccountAccessPermissionEnum[];
}
