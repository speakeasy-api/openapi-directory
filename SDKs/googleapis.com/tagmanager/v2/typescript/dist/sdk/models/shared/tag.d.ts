import { SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";
import { SetupTag } from "./setuptag";
import { TagConsentSetting } from "./tagconsentsetting";
import { TeardownTag } from "./teardowntag";
/**
 * Option to fire this tag.
 */
export declare enum TagTagFiringOptionEnum {
    TagFiringOptionUnspecified = "tagFiringOptionUnspecified",
    Unlimited = "unlimited",
    OncePerEvent = "oncePerEvent",
    OncePerLoad = "oncePerLoad"
}
/**
 * Represents a Google Tag Manager Tag.
 */
export declare class Tag extends SpeakeasyBase {
    /**
     * GTM Account ID.
     */
    accountId?: string;
    /**
     * Blocking rule IDs. If any of the listed rules evaluate to true, the tag will not fire. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
     */
    blockingRuleId?: string[];
    /**
     * Blocking trigger IDs. If any of the listed triggers evaluate to true, the tag will not fire. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
     */
    blockingTriggerId?: string[];
    consentSettings?: TagConsentSetting;
    /**
     * GTM Container ID.
     */
    containerId?: string;
    /**
     * The fingerprint of the GTM Tag as computed at storage time. This value is recomputed whenever the tag is modified.
     */
    fingerprint?: string;
    /**
     * Firing rule IDs. A tag will fire when any of the listed rules are true and all of its blockingRuleIds (if any specified) are false. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
     */
    firingRuleId?: string[];
    /**
     * Firing trigger IDs. A tag will fire when any of the listed triggers are true and all of its blockingTriggerIds (if any specified) are false. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
     */
    firingTriggerId?: string[];
    /**
     * If set to true, this tag will only fire in the live environment (e.g. not in preview or debug mode). @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
     */
    liveOnly?: boolean;
    /**
     * Represents a Google Tag Manager Parameter.
     */
    monitoringMetadata?: Parameter;
    /**
     * If non-empty, then the tag display name will be included in the monitoring metadata map using the key specified. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
     */
    monitoringMetadataTagNameKey?: string;
    /**
     * Tag display name. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
     */
    name?: string;
    /**
     * User notes on how to apply this tag in the container. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
     */
    notes?: string;
    /**
     * The tag's parameters. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
     */
    parameter?: Parameter[];
    /**
     * Parent folder id.
     */
    parentFolderId?: string;
    /**
     * GTM Tag's API relative path.
     */
    path?: string;
    /**
     * Indicates whether the tag is paused, which prevents the tag from firing. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
     */
    paused?: boolean;
    /**
     * Represents a Google Tag Manager Parameter.
     */
    priority?: Parameter;
    /**
     * The end timestamp in milliseconds to schedule a tag. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
     */
    scheduleEndMs?: string;
    /**
     * The start timestamp in milliseconds to schedule a tag. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
     */
    scheduleStartMs?: string;
    /**
     * The list of setup tags. Currently we only allow one.
     */
    setupTag?: SetupTag[];
    /**
     * Option to fire this tag.
     */
    tagFiringOption?: TagTagFiringOptionEnum;
    /**
     * The Tag ID uniquely identifies the GTM Tag.
     */
    tagId?: string;
    /**
     * Auto generated link to the tag manager UI
     */
    tagManagerUrl?: string;
    /**
     * The list of teardown tags. Currently we only allow one.
     */
    teardownTag?: TeardownTag[];
    /**
     * GTM Tag Type. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
     */
    type?: string;
    /**
     * GTM Workspace ID.
     */
    workspaceId?: string;
}
