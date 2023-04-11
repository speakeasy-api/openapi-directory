import { SpeakeasyBase } from "../../../internal/utils";
import { IndividualOutcome } from "./individualoutcome";
/**
 * Rollup test status of multiple steps that were run with the same configuration as a group.
 */
export declare enum PrimaryStepRollUpEnum {
    Unset = "unset",
    Success = "success",
    Failure = "failure",
    Inconclusive = "inconclusive",
    Skipped = "skipped",
    Flaky = "flaky"
}
/**
 * Stores rollup test status of multiple steps that were run as a group and outcome of each individual step.
 */
export declare class PrimaryStep extends SpeakeasyBase {
    /**
     * Step Id and outcome of each individual step.
     */
    individualOutcome?: IndividualOutcome[];
    /**
     * Rollup test status of multiple steps that were run with the same configuration as a group.
     */
    rollUp?: PrimaryStepRollUpEnum;
}
