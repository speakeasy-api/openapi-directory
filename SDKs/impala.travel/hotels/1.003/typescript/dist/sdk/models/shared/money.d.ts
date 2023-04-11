import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details of the currency.
 */
export declare class MoneyCurrencyDetails extends SpeakeasyBase {
    /**
     * Three-character currency code in ISO 4217 notation.
     */
    code: string;
}
/**
 * An amount of money in the specified currency (used in the context of prices, fees, refunds etc.)
 */
export declare class Money extends SpeakeasyBase {
    /**
     * Amount in the smallest unit of the currency. E.g. 234.56 € is expressed as 23456 (in Euro cents to avoid rounding errors in calculations).
     */
    amount: number;
    /**
     * Details of the currency.
     */
    currency: MoneyCurrencyDetails;
}
