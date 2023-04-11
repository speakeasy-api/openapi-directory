import { SpeakeasyBase } from "../../../internal/utils";
export declare class ScriptStackFrame extends SpeakeasyBase {
    /**
     * [Output-only] One-based end column.
     */
    endColumn?: number;
    /**
     * [Output-only] One-based end line.
     */
    endLine?: number;
    /**
     * [Output-only] Name of the active procedure, empty if in a top-level script.
     */
    procedureId?: string;
    /**
     * [Output-only] One-based start column.
     */
    startColumn?: number;
    /**
     * [Output-only] One-based start line.
     */
    startLine?: number;
    /**
     * [Output-only] Text of the current statement/expression.
     */
    text?: string;
}
