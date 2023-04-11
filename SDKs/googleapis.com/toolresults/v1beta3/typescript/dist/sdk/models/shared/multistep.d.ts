import { SpeakeasyBase } from "../../../internal/utils";
import { PrimaryStep } from "./primarystep";
/**
 * Details when multiple steps are run with the same configuration as a group.
 */
export declare class MultiStep extends SpeakeasyBase {
    /**
     * Unique int given to each step. Ranges from 0(inclusive) to total number of steps(exclusive). The primary step is 0.
     */
    multistepNumber?: number;
    /**
     * Stores rollup test status of multiple steps that were run as a group and outcome of each individual step.
     */
    primaryStep?: PrimaryStep;
    /**
     * Step Id of the primary (original) step, which might be this step.
     */
    primaryStepId?: string;
}
