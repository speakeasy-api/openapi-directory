import { SpeakeasyBase } from "../../../internal/utils";
import { SourcePosition } from "./sourceposition";
import { ValueCount } from "./valuecount";
/**
 * Describes where in a file an expression is found and what it was evaluated to over the course of its use.
 */
export declare class ExpressionReport extends SpeakeasyBase {
    /**
     * Subexpressions
     */
    children?: ExpressionReport[];
    /**
     * Position in the `Source` content including its line, column number, and an index of the `File` in the `Source` message. Used for debug purposes.
     */
    sourcePosition?: SourcePosition;
    /**
     * Values that this expression evaluated to when encountered.
     */
    values?: ValueCount[];
}
