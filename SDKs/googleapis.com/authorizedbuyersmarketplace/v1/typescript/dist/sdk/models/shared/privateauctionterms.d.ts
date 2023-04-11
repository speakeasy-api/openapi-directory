import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
/**
 * Pricing terms for Private Auctions.
 */
export declare class PrivateAuctionTermsInput extends SpeakeasyBase {
    /**
     * Represents a price and a pricing type for a deal.
     */
    floorPrice?: Price;
}
/**
 * Pricing terms for Private Auctions.
 */
export declare class PrivateAuctionTerms extends SpeakeasyBase {
    /**
     * Represents a price and a pricing type for a deal.
     */
    floorPrice?: Price;
    /**
     * Output only. True if open auction buyers are allowed to compete with invited buyers in this private auction.
     */
    openAuctionAllowed?: boolean;
}
