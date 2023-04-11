import { SpeakeasyBase } from "../../../internal/utils";
/**
 * PipelineReadyCondition contains information around the status of the Pipeline.
 */
export declare class PipelineReadyCondition extends SpeakeasyBase {
    /**
     * True if the Pipeline is in a valid state. Otherwise at least one condition in `PipelineCondition` is in an invalid state. Iterate over those conditions and see which condition(s) has status = false to find out what is wrong with the Pipeline.
     */
    status?: boolean;
    /**
     * Last time the condition was updated.
     */
    updateTime?: string;
}
