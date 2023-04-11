import { SpeakeasyBase } from "../../../internal/utils";
import { CloneJob } from "./clonejob";
/**
 * Response message for 'ListCloneJobs' request.
 */
export declare class ListCloneJobsResponse extends SpeakeasyBase {
    /**
     * Output only. The list of clone jobs response.
     */
    cloneJobs?: CloneJob[];
    /**
     * Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * Output only. Locations that could not be reached.
     */
    unreachable?: string[];
}
