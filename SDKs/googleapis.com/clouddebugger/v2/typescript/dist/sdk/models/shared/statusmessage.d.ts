import { SpeakeasyBase } from "../../../internal/utils";
import { FormatMessage } from "./formatmessage";
/**
 * Reference to which the message applies.
 */
export declare enum StatusMessageRefersToEnum {
    Unspecified = "UNSPECIFIED",
    BreakpointSourceLocation = "BREAKPOINT_SOURCE_LOCATION",
    BreakpointCondition = "BREAKPOINT_CONDITION",
    BreakpointExpression = "BREAKPOINT_EXPRESSION",
    BreakpointAge = "BREAKPOINT_AGE",
    BreakpointCanaryFailed = "BREAKPOINT_CANARY_FAILED",
    VariableName = "VARIABLE_NAME",
    VariableValue = "VARIABLE_VALUE"
}
/**
 * Represents a contextual status message. The message can indicate an error or informational status, and refer to specific parts of the containing object. For example, the `Breakpoint.status` field can indicate an error referring to the `BREAKPOINT_SOURCE_LOCATION` with the message `Location not found`.
 */
export declare class StatusMessage extends SpeakeasyBase {
    /**
     * Represents a message with parameters.
     */
    description?: FormatMessage;
    /**
     * Distinguishes errors from informational messages.
     */
    isError?: boolean;
    /**
     * Reference to which the message applies.
     */
    refersTo?: StatusMessageRefersToEnum;
}
