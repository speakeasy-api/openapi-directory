import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a Google Tag Manager Folder.
 */
export declare class Folder extends SpeakeasyBase {
    /**
     * GTM Account ID.
     */
    accountId?: string;
    /**
     * GTM Container ID.
     */
    containerId?: string;
    /**
     * The fingerprint of the GTM Folder as computed at storage time. This value is recomputed whenever the folder is modified.
     */
    fingerprint?: string;
    /**
     * The Folder ID uniquely identifies the GTM Folder.
     */
    folderId?: string;
    /**
     * Folder display name. @mutable tagmanager.accounts.containers.workspaces.folders.create @mutable tagmanager.accounts.containers.workspaces.folders.update
     */
    name?: string;
    /**
     * User notes on how to apply this folder in the container. @mutable tagmanager.accounts.containers.workspaces.folders.create @mutable tagmanager.accounts.containers.workspaces.folders.update
     */
    notes?: string;
    /**
     * GTM Folder's API relative path.
     */
    path?: string;
    /**
     * Auto generated link to the tag manager UI
     */
    tagManagerUrl?: string;
    /**
     * GTM Workspace ID.
     */
    workspaceId?: string;
}
