import { SpeakeasyBase } from "../../../internal/utils";
import { ActionCondition } from "./actioncondition";
/**
 * Action to execute when ActionCondition is true. When RETRY_TASK is specified, we will retry failed tasks if we notice any exit code match and fail tasks if no match is found. Likewise, when FAIL_TASK is specified, we will fail tasks if we notice any exit code match and retry tasks if no match is found.
 */
export declare enum LifecyclePolicyActionEnum {
    ActionUnspecified = "ACTION_UNSPECIFIED",
    RetryTask = "RETRY_TASK",
    FailTask = "FAIL_TASK"
}
/**
 * LifecyclePolicy describes how to deal with task failures based on different conditions.
 */
export declare class LifecyclePolicy extends SpeakeasyBase {
    /**
     * Action to execute when ActionCondition is true. When RETRY_TASK is specified, we will retry failed tasks if we notice any exit code match and fail tasks if no match is found. Likewise, when FAIL_TASK is specified, we will fail tasks if we notice any exit code match and retry tasks if no match is found.
     */
    action?: LifecyclePolicyActionEnum;
    /**
     * Conditions for actions to deal with task failures.
     */
    actionCondition?: ActionCondition;
}
