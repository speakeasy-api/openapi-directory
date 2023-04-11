import { SpeakeasyBase } from "../../../internal/utils";
import { CohortSpec } from "./cohortspec";
import { DateRange } from "./daterange";
import { Dimension } from "./dimension";
import { FilterExpression } from "./filterexpression";
import { Metric } from "./metric";
import { Pivot } from "./pivot";
/**
 * The request to generate a pivot report.
 */
export declare class RunPivotReportRequest extends SpeakeasyBase {
    /**
     * The specification of cohorts for a cohort report. Cohort reports create a time series of user retention for the cohort. For example, you could select the cohort of users that were acquired in the first week of September and follow that cohort for the next six weeks. Selecting the users acquired in the first week of September cohort is specified in the `cohort` object. Following that cohort for the next six weeks is specified in the `cohortsRange` object. For examples, see [Cohort Report Examples](https://developers.google.com/analytics/devguides/reporting/data/v1/advanced#cohort_report_examples). The report response could show a weekly time series where say your app has retained 60% of this cohort after three weeks and 25% of this cohort after six weeks. These two percentages can be calculated by the metric `cohortActiveUsers/cohortTotalUsers` and will be separate rows in the report.
     */
    cohortSpec?: CohortSpec;
    /**
     * A currency code in ISO4217 format, such as "AED", "USD", "JPY". If the field is empty, the report uses the property's default currency.
     */
    currencyCode?: string;
    /**
     * The date range to retrieve event data for the report. If multiple date ranges are specified, event data from each date range is used in the report. A special dimension with field name "dateRange" can be included in a Pivot's field names; if included, the report compares between date ranges. In a cohort request, this `dateRanges` must be unspecified.
     */
    dateRanges?: DateRange[];
    /**
     * To express dimension or metric filters. The fields in the same FilterExpression need to be either all dimensions or all metrics.
     */
    dimensionFilter?: FilterExpression;
    /**
     * The dimensions requested. All defined dimensions must be used by one of the following: dimension_expression, dimension_filter, pivots, order_bys.
     */
    dimensions?: Dimension[];
    /**
     * If false or unspecified, each row with all metrics equal to 0 will not be returned. If true, these rows will be returned if they are not separately removed by a filter. Regardless of this `keep_empty_rows` setting, only data recorded by the Google Analytics (GA4) property can be displayed in a report. For example if a property never logs a `purchase` event, then a query for the `eventName` dimension and `eventCount` metric will not have a row eventName: "purchase" and eventCount: 0.
     */
    keepEmptyRows?: boolean;
    /**
     * To express dimension or metric filters. The fields in the same FilterExpression need to be either all dimensions or all metrics.
     */
    metricFilter?: FilterExpression;
    /**
     * The metrics requested, at least one metric needs to be specified. All defined metrics must be used by one of the following: metric_expression, metric_filter, order_bys.
     */
    metrics?: Metric[];
    /**
     * Describes the visual format of the report's dimensions in columns or rows. The union of the fieldNames (dimension names) in all pivots must be a subset of dimension names defined in Dimensions. No two pivots can share a dimension. A dimension is only visible if it appears in a pivot.
     */
    pivots?: Pivot[];
    /**
     * A Google Analytics GA4 property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). Within a batch request, this property should either be unspecified or consistent with the batch-level property. Example: properties/1234
     */
    property?: string;
    /**
     * Toggles whether to return the current state of this Analytics Property's quota. Quota is returned in [PropertyQuota](#PropertyQuota).
     */
    returnPropertyQuota?: boolean;
}
