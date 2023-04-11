import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * Structured information on what type the type of tax or fee.
 */
export declare enum TaxOrFeeCategoryEnum {
    Vat = "VAT",
    CityTax = "CITY_TAX",
    Other = "OTHER"
}
/**
 * Details of a tax or fee (included or excluded in a rate).
 */
export declare class TaxOrFee extends SpeakeasyBase {
    /**
     * Structured information on what type the type of tax or fee.
     */
    category?: TaxOrFeeCategoryEnum;
    /**
     * An amount of money in the specified currency (used in the context of prices, fees, refunds etc.)
     */
    charges?: Money;
    /**
     * Formatted English description of this tax or fee, ready to be shown to your guests.
     */
    formatted?: string;
}
