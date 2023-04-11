import { SpeakeasyBase } from "../../../internal/utils";
import { Fleet } from "./fleet";
/**
 * Response message for the `GkeHub.ListFleetsResponse` method.
 */
export declare class ListFleetsResponse extends SpeakeasyBase {
    /**
     * The list of matching fleets.
     */
    fleets?: Fleet[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. The token is only valid for 1h.
     */
    nextPageToken?: string;
}
