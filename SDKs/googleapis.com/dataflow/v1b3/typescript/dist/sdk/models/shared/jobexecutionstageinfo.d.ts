import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about how a particular google.dataflow.v1beta3.Step will be executed.
 */
export declare class JobExecutionStageInfo extends SpeakeasyBase {
    /**
     * The steps associated with the execution stage. Note that stages may have several steps, and that a given step might be run by more than one stage.
     */
    stepName?: string[];
}
