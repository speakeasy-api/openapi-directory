import { SpeakeasyBase } from "../../../internal/utils";
import { Step } from "./step";
/**
 * Represents the current status of this execution.
 */
export declare class Status extends SpeakeasyBase {
    /**
     * A list of currently executing or last executed step names for the workflow execution currently running. If the workflow has succeeded or failed, this is the last attempted or executed step. Presently, if the current step is inside a subworkflow, the list only includes that step. In the future, the list will contain items for each step in the call stack, starting with the outermost step in the `main` subworkflow, and ending with the most deeply nested step.
     */
    currentSteps?: Step[];
}
