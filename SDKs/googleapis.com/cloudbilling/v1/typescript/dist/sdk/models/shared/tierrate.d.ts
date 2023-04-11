import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * The price rate indicating starting usage and its corresponding price.
 */
export declare class TierRate extends SpeakeasyBase {
    /**
     * Usage is priced at this rate only after this amount. Example: start_usage_amount of 10 indicates that the usage will be priced at the unit_price after the first 10 usage_units.
     */
    startUsageAmount?: number;
    /**
     * Represents an amount of money with its currency type.
     */
    unitPrice?: Money;
}
