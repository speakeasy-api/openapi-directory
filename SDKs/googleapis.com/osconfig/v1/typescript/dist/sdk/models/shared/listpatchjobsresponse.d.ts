import { SpeakeasyBase } from "../../../internal/utils";
import { PatchJob } from "./patchjob";
/**
 * A response message for listing patch jobs.
 */
export declare class ListPatchJobsResponse extends SpeakeasyBase {
    /**
     * A pagination token that can be used to get the next page of results.
     */
    nextPageToken?: string;
    /**
     * The list of patch jobs.
     */
    patchJobs?: PatchJob[];
}
