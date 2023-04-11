import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Tax calculation rule to apply in a state or province (USA only).
 */
export declare class AccountTaxTaxRule extends SpeakeasyBase {
    /**
     * Country code in which tax is applicable.
     */
    country?: string;
    /**
     * Required. State (or province) is which the tax is applicable, described by its location ID (also called criteria ID).
     */
    locationId?: string;
    /**
     * Explicit tax rate in percent, represented as a floating point number without the percentage character. Must not be negative.
     */
    ratePercent?: string;
    /**
     * If true, shipping charges are also taxed.
     */
    shippingTaxed?: boolean;
    /**
     * Whether the tax rate is taken from a global tax table or specified explicitly.
     */
    useGlobalRate?: boolean;
}
