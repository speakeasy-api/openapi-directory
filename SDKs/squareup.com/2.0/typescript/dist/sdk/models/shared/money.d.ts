import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an amount of money. `Money` fields can be signed or unsigned.
 *
 * @remarks
 * Fields that do not explicitly define whether they are signed or unsigned are
 * considered unsigned and can only hold positive amounts. For signed fields, the
 * sign of the value indicates the purpose of the money transfer. See
 * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
 * for more information.
 */
export declare class Money extends SpeakeasyBase {
    /**
     * The amount of money, in the smallest denomination of the currency
     *
     * @remarks
     * indicated by `currency`. For example, when `currency` is `USD`, `amount` is
     * in cents. Monetary amounts can be positive or negative. See the specific
     * field description to determine the meaning of the sign in a particular case.
     */
    amount?: number;
    /**
     * The type of currency, in __ISO 4217 format__. For example, the currency
     *
     * @remarks
     * code for US dollars is `USD`.
     *
     * See [Currency](https://developer.squareup.com/reference/square_2021-08-18/enums/Currency) for possible values.
     */
    currency?: string;
}
