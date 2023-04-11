import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Conditions for actions to deal with task failures.
 */
export declare class ActionCondition extends SpeakeasyBase {
    /**
     * Exit codes of a task execution. If there are more than 1 exit codes, when task executes with any of the exit code in the list, the condition is met and the action will be executed.
     */
    exitCodes?: number[];
}
