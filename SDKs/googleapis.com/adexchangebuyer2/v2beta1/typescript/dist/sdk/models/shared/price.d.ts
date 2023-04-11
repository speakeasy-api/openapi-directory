import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * The pricing type for the deal/product. (default: CPM)
 */
export declare enum PricePricingTypeEnum {
    PricingTypeUnspecified = "PRICING_TYPE_UNSPECIFIED",
    CostPerMille = "COST_PER_MILLE",
    CostPerDay = "COST_PER_DAY"
}
/**
 * Represents a price and a pricing type for a product / deal.
 */
export declare class Price extends SpeakeasyBase {
    /**
     * Represents an amount of money with its currency type.
     */
    amount?: Money;
    /**
     * The pricing type for the deal/product. (default: CPM)
     */
    pricingType?: PricePricingTypeEnum;
}
