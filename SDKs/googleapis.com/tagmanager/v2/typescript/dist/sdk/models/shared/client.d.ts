import { SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";
/**
 * Successful response
 */
export declare class Client extends SpeakeasyBase {
    /**
     * GTM Account ID.
     */
    accountId?: string;
    /**
     * The Client ID uniquely identifies the GTM client.
     */
    clientId?: string;
    /**
     * GTM Container ID.
     */
    containerId?: string;
    /**
     * The fingerprint of the GTM Client as computed at storage time. This value is recomputed whenever the client is modified.
     */
    fingerprint?: string;
    /**
     * Client display name. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update
     */
    name?: string;
    /**
     * User notes on how to apply this tag in the container. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
     */
    notes?: string;
    /**
     * The client's parameters. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update
     */
    parameter?: Parameter[];
    /**
     * Parent folder id.
     */
    parentFolderId?: string;
    /**
     * GTM client's API relative path.
     */
    path?: string;
    /**
     * Priority determines relative firing order. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update
     */
    priority?: number;
    /**
     * Auto generated link to the tag manager UI
     */
    tagManagerUrl?: string;
    /**
     * Client type. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update
     */
    type?: string;
    /**
     * GTM Workspace ID.
     */
    workspaceId?: string;
}
