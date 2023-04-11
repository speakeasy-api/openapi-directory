import { SpeakeasyBase } from "../../../internal/utils";
import { PipelineReadyCondition } from "./pipelinereadycondition";
import { TargetsPresentCondition } from "./targetspresentcondition";
import { TargetsTypeCondition } from "./targetstypecondition";
/**
 * PipelineCondition contains all conditions relevant to a Delivery Pipeline.
 */
export declare class PipelineCondition extends SpeakeasyBase {
    /**
     * PipelineReadyCondition contains information around the status of the Pipeline.
     */
    pipelineReadyCondition?: PipelineReadyCondition;
    /**
     * TargetsPresentCondition contains information on any Targets defined in the Delivery Pipeline that do not actually exist.
     */
    targetsPresentCondition?: TargetsPresentCondition;
    /**
     * TargetsTypeCondition contains information on whether the Targets defined in the Delivery Pipeline are of the same type.
     */
    targetsTypeCondition?: TargetsTypeCondition;
}
