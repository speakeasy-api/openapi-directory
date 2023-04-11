import { SpeakeasyBase } from "../../../internal/utils";
import { HttpRoute } from "./httproute";
/**
 * Response returned by the ListHttpRoutes method.
 */
export declare class ListHttpRoutesResponse extends SpeakeasyBase {
    /**
     * List of HttpRoute resources.
     */
    httpRoutes?: HttpRoute[];
    /**
     * If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.
     */
    nextPageToken?: string;
}
