import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of price
 */
export declare enum PriceRangeTypeEnum {
    Standard = "standard"
}
/**
 * PriceRange
 */
export declare class PriceRange extends SpeakeasyBase {
    /**
     * Currency
     */
    currency?: string;
    /**
     * Maximum price
     */
    max?: number;
    /**
     * Minimum price
     */
    min?: number;
    /**
     * Type of price
     */
    type?: PriceRangeTypeEnum;
}
