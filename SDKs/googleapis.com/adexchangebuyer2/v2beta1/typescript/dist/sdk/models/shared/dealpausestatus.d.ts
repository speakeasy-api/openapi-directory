import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The role of the person who first paused this deal.
 */
export declare enum DealPauseStatusFirstPausedByEnum {
    BuyerSellerRoleUnspecified = "BUYER_SELLER_ROLE_UNSPECIFIED",
    Buyer = "BUYER",
    Seller = "SELLER"
}
/**
 * Tracks which parties (if any) have paused a deal. The deal is considered paused if either hasBuyerPaused or hasSellPaused is true.
 */
export declare class DealPauseStatus extends SpeakeasyBase {
    /**
     * The buyer's reason for pausing, if the buyer paused the deal.
     */
    buyerPauseReason?: string;
    /**
     * The role of the person who first paused this deal.
     */
    firstPausedBy?: DealPauseStatusFirstPausedByEnum;
    /**
     * True, if the buyer has paused the deal unilaterally.
     */
    hasBuyerPaused?: boolean;
    /**
     * True, if the seller has paused the deal unilaterally.
     */
    hasSellerPaused?: boolean;
    /**
     * The seller's reason for pausing, if the seller paused the deal.
     */
    sellerPauseReason?: string;
}
