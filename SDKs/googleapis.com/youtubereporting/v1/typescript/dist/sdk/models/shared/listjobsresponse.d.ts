import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
/**
 * Response message for ReportingService.ListJobs.
 */
export declare class ListJobsResponse extends SpeakeasyBase {
    /**
     * The list of jobs.
     */
    jobs?: Job[];
    /**
     * A token to retrieve next page of results. Pass this value in the ListJobsRequest.page_token field in the subsequent call to `ListJobs` method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
