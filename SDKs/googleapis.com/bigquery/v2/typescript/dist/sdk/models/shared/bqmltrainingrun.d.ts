import { SpeakeasyBase } from "../../../internal/utils";
import { BqmlIterationResult } from "./bqmliterationresult";
/**
 * [Output-only, Beta] Training options used by this training run. These options are mutable for subsequent training runs. Default values are explicitly stored for options not specified in the input query of the first training run. For subsequent training runs, any option not explicitly specified in the input query will be copied from the previous training run.
 */
export declare class BqmlTrainingRunTrainingOptions extends SpeakeasyBase {
    earlyStop?: boolean;
    l1Reg?: number;
    l2Reg?: number;
    learnRate?: number;
    learnRateStrategy?: string;
    lineSearchInitLearnRate?: number;
    maxIteration?: string;
    minRelProgress?: number;
    warmStart?: boolean;
}
export declare class BqmlTrainingRun extends SpeakeasyBase {
    /**
     * [Output-only, Beta] List of each iteration results.
     */
    iterationResults?: BqmlIterationResult[];
    /**
     * [Output-only, Beta] Training run start time in milliseconds since the epoch.
     */
    startTime?: Date;
    /**
     * [Output-only, Beta] Different state applicable for a training run. IN PROGRESS: Training run is in progress. FAILED: Training run ended due to a non-retryable failure. SUCCEEDED: Training run successfully completed. CANCELLED: Training run cancelled by the user.
     */
    state?: string;
    /**
     * [Output-only, Beta] Training options used by this training run. These options are mutable for subsequent training runs. Default values are explicitly stored for options not specified in the input query of the first training run. For subsequent training runs, any option not explicitly specified in the input query will be copied from the previous training run.
     */
    trainingOptions?: BqmlTrainingRunTrainingOptions;
}
