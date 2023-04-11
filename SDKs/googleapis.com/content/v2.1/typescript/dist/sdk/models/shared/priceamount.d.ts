import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The price represented as a number and currency.
 */
export declare class PriceAmount extends SpeakeasyBase {
    /**
     * The currency of the price.
     */
    currency?: string;
    /**
     * The price represented as a number.
     */
    value?: string;
}
