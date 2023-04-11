import { SpeakeasyBase } from "../../../internal/utils";
import { Bidder } from "./bidder";
/**
 * A response containing bidders.
 */
export declare class ListBiddersResponse extends SpeakeasyBase {
    /**
     * List of bidders.
     */
    bidders?: Bidder[];
    /**
     * A token which can be passed to a subsequent call to the `ListBidders` method to retrieve the next page of results in ListBiddersRequest.pageToken.
     */
    nextPageToken?: string;
}
