import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePlayDeveloperReportingV1beta1DimensionValue } from "./googleplaydeveloperreportingv1beta1dimensionvalue";
import { GooglePlayDeveloperReportingV1beta1MetricValue } from "./googleplaydeveloperreportingv1beta1metricvalue";
import { GoogleTypeDateTime } from "./googletypedatetime";
/**
 * Granularity of the aggregation period of the row.
 */
export declare enum GooglePlayDeveloperReportingV1beta1MetricsRowAggregationPeriodEnum {
    AggregationPeriodUnspecified = "AGGREGATION_PERIOD_UNSPECIFIED",
    Hourly = "HOURLY",
    Daily = "DAILY"
}
/**
 * Represents a row of dimensions and metrics.
 */
export declare class GooglePlayDeveloperReportingV1beta1MetricsRow extends SpeakeasyBase {
    /**
     * Granularity of the aggregation period of the row.
     */
    aggregationPeriod?: GooglePlayDeveloperReportingV1beta1MetricsRowAggregationPeriodEnum;
    /**
     * Dimension columns in the row.
     */
    dimensions?: GooglePlayDeveloperReportingV1beta1DimensionValue[];
    /**
     * Metric columns in the row.
     */
    metrics?: GooglePlayDeveloperReportingV1beta1MetricValue[];
    /**
     * Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations.
     */
    startTime?: GoogleTypeDateTime;
}
