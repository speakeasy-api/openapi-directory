import { SpeakeasyBase } from "../../../internal/utils";
import { AuctionPackage } from "./auctionpackage";
/**
 * Response message for listing auction packages.
 */
export declare class ListAuctionPackagesResponse extends SpeakeasyBase {
    /**
     * The list of auction packages.
     */
    auctionPackages?: AuctionPackage[];
    /**
     * Continuation token for fetching the next page of results. Pass this value in the ListAuctionPackagesRequest.pageToken field in the subsequent call to the `ListAuctionPackages` method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
