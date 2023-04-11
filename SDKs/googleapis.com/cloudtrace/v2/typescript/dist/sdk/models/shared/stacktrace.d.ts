import { SpeakeasyBase } from "../../../internal/utils";
import { StackFrames } from "./stackframes";
/**
 * A call stack appearing in a trace.
 */
export declare class StackTrace extends SpeakeasyBase {
    /**
     * A collection of stack frames, which can be truncated.
     */
    stackFrames?: StackFrames;
    /**
     * The hash ID is used to conserve network bandwidth for duplicate stack traces within a single trace. Often multiple spans will have identical stack traces. The first occurrence of a stack trace should contain both the `stackFrame` content and a value in `stackTraceHashId`. Subsequent spans within the same request can refer to that stack trace by only setting `stackTraceHashId`.
     */
    stackTraceHashId?: string;
}
