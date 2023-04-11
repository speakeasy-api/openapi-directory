import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a Google Tag Manager Container Workspace.
 */
export declare class Workspace extends SpeakeasyBase {
    /**
     * GTM Account ID.
     */
    accountId?: string;
    /**
     * GTM Container ID.
     */
    containerId?: string;
    /**
     * Workspace description. @mutable tagmanager.accounts.containers.workspaces.create @mutable tagmanager.accounts.containers.workspaces.update
     */
    description?: string;
    /**
     * The fingerprint of the GTM Workspace as computed at storage time. This value is recomputed whenever the workspace is modified.
     */
    fingerprint?: string;
    /**
     * Workspace display name. @mutable tagmanager.accounts.containers.workspaces.create @mutable tagmanager.accounts.containers.workspaces.update
     */
    name?: string;
    /**
     * GTM Workspace's API relative path.
     */
    path?: string;
    /**
     * Auto generated link to the tag manager UI
     */
    tagManagerUrl?: string;
    /**
     * The Workspace ID uniquely identifies the GTM Workspace.
     */
    workspaceId?: string;
}
