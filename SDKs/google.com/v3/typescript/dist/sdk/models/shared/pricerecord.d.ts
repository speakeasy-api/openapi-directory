import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A price record.
 */
export declare class PriceRecord extends SpeakeasyBase {
    /**
     * Base price.
     */
    basePrice?: number;
    /**
     * ISO 4217 currency code.
     */
    currencyCode?: string;
    /**
     * Taxes and fees.
     */
    taxesAndFees?: number;
    /**
     * Timestamp of this price record.
     */
    time?: string;
}
