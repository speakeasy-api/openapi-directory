import { SpeakeasyBase } from "../../../internal/utils";
import { Condition } from "./condition";
import { LogConfig } from "./logconfig";
/**
 * Required
 */
export declare enum RuleActionEnum {
    NoAction = "NO_ACTION",
    Allow = "ALLOW",
    AllowWithLog = "ALLOW_WITH_LOG",
    Deny = "DENY",
    DenyWithLog = "DENY_WITH_LOG",
    Log = "LOG"
}
/**
 * A rule to be applied in a Policy.
 */
export declare class Rule extends SpeakeasyBase {
    /**
     * Required
     */
    action?: RuleActionEnum;
    /**
     * Additional restrictions that must be met. All conditions must pass for the rule to match.
     */
    conditions?: Condition[];
    /**
     * Human-readable description of the rule.
     */
    description?: string;
    /**
     * If one or more 'in' clauses are specified, the rule matches if the PRINCIPAL/AUTHORITY_SELECTOR is in at least one of these entries.
     */
    in?: string[];
    /**
     * The config returned to callers of CheckPolicy for any entries that match the LOG action.
     */
    logConfig?: LogConfig[];
    /**
     * If one or more 'not_in' clauses are specified, the rule matches if the PRINCIPAL/AUTHORITY_SELECTOR is in none of the entries. The format for in and not_in entries can be found at in the Local IAM documentation (see go/local-iam#features).
     */
    notIn?: string[];
    /**
     * A permission is a string of form '..' (e.g., 'storage.buckets.list'). A value of '*' matches all permissions, and a verb part of '*' (e.g., 'storage.buckets.*') matches all verbs.
     */
    permissions?: string[];
}
