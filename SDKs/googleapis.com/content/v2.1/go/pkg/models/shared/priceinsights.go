// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// PriceInsights - Price insights fields requested by the merchant in the query. Field values are only set if the merchant queries `PriceInsightsProductView`. https://support.google.com/merchants/answer/11916926
type PriceInsights struct {
	// The predicted change in clicks as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in clicks.
	PredictedClicksChangeFraction *float64 `json:"predictedClicksChangeFraction,omitempty"`
	// The predicted change in conversions as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in conversions).
	PredictedConversionsChangeFraction *float64 `json:"predictedConversionsChangeFraction,omitempty"`
	// The predicted change in gross profit as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in gross profit.
	PredictedGrossProfitChangeFraction *float64 `json:"predictedGrossProfitChangeFraction,omitempty"`
	// The predicted change in impressions as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in impressions.
	PredictedImpressionsChangeFraction *float64 `json:"predictedImpressionsChangeFraction,omitempty"`
	// The predicted monthly gross profit change currency (ISO 4217 code).
	PredictedMonthlyGrossProfitChangeCurrencyCode *string `json:"predictedMonthlyGrossProfitChangeCurrencyCode,omitempty"`
	// The predicted change in gross profit in micros (1 millionth of a standard unit, 1 USD = 1000000 micros) after introducing the suggested price for a month compared to current active price.
	PredictedMonthlyGrossProfitChangeMicros *string `json:"predictedMonthlyGrossProfitChangeMicros,omitempty"`
	// The suggested price currency (ISO 4217 code).
	SuggestedPriceCurrencyCode *string `json:"suggestedPriceCurrencyCode,omitempty"`
	// The latest suggested price in micros (1 millionth of a standard unit, 1 USD = 1000000 micros) for the product.
	SuggestedPriceMicros *string `json:"suggestedPriceMicros,omitempty"`
}
