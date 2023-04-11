import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
/**
 * Response message for `TranscoderService.ListJobs`.
 */
export declare class ListJobsResponse extends SpeakeasyBase {
    /**
     * List of jobs in the specified region.
     */
    jobs?: Job[];
    /**
     * The pagination token.
     */
    nextPageToken?: string;
}
