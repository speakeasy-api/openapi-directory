import { SpeakeasyBase } from "../../../internal/utils";
import { FixedOrPercent } from "./fixedorpercent";
/**
 * Message to configure the rollout at the zonal level for the OS policy assignment.
 */
export declare class OSPolicyAssignmentRollout extends SpeakeasyBase {
    /**
     * Message encapsulating a value that can be either absolute ("fixed") or relative ("percent") to a value.
     */
    disruptionBudget?: FixedOrPercent;
    /**
     * Required. This determines the minimum duration of time to wait after the configuration changes are applied through the current rollout. A VM continues to count towards the `disruption_budget` at least until this duration of time has passed after configuration changes are applied.
     */
    minWaitDuration?: string;
}
