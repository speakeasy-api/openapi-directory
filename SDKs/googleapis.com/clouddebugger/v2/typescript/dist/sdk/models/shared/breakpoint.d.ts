import { SpeakeasyBase } from "../../../internal/utils";
import { SourceLocation } from "./sourcelocation";
import { StackFrame } from "./stackframe";
import { StatusMessage } from "./statusmessage";
import { Variable } from "./variable";
/**
 * Action that the agent should perform when the code at the breakpoint location is hit.
 */
export declare enum BreakpointActionEnum {
    Capture = "CAPTURE",
    Log = "LOG"
}
/**
 * Indicates the severity of the log. Only relevant when action is `LOG`.
 */
export declare enum BreakpointLogLevelEnum {
    Info = "INFO",
    Warning = "WARNING",
    Error = "ERROR"
}
/**
 * The current state of the breakpoint.
 */
export declare enum BreakpointStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    StateCanaryPendingAgents = "STATE_CANARY_PENDING_AGENTS",
    StateCanaryActive = "STATE_CANARY_ACTIVE",
    StateRollingToAll = "STATE_ROLLING_TO_ALL",
    StateIsFinal = "STATE_IS_FINAL"
}
/**
 * ------------------------------------------------------------------------------ ## Breakpoint (the resource) Represents the breakpoint specification, status and results.
 */
export declare class Breakpoint extends SpeakeasyBase {
    /**
     * Action that the agent should perform when the code at the breakpoint location is hit.
     */
    action?: BreakpointActionEnum;
    /**
     * The deadline for the breakpoint to stay in CANARY_ACTIVE state. The value is meaningless when the breakpoint is not in CANARY_ACTIVE state.
     */
    canaryExpireTime?: string;
    /**
     * Condition that triggers the breakpoint. The condition is a compound boolean expression composed using expressions in a programming language at the source location.
     */
    condition?: string;
    /**
     * Time this breakpoint was created by the server in seconds resolution.
     */
    createTime?: string;
    /**
     * Values of evaluated expressions at breakpoint time. The evaluated expressions appear in exactly the same order they are listed in the `expressions` field. The `name` field holds the original expression text, the `value` or `members` field holds the result of the evaluated expression. If the expression cannot be evaluated, the `status` inside the `Variable` will indicate an error and contain the error text.
     */
    evaluatedExpressions?: Variable[];
    /**
     * List of read-only expressions to evaluate at the breakpoint location. The expressions are composed using expressions in the programming language at the source location. If the breakpoint action is `LOG`, the evaluated expressions are included in log statements.
     */
    expressions?: string[];
    /**
     * Time this breakpoint was finalized as seen by the server in seconds resolution.
     */
    finalTime?: string;
    /**
     * Breakpoint identifier, unique in the scope of the debuggee.
     */
    id?: string;
    /**
     * When true, indicates that this is a final result and the breakpoint state will not change from here on.
     */
    isFinalState?: boolean;
    /**
     * A set of custom breakpoint properties, populated by the agent, to be displayed to the user.
     */
    labels?: Record<string, string>;
    /**
     * Represents a location in the source code.
     */
    location?: SourceLocation;
    /**
     * Indicates the severity of the log. Only relevant when action is `LOG`.
     */
    logLevel?: BreakpointLogLevelEnum;
    /**
     * Only relevant when action is `LOG`. Defines the message to log when the breakpoint hits. The message may include parameter placeholders `$0`, `$1`, etc. These placeholders are replaced with the evaluated value of the appropriate expression. Expressions not referenced in `log_message_format` are not logged. Example: `Message received, id = $0, count = $1` with `expressions` = `[ message.id, message.count ]`.
     */
    logMessageFormat?: string;
    /**
     * The stack at breakpoint time, where stack_frames[0] represents the most recently entered function.
     */
    stackFrames?: StackFrame[];
    /**
     * The current state of the breakpoint.
     */
    state?: BreakpointStateEnum;
    /**
     * Represents a contextual status message. The message can indicate an error or informational status, and refer to specific parts of the containing object. For example, the `Breakpoint.status` field can indicate an error referring to the `BREAKPOINT_SOURCE_LOCATION` with the message `Location not found`.
     */
    status?: StatusMessage;
    /**
     * E-mail address of the user that created this breakpoint
     */
    userEmail?: string;
    /**
     * The `variable_table` exists to aid with computation, memory and network traffic optimization. It enables storing a variable once and reference it from multiple variables, including variables stored in the `variable_table` itself. For example, the same `this` object, which may appear at many levels of the stack, can have all of its data stored once in this table. The stack frame variables then would hold only a reference to it. The variable `var_table_index` field is an index into this repeated field. The stored objects are nameless and get their name from the referencing variable. The effective variable is a merge of the referencing variable and the referenced variable.
     */
    variableTable?: Variable[];
}
