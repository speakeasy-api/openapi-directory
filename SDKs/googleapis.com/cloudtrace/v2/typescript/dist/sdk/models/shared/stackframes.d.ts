import { SpeakeasyBase } from "../../../internal/utils";
import { StackFrame } from "./stackframe";
/**
 * A collection of stack frames, which can be truncated.
 */
export declare class StackFrames extends SpeakeasyBase {
    /**
     * The number of stack frames that were dropped because there were too many stack frames. If this value is 0, then no stack frames were dropped.
     */
    droppedFramesCount?: number;
    /**
     * Stack frames in this call stack.
     */
    frame?: StackFrame[];
}
