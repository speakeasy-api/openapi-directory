import { SpeakeasyBase } from "../../../internal/utils";
import { JobRun } from "./jobrun";
/**
 * ListJobRunsResponse is the response object returned by `ListJobRuns`.
 */
export declare class ListJobRunsResponse extends SpeakeasyBase {
    /**
     * The `JobRun` objects.
     */
    jobRuns?: JobRun[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached
     */
    unreachable?: string[];
}
