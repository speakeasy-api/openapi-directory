import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * Pricing details for a service tier.
 */
export declare class RateTier extends SpeakeasyBase {
    /**
     * Represents an amount of money with its currency type.
     */
    price?: Money;
    /**
     * The magnitude of usage in which the tier interval begins. Example: "From 100 GiBi the price is $1 per byte" implies `start_amount` = 100
     */
    startAmount?: number;
}
