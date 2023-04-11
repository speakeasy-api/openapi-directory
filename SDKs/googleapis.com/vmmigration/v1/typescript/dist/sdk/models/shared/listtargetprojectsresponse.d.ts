import { SpeakeasyBase } from "../../../internal/utils";
import { TargetProject } from "./targetproject";
/**
 * Response message for 'ListTargetProjects' call.
 */
export declare class ListTargetProjectsResponse extends SpeakeasyBase {
    /**
     * Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * Output only. The list of target response.
     */
    targetProjects?: TargetProject[];
    /**
     * Output only. Locations that could not be reached.
     */
    unreachable?: string[];
}
