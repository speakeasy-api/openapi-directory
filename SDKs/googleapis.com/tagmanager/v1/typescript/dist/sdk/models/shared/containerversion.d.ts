import { SpeakeasyBase } from "../../../internal/utils";
import { Container } from "./container";
import { Folder } from "./folder";
import { Macro } from "./macro";
import { Rule } from "./rule";
import { Tag } from "./tag";
import { Trigger } from "./trigger";
import { Variable } from "./variable";
/**
 * Represents a Google Tag Manager Container Version.
 */
export declare class ContainerVersion extends SpeakeasyBase {
    /**
     * GTM Account ID.
     */
    accountId?: string;
    /**
     * Represents a Google Tag Manager Container.
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
     * A value of true indicates this container version has been deleted.
     */
    deleted?: boolean;
    /**
     * The fingerprint of the GTM Container Version as computed at storage time. This value is recomputed whenever the container version is modified.
     */
    fingerprint?: string;
    /**
     * The folders in the container that this version was taken from.
     */
    folder?: Folder[];
    /**
     * The macros in the container that this version was taken from.
     */
    macro?: Macro[];
    /**
     * Container version display name. @mutable tagmanager.accounts.containers.versions.update
     */
    name?: string;
    /**
     * User notes on how to apply this container version in the container. @mutable tagmanager.accounts.containers.versions.update
     */
    notes?: string;
    /**
     * The rules in the container that this version was taken from.
     */
    rule?: Rule[];
    /**
     * The tags in the container that this version was taken from.
     */
    tag?: Tag[];
    /**
     * The triggers in the container that this version was taken from.
     */
    trigger?: Trigger[];
    /**
     * The variables in the container that this version was taken from.
     */
    variable?: Variable[];
}
