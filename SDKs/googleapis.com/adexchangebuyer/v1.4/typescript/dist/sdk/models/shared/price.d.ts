import { SpeakeasyBase } from "../../../internal/utils";
export declare class Price extends SpeakeasyBase {
    /**
     * The price value in micros.
     */
    amountMicros?: number;
    /**
     * The currency code for the price.
     */
    currencyCode?: string;
    /**
     * In case of CPD deals, the expected CPM in micros.
     */
    expectedCpmMicros?: number;
    /**
     * The pricing type for the deal/product.
     */
    pricingType?: string;
}
