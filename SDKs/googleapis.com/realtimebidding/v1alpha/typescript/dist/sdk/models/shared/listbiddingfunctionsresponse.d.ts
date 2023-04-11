import { SpeakeasyBase } from "../../../internal/utils";
import { BiddingFunction } from "./biddingfunction";
/**
 * A response containing a list of a bidder's bidding functions.
 */
export declare class ListBiddingFunctionsResponse extends SpeakeasyBase {
    /**
     * A list of a bidder's bidding functions.
     */
    biddingFunctions?: BiddingFunction[];
    /**
     * A token which can be passed to a subsequent call to the `ListBiddingFunctions` method to retrieve the next page of results in ListBiddingFunctionsRequest.pageToken.
     */
    nextPageToken?: string;
}
