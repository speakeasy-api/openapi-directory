import { SpeakeasyBase } from "../../../internal/utils";
import { AggregationInfo } from "./aggregationinfo";
import { PricingExpression } from "./pricingexpression";
/**
 * Represents the pricing information for a SKU at a single point of time.
 */
export declare class PricingInfo extends SpeakeasyBase {
    /**
     * Represents the aggregation level and interval for pricing of a single SKU.
     */
    aggregationInfo?: AggregationInfo;
    /**
     * Conversion rate used for currency conversion, from USD to the currency specified in the request. This includes any surcharge collected for billing in non USD currency. If a currency is not specified in the request this defaults to 1.0. Example: USD * currency_conversion_rate = JPY
     */
    currencyConversionRate?: number;
    /**
     * The timestamp from which this pricing was effective within the requested time range. This is guaranteed to be greater than or equal to the start_time field in the request and less than the end_time field in the request. If a time range was not specified in the request this field will be equivalent to a time within the last 12 hours, indicating the latest pricing info.
     */
    effectiveTime?: string;
    /**
     * Expresses a mathematical pricing formula. For Example:- `usage_unit: GBy` `tiered_rates:` `[start_usage_amount: 20, unit_price: $10]` `[start_usage_amount: 100, unit_price: $5]` The above expresses a pricing formula where the first 20GB is free, the next 80GB is priced at $10 per GB followed by $5 per GB for additional usage.
     */
    pricingExpression?: PricingExpression;
    /**
     * An optional human readable summary of the pricing information, has a maximum length of 256 characters.
     */
    summary?: string;
}
