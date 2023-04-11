import { SpeakeasyBase } from "../../../internal/utils";
import { BqmlTrainingRun } from "./bqmltrainingrun";
/**
 * [Output-only, Beta] Model options used for the first training run. These options are immutable for subsequent training runs. Default values are used for any options not specified in the input query.
 */
export declare class ModelDefinitionModelOptions extends SpeakeasyBase {
    labels?: string[];
    lossType?: string;
    modelType?: string;
}
export declare class ModelDefinition extends SpeakeasyBase {
    /**
     * [Output-only, Beta] Model options used for the first training run. These options are immutable for subsequent training runs. Default values are used for any options not specified in the input query.
     */
    modelOptions?: ModelDefinitionModelOptions;
    /**
     * [Output-only, Beta] Information about ml training runs, each training run comprises of multiple iterations and there may be multiple training runs for the model if warm start is used or if a user decides to continue a previously cancelled query.
     */
    trainingRuns?: BqmlTrainingRun[];
}
