import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3RolloutConfigRolloutStep } from "./googleclouddialogflowcxv3rolloutconfigrolloutstep";
/**
 * The configuration for auto rollout.
 */
export declare class GoogleCloudDialogflowCxV3RolloutConfig extends SpeakeasyBase {
    /**
     * The conditions that are used to evaluate the failure of a rollout step. If not specified, no rollout steps will fail. E.g. "containment_rate < 10% OR average_turn_count < 3". See the [conditions reference](https://cloud.google.com/dialogflow/cx/docs/reference/condition).
     */
    failureCondition?: string;
    /**
     * The conditions that are used to evaluate the success of a rollout step. If not specified, all rollout steps will proceed to the next one unless failure conditions are met. E.g. "containment_rate > 60% AND callback_rate < 20%". See the [conditions reference](https://cloud.google.com/dialogflow/cx/docs/reference/condition).
     */
    rolloutCondition?: string;
    /**
     * Steps to roll out a flow version. Steps should be sorted by percentage in ascending order.
     */
    rolloutSteps?: GoogleCloudDialogflowCxV3RolloutConfigRolloutStep[];
}
