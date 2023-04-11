import { SpeakeasyBase } from "../../../internal/utils";
import { Duration } from "./duration";
export declare enum IndividualOutcomeOutcomeSummaryEnum {
    Unset = "unset",
    Success = "success",
    Failure = "failure",
    Inconclusive = "inconclusive",
    Skipped = "skipped",
    Flaky = "flaky"
}
/**
 * Step Id and outcome of each individual step that was run as a group with other steps with the same configuration.
 */
export declare class IndividualOutcome extends SpeakeasyBase {
    /**
     * Unique int given to each step. Ranges from 0(inclusive) to total number of steps(exclusive). The primary step is 0.
     */
    multistepNumber?: number;
    outcomeSummary?: IndividualOutcomeOutcomeSummaryEnum;
    /**
     *  A Duration represents a signed, fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". It is related to Timestamp in that the difference between two Timestamp values is a Duration and it can be added or subtracted from a Timestamp. Range is approximately +-10,000 years.
     */
    runDuration?: Duration;
    stepId?: string;
}
