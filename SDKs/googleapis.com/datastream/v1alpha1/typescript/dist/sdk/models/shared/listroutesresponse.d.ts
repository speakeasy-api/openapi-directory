import { SpeakeasyBase } from "../../../internal/utils";
import { Route } from "./route";
/**
 * route list response
 */
export declare class ListRoutesResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * List of Routes.
     */
    routes?: Route[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
