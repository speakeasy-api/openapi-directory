import { SpeakeasyBase } from "../../../internal/utils";
import { ReportApiColumnSpec } from "./reportapicolumnspec";
export declare class ReportRequestFilters extends SpeakeasyBase {
    /**
     * A request object used to create a DoubleClick Search report.
     */
    column?: ReportApiColumnSpec;
    /**
     * Operator to use in the filter. See the filter reference for a list of available operators.
     */
    operator?: string;
    /**
     * A list of values to filter the column value against.\ The maximum number of filter values per request is 300.
     */
    values?: any[];
}
export declare class ReportRequestOrderBy extends SpeakeasyBase {
    /**
     * A request object used to create a DoubleClick Search report.
     */
    column?: ReportApiColumnSpec;
    /**
     * The sort direction, which is either `ascending` or `descending`.
     */
    sortOrder?: string;
}
/**
 * The reportScope is a set of IDs that are used to determine which subset of entities will be returned in the report. The full lineage of IDs from the lowest scoped level desired up through agency is required.
 */
export declare class ReportRequestReportScope extends SpeakeasyBase {
    /**
     * DS ad group ID.
     */
    adGroupId?: string;
    /**
     * DS ad ID.
     */
    adId?: string;
    /**
     * DS advertiser ID.
     */
    advertiserId?: string;
    /**
     * DS agency ID.
     */
    agencyId?: string;
    /**
     * DS campaign ID.
     */
    campaignId?: string;
    /**
     * DS engine account ID.
     */
    engineAccountId?: string;
    /**
     * DS keyword ID.
     */
    keywordId?: string;
}
/**
 * If metrics are requested in a report, this argument will be used to restrict the metrics to a specific time range.
 */
export declare class ReportRequestTimeRange extends SpeakeasyBase {
    /**
     * Inclusive UTC timestamp in RFC format, e.g., `2013-07-16T10:16:23.555Z`. See additional references on how changed attribute reports work.
     */
    changedAttributesSinceTimestamp?: string;
    /**
     * Inclusive UTC timestamp in RFC format, e.g., `2013-07-16T10:16:23.555Z`. See additional references on how changed metrics reports work.
     */
    changedMetricsSinceTimestamp?: string;
    /**
     * Inclusive date in YYYY-MM-DD format.
     */
    endDate?: string;
    /**
     * Inclusive date in YYYY-MM-DD format.
     */
    startDate?: string;
}
/**
 * A request object used to create a DoubleClick Search report.
 */
export declare class ReportRequest extends SpeakeasyBase {
    /**
     * The columns to include in the report. This includes both DoubleClick Search columns and saved columns. For DoubleClick Search columns, only the `columnName` parameter is required. For saved columns only the `savedColumnName` parameter is required. Both `columnName` and `savedColumnName` cannot be set in the same stanza.\ The maximum number of columns per request is 300.
     */
    columns?: ReportApiColumnSpec[];
    /**
     * Format that the report should be returned in. Currently `csv` or `tsv` is supported.
     */
    downloadFormat?: string;
    /**
     * A list of filters to be applied to the report.\ The maximum number of filters per request is 300.
     */
    filters?: ReportRequestFilters[];
    /**
     * Determines if removed entities should be included in the report. Defaults to `false`. Deprecated, please use `includeRemovedEntities` instead.
     */
    includeDeletedEntities?: boolean;
    /**
     * Determines if removed entities should be included in the report. Defaults to `false`.
     */
    includeRemovedEntities?: boolean;
    /**
     * Asynchronous report only. The maximum number of rows per report file. A large report is split into many files based on this field. Acceptable values are `1000000` to `100000000`, inclusive.
     */
    maxRowsPerFile?: number;
    /**
     * Synchronous report only. A list of columns and directions defining sorting to be performed on the report rows.\ The maximum number of orderings per request is 300.
     */
    orderBy?: ReportRequestOrderBy[];
    /**
     * The reportScope is a set of IDs that are used to determine which subset of entities will be returned in the report. The full lineage of IDs from the lowest scoped level desired up through agency is required.
     */
    reportScope?: ReportRequestReportScope;
    /**
     * Determines the type of rows that are returned in the report. For example, if you specify `reportType: keyword`, each row in the report will contain data about a keyword. See the [Types of Reports](/search-ads/v2/report-types/) reference for the columns that are available for each type.
     */
    reportType?: string;
    /**
     * Synchronous report only. The maximum number of rows to return; additional rows are dropped. Acceptable values are `0` to `10000`, inclusive. Defaults to `10000`.
     */
    rowCount?: number;
    /**
     * Synchronous report only. Zero-based index of the first row to return. Acceptable values are `0` to `50000`, inclusive. Defaults to `0`.
     */
    startRow?: number;
    /**
     * Specifies the currency in which monetary will be returned. Possible values are: `usd`, `agency` (valid if the report is scoped to agency or lower), `advertiser` (valid if the report is scoped to * advertiser or lower), or `account` (valid if the report is scoped to engine account or lower).
     */
    statisticsCurrency?: string;
    /**
     * If metrics are requested in a report, this argument will be used to restrict the metrics to a specific time range.
     */
    timeRange?: ReportRequestTimeRange;
    /**
     * If `true`, the report would only be created if all the requested stat data are sourced from a single timezone. Defaults to `false`.
     */
    verifySingleTimeZone?: boolean;
}
