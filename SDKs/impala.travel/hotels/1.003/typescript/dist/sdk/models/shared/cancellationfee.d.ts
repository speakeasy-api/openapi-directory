import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * The way in which the cancellation fee is calculated. This can be "NONE" in case a full refund is paid out, "NON_REFUNDABLE" if no refund is paid out and the full amount is due, "PERCENTAGE" if a percentage of the total price for the stay is charged as cancellation fee, "NIGHTS" if a defined number of initial nights of the stay are charged in full as cancellation fee or "FLAT" in case a flat cancellation fee is charged.
 */
export declare enum CancellationFeeTypeEnum {
    NonRefundable = "NON_REFUNDABLE",
    Percentage = "PERCENTAGE",
    None = "NONE",
    Nights = "NIGHTS",
    Flat = "FLAT"
}
/**
 * Describes the costs associated with a cancellation and how it is calculated.
 */
export declare class CancellationFee extends SpeakeasyBase {
    /**
     * The value that is used in calculation of the cost. This could be 50 in case of a 50% fee being charged for a type "PERCENTAGE" or 2 in case of the initial two nights of the stay being charged in full as a fee if the type is "NIGHTS".
     */
    count?: number;
    /**
     * An amount of money in the specified currency (used in the context of prices, fees, refunds etc.)
     */
    price: Money;
    /**
     * The way in which the cancellation fee is calculated. This can be "NONE" in case a full refund is paid out, "NON_REFUNDABLE" if no refund is paid out and the full amount is due, "PERCENTAGE" if a percentage of the total price for the stay is charged as cancellation fee, "NIGHTS" if a defined number of initial nights of the stay are charged in full as cancellation fee or "FLAT" in case a flat cancellation fee is charged.
     */
    type: CancellationFeeTypeEnum;
}
