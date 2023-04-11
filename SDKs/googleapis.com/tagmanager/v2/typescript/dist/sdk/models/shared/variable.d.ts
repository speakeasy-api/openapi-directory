import { SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";
import { VariableFormatValue } from "./variableformatvalue";
/**
 * Represents a Google Tag Manager Variable.
 */
export declare class Variable extends SpeakeasyBase {
    /**
     * GTM Account ID.
     */
    accountId?: string;
    /**
     * GTM Container ID.
     */
    containerId?: string;
    /**
     * For mobile containers only: A list of trigger IDs for disabling conditional variables; the variable is enabled if one of the enabling trigger is true while all the disabling trigger are false. Treated as an unordered set. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update
     */
    disablingTriggerId?: string[];
    /**
     * For mobile containers only: A list of trigger IDs for enabling conditional variables; the variable is enabled if one of the enabling triggers is true while all the disabling triggers are false. Treated as an unordered set. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update
     */
    enablingTriggerId?: string[];
    /**
     * The fingerprint of the GTM Variable as computed at storage time. This value is recomputed whenever the variable is modified.
     */
    fingerprint?: string;
    formatValue?: VariableFormatValue;
    /**
     * Variable display name. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update
     */
    name?: string;
    /**
     * User notes on how to apply this variable in the container. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update
     */
    notes?: string;
    /**
     * The variable's parameters. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update
     */
    parameter?: Parameter[];
    /**
     * Parent folder id.
     */
    parentFolderId?: string;
    /**
     * GTM Variable's API relative path.
     */
    path?: string;
    /**
     * The end timestamp in milliseconds to schedule a variable. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update
     */
    scheduleEndMs?: string;
    /**
     * The start timestamp in milliseconds to schedule a variable. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update
     */
    scheduleStartMs?: string;
    /**
     * Auto generated link to the tag manager UI
     */
    tagManagerUrl?: string;
    /**
     * GTM Variable Type. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update
     */
    type?: string;
    /**
     * The Variable ID uniquely identifies the GTM Variable.
     */
    variableId?: string;
    /**
     * GTM Workspace ID.
     */
    workspaceId?: string;
}
