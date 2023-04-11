import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * Pricing information for any new locations Play may launch in.
 */
export declare class OtherRegionsBasePlanConfig extends SpeakeasyBase {
    /**
     * Represents an amount of money with its currency type.
     */
    eurPrice?: Money;
    /**
     * Whether the base plan is available for new subscribers in any new locations Play may launch in. If not specified, this will default to false.
     */
    newSubscriberAvailability?: boolean;
    /**
     * Represents an amount of money with its currency type.
     */
    usdPrice?: Money;
}
