import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * The pricing type for the deal.
 */
export declare enum PriceTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Cpm = "CPM",
    Cpd = "CPD"
}
/**
 * Represents a price and a pricing type for a deal.
 */
export declare class Price extends SpeakeasyBase {
    /**
     * Represents an amount of money with its currency type.
     */
    amount?: Money;
    /**
     * The pricing type for the deal.
     */
    type?: PriceTypeEnum;
}
