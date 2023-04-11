import { SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";
/**
 * Response message for 'ListGroups' request.
 */
export declare class ListGroupsResponse extends SpeakeasyBase {
    /**
     * Output only. The list of groups response.
     */
    groups?: Group[];
    /**
     * Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * Output only. Locations that could not be reached.
     */
    unreachable?: string[];
}
