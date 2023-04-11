import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request object used by `AdvanceRollout`.
 */
export declare class AdvanceRolloutRequest extends SpeakeasyBase {
    /**
     * Required. The phase ID to advance the `Rollout` to.
     */
    phaseId?: string;
}
