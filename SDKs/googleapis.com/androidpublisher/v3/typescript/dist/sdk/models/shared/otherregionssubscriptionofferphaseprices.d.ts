import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * Pricing information for any new locations Play may launch in.
 */
export declare class OtherRegionsSubscriptionOfferPhasePrices extends SpeakeasyBase {
    /**
     * Represents an amount of money with its currency type.
     */
    eurPrice?: Money;
    /**
     * Represents an amount of money with its currency type.
     */
    usdPrice?: Money;
}
