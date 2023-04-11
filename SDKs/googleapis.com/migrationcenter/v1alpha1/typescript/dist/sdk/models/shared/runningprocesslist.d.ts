import { SpeakeasyBase } from "../../../internal/utils";
import { RunningProcess } from "./runningprocess";
/**
 * List of running guest OS processes.
 */
export declare class RunningProcessList extends SpeakeasyBase {
    /**
     * Running process entries.
     */
    processes?: RunningProcess[];
}
