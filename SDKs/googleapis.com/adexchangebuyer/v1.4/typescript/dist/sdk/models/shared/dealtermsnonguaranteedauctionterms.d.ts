import { SpeakeasyBase } from "../../../internal/utils";
import { PricePerBuyer } from "./priceperbuyer";
export declare class DealTermsNonGuaranteedAuctionTerms extends SpeakeasyBase {
    /**
     * True if open auction buyers are allowed to compete with invited buyers in this private auction (buyer-readonly).
     */
    autoOptimizePrivateAuction?: boolean;
    /**
     * Reserve price for the specified buyer.
     */
    reservePricePerBuyers?: PricePerBuyer[];
}
