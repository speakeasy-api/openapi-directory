import { SpeakeasyBase } from "../../../internal/utils";
import { ScriptStackFrame } from "./scriptstackframe";
export declare class ScriptStatistics extends SpeakeasyBase {
    /**
     * [Output-only] Whether this child job was a statement or expression.
     */
    evaluationKind?: string;
    /**
     * Stack trace showing the line/column/procedure name of each frame on the stack at the point where the current evaluation happened. The leaf frame is first, the primary script is last. Never empty.
     */
    stackFrames?: ScriptStackFrame[];
}
