import { SpeakeasyBase } from "../../../internal/utils";
/**
 * State of the auto-rollout process.
 */
export declare class GoogleCloudDialogflowCxV3beta1RolloutState extends SpeakeasyBase {
    /**
     * Start time of the current step.
     */
    startTime?: string;
    /**
     * Display name of the current auto rollout step.
     */
    step?: string;
    /**
     * Index of the current step in the auto rollout steps list.
     */
    stepIndex?: number;
}
