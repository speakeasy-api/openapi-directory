/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * MediationReportSpec - The specification for generating an AdMob Mediation report. For example, the specification to get observed ECPM sliced by ad source and app for the 'US' and 'CN' countries can look like the following example: { "date_range": { "start_date": {"year": 2021, "month": 9, "day": 1}, "end_date": {"year": 2021, "month": 9, "day": 30} }, "dimensions": ["AD_SOURCE", "APP", "COUNTRY"], "metrics": ["OBSERVED_ECPM"], "dimension_filters": [ { "dimension": "COUNTRY", "matches_any": {"values": [{"value": "US", "value": "CN"}]} } ], "sort_conditions": [ {"dimension":"APP", order: "ASCENDING"} ], "localization_settings": { "currency_code": "USD", "language_code": "en-US" } } For a better understanding, you can treat the preceding specification like the following pseudo SQL: SELECT AD_SOURCE, APP, COUNTRY, OBSERVED_ECPM FROM MEDIATION_REPORT WHERE DATE &gt;= '2021-09-01' AND DATE &lt;= '2021-09-30' AND COUNTRY IN ('US', 'CN') GROUP BY AD_SOURCE, APP, COUNTRY ORDER BY APP ASC;
 */
public class MediationReportSpec {
    /**
     * Specification of a single date range. Both dates are inclusive.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateRange")
    public DateRange dateRange;

    public MediationReportSpec withDateRange(DateRange dateRange) {
        this.dateRange = dateRange;
        return this;
    }
    
    /**
     * Describes which report rows to match based on their dimension values.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionFilters")
    public MediationReportSpecDimensionFilter[] dimensionFilters;

    public MediationReportSpec withDimensionFilters(MediationReportSpecDimensionFilter[] dimensionFilters) {
        this.dimensionFilters = dimensionFilters;
        return this;
    }
    
    /**
     * List of dimensions of the report. The value combination of these dimensions determines the row of the report. If no dimensions are specified, the report returns a single row of requested metrics for the entire account.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public MediationReportSpecDimensionsEnum[] dimensions;

    public MediationReportSpec withDimensions(MediationReportSpecDimensionsEnum[] dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    
    /**
     * Localization settings for reports, such as currency and language. It affects how metrics are calculated.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localizationSettings")
    public LocalizationSettings localizationSettings;

    public MediationReportSpec withLocalizationSettings(LocalizationSettings localizationSettings) {
        this.localizationSettings = localizationSettings;
        return this;
    }
    
    /**
     * Maximum number of report data rows to return. If the value is not set, the API returns as many rows as possible, up to 100000. Acceptable values are 1-100000, inclusive. Values larger than 100000 return an error.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxReportRows")
    public Integer maxReportRows;

    public MediationReportSpec withMaxReportRows(Integer maxReportRows) {
        this.maxReportRows = maxReportRows;
        return this;
    }
    
    /**
     * List of metrics of the report. A report must specify at least one metric.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public MediationReportSpecMetricsEnum[] metrics;

    public MediationReportSpec withMetrics(MediationReportSpecMetricsEnum[] metrics) {
        this.metrics = metrics;
        return this;
    }
    
    /**
     * Describes the sorting of report rows. The order of the condition in the list defines its precedence; the earlier the condition, the higher its precedence. If no sort conditions are specified, the row ordering is undefined.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortConditions")
    public MediationReportSpecSortCondition[] sortConditions;

    public MediationReportSpec withSortConditions(MediationReportSpecSortCondition[] sortConditions) {
        this.sortConditions = sortConditions;
        return this;
    }
    
    /**
     * A report time zone. Accepts an IANA TZ name values, such as "America/Los_Angeles." If no time zone is defined, the account default takes effect. Check default value by the get account action. **Warning:** The "America/Los_Angeles" is the only supported value at the moment.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public String timeZone;

    public MediationReportSpec withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
    
    public MediationReportSpec(){}
}
