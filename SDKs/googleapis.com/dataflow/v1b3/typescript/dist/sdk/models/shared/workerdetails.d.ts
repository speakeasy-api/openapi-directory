import { SpeakeasyBase } from "../../../internal/utils";
import { WorkItemDetails } from "./workitemdetails";
/**
 * Information about a worker
 */
export declare class WorkerDetails extends SpeakeasyBase {
    /**
     * Work items processed by this worker, sorted by time.
     */
    workItems?: WorkItemDetails[];
    /**
     * Name of this worker
     */
    workerName?: string;
}
