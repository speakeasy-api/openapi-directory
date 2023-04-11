import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
import { OrderLineItemAppliedTax } from "./orderlineitemappliedtax";
/**
 * Represents the service charge applied to the original order.
 */
export declare class OrderReturnServiceCharge extends SpeakeasyBase {
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
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     *
     * @remarks
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    appliedMoney?: Money;
    /**
     * The list of references to `OrderReturnTax` entities applied to the
     *
     * @remarks
     * `OrderReturnServiceCharge`. Each `OrderLineItemAppliedTax` has a `tax_uid`
     * that references the `uid` of a top-level `OrderReturnTax` that is being
     * applied to the `OrderReturnServiceCharge`. On reads, the applied amount is
     * populated.
     */
    appliedTaxes?: OrderLineItemAppliedTax[];
    /**
     * The calculation phase after which to apply the service charge.
     */
    calculationPhase?: string;
    /**
     * The catalog object ID of the associated [OrderServiceCharge](https://developer.squareup.com/reference/square_2021-08-18/objects/OrderServiceCharge).
     */
    catalogObjectId?: string;
    /**
     * The version of the catalog object that this service charge references.
     */
    catalogVersion?: number;
    /**
     * The name of the service charge.
     */
    name?: string;
    /**
     * The percentage of the service charge, as a string representation of
     *
     * @remarks
     * a decimal number. For example, a value of `"7.25"` corresponds to a
     * percentage of 7.25%.
     *
     * Either `percentage` or `amount_money` should be set, but not both.
     */
    percentage?: string;
    /**
     * The service charge `uid` from the order containing the original
     *
     * @remarks
     * service charge. `source_service_charge_uid` is `null` for
     * unlinked returns.
     */
    sourceServiceChargeUid?: string;
    /**
     * Indicates whether the surcharge can be taxed. Service charges
     *
     * @remarks
     * calculated in the `TOTAL_PHASE` cannot be marked as taxable.
     */
    taxable?: boolean;
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
     * A unique ID that identifies the return service charge only within this order.
     */
    uid?: string;
}
