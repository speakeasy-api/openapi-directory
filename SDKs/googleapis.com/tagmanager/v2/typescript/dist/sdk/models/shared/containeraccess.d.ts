import { SpeakeasyBase } from "../../../internal/utils";
/**
 * List of Container permissions. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update
 */
export declare enum ContainerAccessPermissionEnum {
    ContainerPermissionUnspecified = "containerPermissionUnspecified",
    NoAccess = "noAccess",
    Read = "read",
    Edit = "edit",
    Approve = "approve",
    Publish = "publish"
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
     * List of Container permissions. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update
     */
    permission?: ContainerAccessPermissionEnum;
}
