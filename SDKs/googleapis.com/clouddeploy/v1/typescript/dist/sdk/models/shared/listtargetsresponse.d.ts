import { SpeakeasyBase } from "../../../internal/utils";
import { Target } from "./target";
/**
 * The response object from `ListTargets`.
 */
export declare class ListTargetsResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The `Target` objects.
     */
    targets?: Target[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
