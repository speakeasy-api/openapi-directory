import { SpeakeasyBase } from "../../../internal/utils";
export declare class Price extends SpeakeasyBase {
    /**
     * 3 letter Currency code, as defined by ISO 4217.
     */
    currency?: string;
    /**
     * The price in millionths of the currency base unit represented as a string.
     */
    priceMicros?: string;
}
