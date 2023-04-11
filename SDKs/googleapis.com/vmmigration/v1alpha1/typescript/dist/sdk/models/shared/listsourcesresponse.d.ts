import { SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
/**
 * Response message for 'ListSources' request.
 */
export declare class ListSourcesResponse extends SpeakeasyBase {
    /**
     * Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * Output only. The list of sources response.
     */
    sources?: Source[];
    /**
     * Output only. Locations that could not be reached.
     */
    unreachable?: string[];
}
