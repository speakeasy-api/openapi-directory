import { SpeakeasyBase } from "../../../internal/utils";
import { SourceLocation } from "./sourcelocation";
import { Variable } from "./variable";
/**
 * Represents a stack frame context.
 */
export declare class StackFrame extends SpeakeasyBase {
    /**
     * Set of arguments passed to this function. Note that this might not be populated for all stack frames.
     */
    arguments?: Variable[];
    /**
     * Demangled function name at the call site.
     */
    function?: string;
    /**
     * Set of local variables at the stack frame location. Note that this might not be populated for all stack frames.
     */
    locals?: Variable[];
    /**
     * Represents a location in the source code.
     */
    location?: SourceLocation;
}
