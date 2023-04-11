import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the amount unit including the currency code.
 */
export declare class GoogleCloudPaymentsResellerSubscriptionV1Amount extends SpeakeasyBase {
    /**
     * Required. Amount in micros (1_000_000 micros = 1 currency unit)
     */
    amountMicros?: string;
    /**
     * Required. Currency codes in accordance with [ISO-4217 Currency Codes] (https://en.wikipedia.org/wiki/ISO_4217). For example, USD.
     */
    currencyCode?: string;
}
