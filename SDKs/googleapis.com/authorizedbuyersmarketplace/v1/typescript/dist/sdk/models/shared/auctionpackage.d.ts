import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines a segment of inventory that buyer wants to buy. It's created by buyer and could be shared with multiple buyers.
 */
export declare class AuctionPackage extends SpeakeasyBase {
    /**
     * Output only. Time the auction package was created.
     */
    createTime?: string;
    /**
     * Output only. The buyer that created this auction package. Format: `buyers/{buyerAccountId}`
     */
    creator?: string;
    /**
     * Output only. A description of the auction package.
     */
    description?: string;
    /**
     * The display_name assigned to the auction package.
     */
    displayName?: string;
    /**
     * Immutable. The unique identifier for the auction package. Format: `buyers/{accountId}/auctionPackages/{auctionPackageId}` The auction_package_id part of name is sent in the BidRequest to all RTB bidders and is returned as deal_id by the bidder in the BidResponse.
     */
    name?: string;
    /**
     * Output only. The list of clients of the current buyer that are subscribed to the AuctionPackage. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}`
     */
    subscribedClients?: string[];
    /**
     * Output only. Time the auction package was last updated. This value is only increased when this auction package is updated but never when a buyer subscribed.
     */
    updateTime?: string;
}
