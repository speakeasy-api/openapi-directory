import { SpeakeasyBase } from "../../../internal/utils";
import { StageSummary } from "./stagesummary";
/**
 * Information about the execution of a job.
 */
export declare class JobExecutionDetails extends SpeakeasyBase {
    /**
     * If present, this response does not contain all requested tasks. To obtain the next page of results, repeat the request with page_token set to this value.
     */
    nextPageToken?: string;
    /**
     * The stages of the job execution.
     */
    stages?: StageSummary[];
}
