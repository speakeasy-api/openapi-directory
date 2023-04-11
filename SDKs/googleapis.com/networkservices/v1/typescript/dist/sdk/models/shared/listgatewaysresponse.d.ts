import { SpeakeasyBase } from "../../../internal/utils";
import { Gateway } from "./gateway";
/**
 * Response returned by the ListGateways method.
 */
export declare class ListGatewaysResponse extends SpeakeasyBase {
    /**
     * List of Gateway resources.
     */
    gateways?: Gateway[];
    /**
     * If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.
     */
    nextPageToken?: string;
}
