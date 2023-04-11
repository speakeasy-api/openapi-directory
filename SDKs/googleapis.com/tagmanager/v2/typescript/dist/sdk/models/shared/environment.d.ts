import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of this environment.
 */
export declare enum EnvironmentTypeEnum {
    User = "user",
    Live = "live",
    Latest = "latest",
    Workspace = "workspace"
}
/**
 * Represents a Google Tag Manager Environment. Note that a user can create, delete and update environments of type USER, but can only update the enable_debug and url fields of environments of other types.
 */
export declare class Environment extends SpeakeasyBase {
    /**
     * GTM Account ID.
     */
    accountId?: string;
    /**
     * The environment authorization code.
     */
    authorizationCode?: string;
    /**
     * The last update time-stamp for the authorization code.
     */
    authorizationTimestamp?: string;
    /**
     * GTM Container ID.
     */
    containerId?: string;
    /**
     * Represents a link to a container version.
     */
    containerVersionId?: string;
    /**
     * The environment description. Can be set or changed only on USER type environments. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update
     */
    description?: string;
    /**
     * Whether or not to enable debug by default for the environment. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update
     */
    enableDebug?: boolean;
    /**
     * GTM Environment ID uniquely identifies the GTM Environment.
     */
    environmentId?: string;
    /**
     * The fingerprint of the GTM environment as computed at storage time. This value is recomputed whenever the environment is modified.
     */
    fingerprint?: string;
    /**
     * The environment display name. Can be set or changed only on USER type environments. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update
     */
    name?: string;
    /**
     * GTM Environment's API relative path.
     */
    path?: string;
    /**
     * Auto generated link to the tag manager UI
     */
    tagManagerUrl?: string;
    /**
     * The type of this environment.
     */
    type?: EnvironmentTypeEnum;
    /**
     * Default preview page url for the environment. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update
     */
    url?: string;
    /**
     * Represents a link to a quick preview of a workspace.
     */
    workspaceId?: string;
}
