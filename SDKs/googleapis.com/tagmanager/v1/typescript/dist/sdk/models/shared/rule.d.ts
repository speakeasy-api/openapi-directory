import { SpeakeasyBase } from "../../../internal/utils";
import { Condition } from "./condition";
/**
 * Represents a Google Tag Manager Rule.
 */
export declare class Rule extends SpeakeasyBase {
    /**
     * GTM Account ID.
     */
    accountId?: string;
    /**
     * The list of conditions that make up this rule (implicit AND between them). @mutable tagmanager.accounts.containers.rules.create @mutable tagmanager.accounts.containers.rules.update
     */
    condition?: Condition[];
    /**
     * GTM Container ID.
     */
    containerId?: string;
    /**
     * The fingerprint of the GTM Rule as computed at storage time. This value is recomputed whenever the rule is modified.
     */
    fingerprint?: string;
    /**
     * Rule display name. @mutable tagmanager.accounts.containers.rules.create @mutable tagmanager.accounts.containers.rules.update
     */
    name?: string;
    /**
     * User notes on how to apply this rule in the container. @mutable tagmanager.accounts.containers.rules.create @mutable tagmanager.accounts.containers.rules.update
     */
    notes?: string;
    /**
     * The Rule ID uniquely identifies the GTM Rule.
     */
    ruleId?: string;
}
