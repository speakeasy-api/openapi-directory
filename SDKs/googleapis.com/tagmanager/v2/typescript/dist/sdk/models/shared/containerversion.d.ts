import { SpeakeasyBase } from "../../../internal/utils";
import { BuiltInVariable } from "./builtinvariable";
import { Client } from "./client";
import { Container } from "./container";
import { CustomTemplate } from "./customtemplate";
import { Folder } from "./folder";
import { GtagConfig } from "./gtagconfig";
import { Tag } from "./tag";
import { Trigger } from "./trigger";
import { Variable } from "./variable";
import { Zone } from "./zone";
/**
 * Represents a Google Tag Manager Container Version.
 */
export declare class ContainerVersion extends SpeakeasyBase {
    /**
     * GTM Account ID.
     */
    accountId?: string;
    /**
     * The built-in variables in the container that this version was taken from.
     */
    builtInVariable?: BuiltInVariable[];
    /**
     * The clients in the container that this version was taken from.
     */
    client?: Client[];
    /**
     * Represents a Google Tag Manager Container, which specifies the platform tags will run on, manages workspaces, and retains container versions.
     */
    container?: Container;
    /**
     * GTM Container ID.
     */
    containerId?: string;
    /**
     * The Container Version ID uniquely identifies the GTM Container Version.
     */
    containerVersionId?: string;
    /**
     * The custom templates in the container that this version was taken from.
     */
    customTemplate?: CustomTemplate[];
    /**
     * A value of true indicates this container version has been deleted.
     */
    deleted?: boolean;
    /**
     * Container version description. @mutable tagmanager.accounts.containers.versions.update
     */
    description?: string;
    /**
     * The fingerprint of the GTM Container Version as computed at storage time. This value is recomputed whenever the container version is modified.
     */
    fingerprint?: string;
    /**
     * The folders in the container that this version was taken from.
     */
    folder?: Folder[];
    /**
     * The Google tag configs in the container that this version was taken from.
     */
    gtagConfig?: GtagConfig[];
    /**
     * Container version display name. @mutable tagmanager.accounts.containers.versions.update
     */
    name?: string;
    /**
     * GTM Container Version's API relative path.
     */
    path?: string;
    /**
     * The tags in the container that this version was taken from.
     */
    tag?: Tag[];
    /**
     * Auto generated link to the tag manager UI
     */
    tagManagerUrl?: string;
    /**
     * The triggers in the container that this version was taken from.
     */
    trigger?: Trigger[];
    /**
     * The variables in the container that this version was taken from.
     */
    variable?: Variable[];
    /**
     * The zones in the container that this version was taken from.
     */
    zone?: Zone[];
}
