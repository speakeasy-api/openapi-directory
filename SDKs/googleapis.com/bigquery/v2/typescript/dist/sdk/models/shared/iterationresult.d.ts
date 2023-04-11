import { SpeakeasyBase } from "../../../internal/utils";
export declare class IterationResult extends SpeakeasyBase {
    /**
     * Time taken to run the iteration in milliseconds.
     */
    durationMs?: string;
    /**
     * Loss computed on the eval data at the end of iteration.
     */
    evalLoss?: number;
    /**
     * Index of the iteration, 0 based.
     */
    index?: number;
    /**
     * Learn rate used for this iteration.
     */
    learnRate?: number;
    /**
     * Loss computed on the training data at the end of iteration.
     */
    trainingLoss?: number;
}
