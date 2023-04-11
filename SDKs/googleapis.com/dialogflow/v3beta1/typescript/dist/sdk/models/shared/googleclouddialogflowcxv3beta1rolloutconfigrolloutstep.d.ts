import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A single rollout step with specified traffic allocation.
 */
export declare class GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep extends SpeakeasyBase {
    /**
     * The name of the rollout step;
     */
    displayName?: string;
    /**
     * The minimum time that this step should last. Should be longer than 1 hour. If not set, the default minimum duration for each step will be 1 hour.
     */
    minDuration?: string;
    /**
     * The percentage of traffic allocated to the flow version of this rollout step. (0%, 100%].
     */
    trafficPercent?: number;
}
