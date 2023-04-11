import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A tax applicable to an item.
 */
export declare class CatalogTax extends SpeakeasyBase {
    /**
     * If `true`, the fee applies to custom amounts entered into the Square Point of Sale
     *
     * @remarks
     * app that are not associated with a particular `CatalogItem`.
     */
    appliesToCustomAmounts?: boolean;
    /**
     * Whether the tax is calculated based on a payment's subtotal or total.
     */
    calculationPhase?: string;
    /**
     * A Boolean flag to indicate whether the tax is displayed as enabled (`true`) in the Square Point of Sale app or not (`false`).
     */
    enabled?: boolean;
    /**
     * Whether the tax is `ADDITIVE` or `INCLUSIVE`.
     */
    inclusionType?: string;
    /**
     * The tax's name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points.
     */
    name?: string;
    /**
     * The percentage of the tax in decimal form, using a `'.'` as the decimal separator and without a `'%'` sign.
     *
     * @remarks
     * A value of `7.5` corresponds to 7.5%.
     */
    percentage?: string;
}
