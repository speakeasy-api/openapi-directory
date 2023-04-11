import { SpeakeasyBase } from "../../../internal/utils";
import { Endpoint } from "./endpoint";
/**
 * Successful response
 */
export declare class ListEndpointsResponse extends SpeakeasyBase {
    /**
     * The list of endpoints response.
     */
    endpoints?: Endpoint[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
