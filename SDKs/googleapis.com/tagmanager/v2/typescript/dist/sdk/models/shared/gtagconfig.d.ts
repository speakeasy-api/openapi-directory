import { SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";
/**
 * Represents a Google tag configuration.
 */
export declare class GtagConfig extends SpeakeasyBase {
    /**
     * Google tag account ID.
     */
    accountId?: string;
    /**
     * Google tag container ID.
     */
    containerId?: string;
    /**
     * The fingerprint of the Google tag config as computed at storage time. This value is recomputed whenever the config is modified.
     */
    fingerprint?: string;
    /**
     * The ID uniquely identifies the Google tag config.
     */
    gtagConfigId?: string;
    /**
     * The Google tag config's parameters. @mutable tagmanager.accounts.containers.workspaces.gtag_config.create @mutable tagmanager.accounts.containers.workspaces.gtag_config.update
     */
    parameter?: Parameter[];
    /**
     * Google tag config's API relative path.
     */
    path?: string;
    /**
     * Auto generated link to the tag manager UI
     */
    tagManagerUrl?: string;
    /**
     * Google tag config type. @required tagmanager.accounts.containers.workspaces.gtag_config.create @required tagmanager.accounts.containers.workspaces.gtag_config.update @mutable tagmanager.accounts.containers.workspaces.gtag_config.create @mutable tagmanager.accounts.containers.workspaces.gtag_config.update
     */
    type?: string;
    /**
     * Google tag workspace ID. Only used by GTM containers. Set to 0 otherwise.
     */
    workspaceId?: string;
}
