import { SpeakeasyBase } from "../../../internal/utils";
import { ImportJob } from "./importjob";
/**
 * A response for listing import jobs.
 */
export declare class ListImportJobsResponse extends SpeakeasyBase {
    /**
     * The list of import jobs.
     */
    importJobs?: ImportJob[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
