import { SpeakeasyBase } from "../../../internal/utils";
import { WorkerDetails } from "./workerdetails";
/**
 * Information about the workers and work items within a stage.
 */
export declare class StageExecutionDetails extends SpeakeasyBase {
    /**
     * If present, this response does not contain all requested tasks. To obtain the next page of results, repeat the request with page_token set to this value.
     */
    nextPageToken?: string;
    /**
     * Workers that have done work on the stage.
     */
    workers?: WorkerDetails[];
}
