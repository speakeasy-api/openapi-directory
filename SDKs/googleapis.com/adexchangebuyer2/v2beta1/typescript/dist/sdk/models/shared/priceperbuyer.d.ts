import { SpeakeasyBase } from "../../../internal/utils";
import { Buyer } from "./buyer";
import { Price } from "./price";
/**
 * Used to specify pricing rules for buyers/advertisers. Each PricePerBuyer in a product can become 0 or 1 deals. To check if there is a PricePerBuyer for a particular buyer or buyer/advertiser pair, we look for the most specific matching rule - we first look for a rule matching the buyer and advertiser, next a rule with the buyer but an empty advertiser list, and otherwise look for a matching rule where no buyer is set.
 */
export declare class PricePerBuyer extends SpeakeasyBase {
    /**
     * The list of advertisers for this price when associated with this buyer. If empty, all advertisers with this buyer pay this price.
     */
    advertiserIds?: string[];
    /**
     * Represents a buyer of inventory. Each buyer is identified by a unique Authorized Buyers account ID.
     */
    buyer?: Buyer;
    /**
     * Represents a price and a pricing type for a product / deal.
     */
    price?: Price;
}
