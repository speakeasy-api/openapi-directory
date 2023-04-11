import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Representation of a metric value.
 */
export declare class ReportRowMetricValue extends SpeakeasyBase {
    /**
     * Double precision (approximate) decimal values. Rates are from 0 to 1.
     */
    doubleValue?: number;
    /**
     * Metric integer value.
     */
    integerValue?: string;
    /**
     * Amount in micros. One million is equivalent to one unit. Currency value is in the unit (USD, EUR or other) specified by the request. For example, $6.50 whould be represented as 6500000 micros.
     */
    microsValue?: string;
}
