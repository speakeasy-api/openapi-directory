import { SpeakeasyBase } from "../../../internal/utils";
import { Condition } from "./condition";
import { LogConfig } from "./logconfig";
/**
 * This is deprecated and has no effect. Do not use.
 */
export declare enum RuleActionEnum {
    Allow = "ALLOW",
    AllowWithLog = "ALLOW_WITH_LOG",
    Deny = "DENY",
    DenyWithLog = "DENY_WITH_LOG",
    Log = "LOG",
    NoAction = "NO_ACTION"
}
/**
 * This is deprecated and has no effect. Do not use.
 */
export declare class Rule extends SpeakeasyBase {
    /**
     * This is deprecated and has no effect. Do not use.
     */
    action?: RuleActionEnum;
    /**
     * This is deprecated and has no effect. Do not use.
     */
    conditions?: Condition[];
    /**
     * This is deprecated and has no effect. Do not use.
     */
    description?: string;
    /**
     * This is deprecated and has no effect. Do not use.
     */
    ins?: string[];
    /**
     * This is deprecated and has no effect. Do not use.
     */
    logConfigs?: LogConfig[];
    /**
     * This is deprecated and has no effect. Do not use.
     */
    notIns?: string[];
    /**
     * This is deprecated and has no effect. Do not use.
     */
    permissions?: string[];
}
