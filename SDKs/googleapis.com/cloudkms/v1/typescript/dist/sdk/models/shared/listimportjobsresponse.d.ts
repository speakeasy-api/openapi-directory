import { SpeakeasyBase } from "../../../internal/utils";
import { ImportJob } from "./importjob";
/**
 * Response message for KeyManagementService.ListImportJobs.
 */
export declare class ListImportJobsResponse extends SpeakeasyBase {
    /**
     * The list of ImportJobs.
     */
    importJobs?: ImportJob[];
    /**
     * A token to retrieve next page of results. Pass this value in ListImportJobsRequest.page_token to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * The total number of ImportJobs that matched the query.
     */
    totalSize?: number;
}
