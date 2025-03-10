import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
/**
 * Response message for listing jobs using ListJobs.
 */
export declare class ListJobsResponse extends SpeakeasyBase {
    /**
     * The list of jobs.
     */
    jobs?: Job[];
    /**
     * A token to retrieve next page of results. Pass this value in the page_token field in the subsequent call to ListJobs to retrieve the next page of results. If this is empty it indicates that there are no more results through which to paginate. The page token is valid for only 2 hours.
     */
    nextPageToken?: string;
}
