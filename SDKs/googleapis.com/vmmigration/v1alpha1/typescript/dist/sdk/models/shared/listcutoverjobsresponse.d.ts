import { SpeakeasyBase } from "../../../internal/utils";
import { CutoverJob } from "./cutoverjob";
/**
 * Response message for 'ListCutoverJobs' request.
 */
export declare class ListCutoverJobsResponse extends SpeakeasyBase {
    /**
     * Output only. The list of cutover jobs response.
     */
    cutoverJobs?: CutoverJob[];
    /**
     * Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * Output only. Locations that could not be reached.
     */
    unreachable?: string[];
}
