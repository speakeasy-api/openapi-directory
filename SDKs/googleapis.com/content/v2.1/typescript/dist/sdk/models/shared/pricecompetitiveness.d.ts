import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Price competitiveness fields requested by the merchant in the query. Field values are only set if the merchant queries `PriceCompetitivenessProductView`. https://support.google.com/merchants/answer/9626903
 */
export declare class PriceCompetitiveness extends SpeakeasyBase {
    /**
     * The price benchmark currency (ISO 4217 code).
     */
    benchmarkPriceCurrencyCode?: string;
    /**
     * The latest available price benchmark in micros (1 millionth of a standard unit, 1 USD = 1000000 micros) for the product's catalog in the benchmark country.
     */
    benchmarkPriceMicros?: string;
    /**
     * The country of the price benchmark (ISO 3166 code).
     */
    countryCode?: string;
}
