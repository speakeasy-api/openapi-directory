import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ContainerAccessPermissionEnum {
    Read = "read",
    Edit = "edit",
    Publish = "publish",
    Delete = "delete",
    Manage = "manage",
    EditWorkspace = "editWorkspace"
}
/**
 * Defines the Google Tag Manager Container access permissions.
 */
export declare class ContainerAccess extends SpeakeasyBase {
    /**
     * GTM Container ID. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update
     */
    containerId?: string;
    /**
     * List of Container permissions. Valid container permissions are: read, edit, delete, publish. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update
     */
    permission?: ContainerAccessPermissionEnum[];
}
