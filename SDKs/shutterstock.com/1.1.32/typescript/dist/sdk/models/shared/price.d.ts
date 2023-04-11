import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Price
 */
export declare class Price extends SpeakeasyBase {
    /**
     * Floating-point amount of the calculated rev-share price in the currency local_currency
     */
    localAmount?: number;
    /**
     * Currency of the rev-share price that was calculated
     */
    localCurrency?: string;
}
