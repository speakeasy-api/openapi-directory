import { SpeakeasyBase } from "../../../internal/utils";
import { Point } from "./point";
/**
 * Information about the progress of some component of job execution.
 */
export declare class ProgressTimeseries extends SpeakeasyBase {
    /**
     * The current progress of the component, in the range [0,1].
     */
    currentProgress?: number;
    /**
     * History of progress for the component. Points are sorted by time.
     */
    dataPoints?: Point[];
}
