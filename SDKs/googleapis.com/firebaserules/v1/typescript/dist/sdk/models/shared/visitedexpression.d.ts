import { SpeakeasyBase } from "../../../internal/utils";
import { SourcePosition } from "./sourceposition";
/**
 * Store the position and access outcome for an expression visited in rules.
 */
export declare class VisitedExpression extends SpeakeasyBase {
    /**
     * Position in the `Source` content including its line, column number, and an index of the `File` in the `Source` message. Used for debug purposes.
     */
    sourcePosition?: SourcePosition;
    /**
     * The evaluated value for the visited expression, e.g. true/false
     */
    value?: any;
}
