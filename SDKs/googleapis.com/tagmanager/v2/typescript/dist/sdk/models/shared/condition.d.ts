import { SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";
/**
 * The type of operator for this condition. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
 */
export declare enum ConditionTypeEnum {
    ConditionTypeUnspecified = "conditionTypeUnspecified",
    Equals = "equals",
    Contains = "contains",
    StartsWith = "startsWith",
    EndsWith = "endsWith",
    MatchRegex = "matchRegex",
    Greater = "greater",
    GreaterOrEquals = "greaterOrEquals",
    Less = "less",
    LessOrEquals = "lessOrEquals",
    CssSelector = "cssSelector",
    UrlMatches = "urlMatches"
}
/**
 * Represents a predicate.
 */
export declare class Condition extends SpeakeasyBase {
    /**
     * A list of named parameters (key/value), depending on the condition's type. Notes: - For binary operators, include parameters named arg0 and arg1 for specifying the left and right operands, respectively. - At this time, the left operand (arg0) must be a reference to a variable. - For case-insensitive Regex matching, include a boolean parameter named ignore_case that is set to true. If not specified or set to any other value, the matching will be case sensitive. - To negate an operator, include a boolean parameter named negate boolean parameter that is set to true. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
     */
    parameter?: Parameter[];
    /**
     * The type of operator for this condition. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
     */
    type?: ConditionTypeEnum;
}
