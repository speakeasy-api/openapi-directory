import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Definition of a price, i.e. currency and units.
 */
export declare class Price extends SpeakeasyBase {
    /**
     * 3 letter Currency code, as defined by ISO 4217. See java/com/google/common/money/CurrencyCode.java
     */
    currency?: string;
    /**
     * Price in 1/million of the currency base unit, represented as a string.
     */
    priceMicros?: string;
}
