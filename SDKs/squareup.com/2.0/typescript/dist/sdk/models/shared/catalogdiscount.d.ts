import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * A discount applicable to items.
 */
export declare class CatalogDiscount extends SpeakeasyBase {
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
    amountMoney?: Money;
    /**
     * Indicates whether the discount is a fixed amount or percentage, or entered at the time of sale.
     */
    discountType?: string;
    /**
     * The color of the discount display label in the Square Point of Sale app. This must be a valid hex color code.
     */
    labelColor?: string;
    /**
     * Indicates whether this discount should reduce the price used to calculate tax.
     *
     * @remarks
     *
     * Most discounts should use `MODIFY_TAX_BASIS`. However, in some circumstances taxes must
     * be calculated based on an item's price, ignoring a particular discount. For example,
     * in many US jurisdictions, a manufacturer coupon or instant rebate reduces the price a
     * customer pays but does not reduce the sale price used to calculate how much sales tax is
     * due. In this case, the discount representing that manufacturer coupon should have
     * `DO_NOT_MODIFY_TAX_BASIS` for this field.
     *
     * If you are unsure whether you need to use this field, consult your tax professional.
     */
    modifyTaxBasis?: string;
    /**
     * The discount name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points.
     */
    name?: string;
    /**
     * The percentage of the discount as a string representation of a decimal number, using a `.` as the decimal
     *
     * @remarks
     * separator and without a `%` sign. A value of `7.5` corresponds to `7.5%`. Specify a percentage of `0` if `discount_type`
     * is `VARIABLE_PERCENTAGE`.
     *
     * Do not use this field for amount-based or variable discounts.
     */
    percentage?: string;
    /**
     * Indicates whether a mobile staff member needs to enter their PIN to apply the
     *
     * @remarks
     * discount to a payment in the Square Point of Sale app.
     */
    pinRequired?: boolean;
}
