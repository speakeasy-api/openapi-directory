import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Price insights fields requested by the merchant in the query. Field values are only set if the merchant queries `PriceInsightsProductView`. https://support.google.com/merchants/answer/11916926
 */
export declare class PriceInsights extends SpeakeasyBase {
    /**
     * The predicted change in clicks as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in clicks.
     */
    predictedClicksChangeFraction?: number;
    /**
     * The predicted change in conversions as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in conversions).
     */
    predictedConversionsChangeFraction?: number;
    /**
     * The predicted change in gross profit as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in gross profit.
     */
    predictedGrossProfitChangeFraction?: number;
    /**
     * The predicted change in impressions as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in impressions.
     */
    predictedImpressionsChangeFraction?: number;
    /**
     * The predicted monthly gross profit change currency (ISO 4217 code).
     */
    predictedMonthlyGrossProfitChangeCurrencyCode?: string;
    /**
     * The predicted change in gross profit in micros (1 millionth of a standard unit, 1 USD = 1000000 micros) after introducing the suggested price for a month compared to current active price.
     */
    predictedMonthlyGrossProfitChangeMicros?: string;
    /**
     * The suggested price currency (ISO 4217 code).
     */
    suggestedPriceCurrencyCode?: string;
    /**
     * The latest suggested price in micros (1 millionth of a standard unit, 1 USD = 1000000 micros) for the product.
     */
    suggestedPriceMicros?: string;
}
