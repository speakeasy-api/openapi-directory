import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * A converted region price.
 */
export declare class ConvertedRegionPrice extends SpeakeasyBase {
    /**
     * Represents an amount of money with its currency type.
     */
    price?: Money;
    /**
     * The region code of the region.
     */
    regionCode?: string;
    /**
     * Represents an amount of money with its currency type.
     */
    taxAmount?: Money;
}
