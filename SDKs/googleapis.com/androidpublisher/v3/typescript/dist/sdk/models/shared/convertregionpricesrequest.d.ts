import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * Request message for ConvertRegionPrices.
 */
export declare class ConvertRegionPricesRequest extends SpeakeasyBase {
    /**
     * Represents an amount of money with its currency type.
     */
    price?: Money;
}
