import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
import { OrderLineItemAppliedDiscount } from "./orderlineitemapplieddiscount";
import { OrderLineItemAppliedTax } from "./orderlineitemappliedtax";
import { OrderQuantityUnit } from "./orderquantityunit";
import { OrderReturnLineItemModifier } from "./orderreturnlineitemmodifier";
/**
 * The line item being returned in an order.
 */
export declare class OrderReturnLineItem extends SpeakeasyBase {
    /**
     * The list of references to `OrderReturnDiscount` entities applied to the return line item. Each
     *
     * @remarks
     * `OrderLineItemAppliedDiscount` has a `discount_uid` that references the `uid` of a top-level
     * `OrderReturnDiscount` applied to the return line item. On reads, the applied amount
     * is populated.
     */
    appliedDiscounts?: OrderLineItemAppliedDiscount[];
    /**
     * The list of references to `OrderReturnTax` entities applied to the return line item. Each
     *
     * @remarks
     * `OrderLineItemAppliedTax` has a `tax_uid` that references the `uid` of a top-level
     * `OrderReturnTax` applied to the return line item. On reads, the applied amount
     * is populated.
     */
    appliedTaxes?: OrderLineItemAppliedTax[];
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
    basePriceMoney?: Money;
    /**
     * The [CatalogItemVariation](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItemVariation) ID applied to this return line item.
     */
    catalogObjectId?: string;
    /**
     * The version of the catalog object that this line item references.
     */
    catalogVersion?: number;
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
    grossReturnMoney?: Money;
    /**
     * The type of line item: an itemized return, a non-itemized return (custom amount),
     *
     * @remarks
     * or the return of an unactivated gift card sale.
     */
    itemType?: string;
    /**
     * The name of the line item.
     */
    name?: string;
    /**
     * The note of the return line item.
     */
    note?: string;
    /**
     * The quantity returned, formatted as a decimal number.
     *
     * @remarks
     * For example, `"3"`.
     *
     * Line items with a `quantity_unit` can have non-integer quantities.
     * For example, `"1.70000"`.
     */
    quantity: string;
    /**
     * Contains the measurement unit for a quantity and a precision that
     *
     * @remarks
     * specifies the number of digits after the decimal point for decimal quantities.
     */
    quantityUnit?: OrderQuantityUnit;
    /**
     * The [CatalogModifier](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogModifier)s applied to this line item.
     */
    returnModifiers?: OrderReturnLineItemModifier[];
    /**
     * The `uid` of the line item in the original sale order.
     */
    sourceLineItemUid?: string;
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
    totalDiscountMoney?: Money;
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
    totalMoney?: Money;
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
    totalTaxMoney?: Money;
    /**
     * A unique ID for this return line-item entry.
     */
    uid?: string;
    /**
     * The name of the variation applied to this return line item.
     */
    variationName?: string;
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
    variationTotalPriceMoney?: Money;
}
