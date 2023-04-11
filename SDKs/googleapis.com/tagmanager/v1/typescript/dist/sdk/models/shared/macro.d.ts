import { SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";
/**
 * Represents a Google Tag Manager Macro.
 */
export declare class Macro extends SpeakeasyBase {
    /**
     * GTM Account ID.
     */
    accountId?: string;
    /**
     * GTM Container ID.
     */
    containerId?: string;
    /**
     * For mobile containers only: A list of rule IDs for disabling conditional macros; the macro is enabled if one of the enabling rules is true while all the disabling rules are false. Treated as an unordered set. @mutable tagmanager.accounts.containers.macros.create @mutable tagmanager.accounts.containers.macros.update
     */
    disablingRuleId?: string[];
    /**
     * For mobile containers only: A list of rule IDs for enabling conditional macros; the macro is enabled if one of the enabling rules is true while all the disabling rules are false. Treated as an unordered set. @mutable tagmanager.accounts.containers.macros.create @mutable tagmanager.accounts.containers.macros.update
     */
    enablingRuleId?: string[];
    /**
     * The fingerprint of the GTM Macro as computed at storage time. This value is recomputed whenever the macro is modified.
     */
    fingerprint?: string;
    /**
     * The Macro ID uniquely identifies the GTM Macro.
     */
    macroId?: string;
    /**
     * Macro display name. @mutable tagmanager.accounts.containers.macros.create @mutable tagmanager.accounts.containers.macros.update
     */
    name?: string;
    /**
     * User notes on how to apply this macro in the container. @mutable tagmanager.accounts.containers.macros.create @mutable tagmanager.accounts.containers.macros.update
     */
    notes?: string;
    /**
     * The macro's parameters. @mutable tagmanager.accounts.containers.macros.create @mutable tagmanager.accounts.containers.macros.update
     */
    parameter?: Parameter[];
    /**
     * Parent folder id.
     */
    parentFolderId?: string;
    /**
     * The end timestamp in milliseconds to schedule a macro. @mutable tagmanager.accounts.containers.macros.create @mutable tagmanager.accounts.containers.macros.update
     */
    scheduleEndMs?: string;
    /**
     * The start timestamp in milliseconds to schedule a macro. @mutable tagmanager.accounts.containers.macros.create @mutable tagmanager.accounts.containers.macros.update
     */
    scheduleStartMs?: string;
    /**
     * GTM Macro Type. @mutable tagmanager.accounts.containers.macros.create @mutable tagmanager.accounts.containers.macros.update
     */
    type?: string;
}
