import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about a value of money.
 *
 * @remarks
 *
 */
export declare class MoneyObject extends SpeakeasyBase {
    /**
     * The ISO 4217 currency code.
     *
     * @remarks
     *
     */
    currencyCode: string;
    /**
     * The amount of money, formatted as a string in the relevant currency.
     *
     * @remarks
     * For example, for an Australian dollar value of $10.56, this field will
     * be `"10.56"`. The currency symbol is not included in the string.
     *
     */
    value: string;
    /**
     * The amount of money in the smallest denomination for the currency, as a
     *
     * @remarks
     * 64-bit integer.  For example, for an Australian dollar value of $10.56,
     * this field will be `1056`.
     *
     */
    valueInBaseUnits: number;
}
