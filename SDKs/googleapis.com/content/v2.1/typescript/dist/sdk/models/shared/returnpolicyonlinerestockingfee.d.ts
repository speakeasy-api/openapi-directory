import { SpeakeasyBase } from "../../../internal/utils";
import { PriceAmount } from "./priceamount";
/**
 * The restocking fee. This can either be a fixed fee or a micro percent.
 */
export declare class ReturnPolicyOnlineRestockingFee extends SpeakeasyBase {
    /**
     * The price represented as a number and currency.
     */
    fixedFee?: PriceAmount;
    /**
     * Percent of total price in micros. 15,000,000 means 15% of the total price would be charged.
     */
    microPercent?: number;
}
