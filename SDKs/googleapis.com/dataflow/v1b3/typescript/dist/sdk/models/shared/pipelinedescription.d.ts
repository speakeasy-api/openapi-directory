import { SpeakeasyBase } from "../../../internal/utils";
import { DisplayData } from "./displaydata";
import { ExecutionStageSummary } from "./executionstagesummary";
import { TransformSummary } from "./transformsummary";
/**
 * A descriptive representation of submitted pipeline as well as the executed form. This data is provided by the Dataflow service for ease of visualizing the pipeline and interpreting Dataflow provided metrics.
 */
export declare class PipelineDescription extends SpeakeasyBase {
    /**
     * Pipeline level display data.
     */
    displayData?: DisplayData[];
    /**
     * Description of each stage of execution of the pipeline.
     */
    executionPipelineStage?: ExecutionStageSummary[];
    /**
     * Description of each transform in the pipeline and collections between them.
     */
    originalPipelineTransform?: TransformSummary[];
    /**
     * A hash value of the submitted pipeline portable graph step names if exists.
     */
    stepNamesHash?: string;
}
