import { SpeakeasyBase } from "../../../internal/utils";
import { IterationResult } from "./iterationresult";
export declare class MlStatistics extends SpeakeasyBase {
    /**
     * Results for all completed iterations.
     */
    iterationResults?: IterationResult[];
    /**
     * Maximum number of iterations specified as max_iterations in the 'CREATE MODEL' query. The actual number of iterations may be less than this number due to early stop.
     */
    maxIterations?: string;
}
