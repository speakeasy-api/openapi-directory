import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
/**
 * A list of jobs in a project.
 */
export declare class ListJobsResponse extends SpeakeasyBase {
    /**
     * Output only. Jobs list.
     */
    jobs?: Job[];
    /**
     * Optional. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent ListJobsRequest.
     */
    nextPageToken?: string;
}
