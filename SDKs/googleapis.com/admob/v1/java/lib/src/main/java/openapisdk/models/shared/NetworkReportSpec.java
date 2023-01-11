package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkReportSpec
 * The specification for generating an AdMob Network report. For example, the specification to get clicks and estimated earnings for only the 'US' and 'CN' countries can look like the following example: { 'date_range': { 'start_date': {'year': 2021, 'month': 9, 'day': 1}, 'end_date': {'year': 2021, 'month': 9, 'day': 30} }, 'dimensions': ['DATE', 'APP', 'COUNTRY'], 'metrics': ['CLICKS', 'ESTIMATED_EARNINGS'], 'dimension_filters': [ { 'dimension': 'COUNTRY', 'matches_any': {'values': [{'value': 'US', 'value': 'CN'}]} } ], 'sort_conditions': [ {'dimension':'APP', order: 'ASCENDING'}, {'metric':'CLICKS', order: 'DESCENDING'} ], 'localization_settings': { 'currency_code': 'USD', 'language_code': 'en-US' } } For a better understanding, you can treat the preceding specification like the following pseudo SQL: SELECT DATE, APP, COUNTRY, CLICKS, ESTIMATED_EARNINGS FROM NETWORK_REPORT WHERE DATE >= '2021-09-01' AND DATE <= '2021-09-30' AND COUNTRY IN ('US', 'CN') GROUP BY DATE, APP, COUNTRY ORDER BY APP ASC, CLICKS DESC;
**/
public class NetworkReportSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateRange")
    public DateRange dateRange;
    public NetworkReportSpec withDateRange(DateRange dateRange) {
        this.dateRange = dateRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionFilters")
    public NetworkReportSpecDimensionFilter[] dimensionFilters;
    public NetworkReportSpec withDimensionFilters(NetworkReportSpecDimensionFilter[] dimensionFilters) {
        this.dimensionFilters = dimensionFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public NetworkReportSpecDimensionsEnum[] dimensions;
    public NetworkReportSpec withDimensions(NetworkReportSpecDimensionsEnum[] dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localizationSettings")
    public LocalizationSettings localizationSettings;
    public NetworkReportSpec withLocalizationSettings(LocalizationSettings localizationSettings) {
        this.localizationSettings = localizationSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxReportRows")
    public Integer maxReportRows;
    public NetworkReportSpec withMaxReportRows(Integer maxReportRows) {
        this.maxReportRows = maxReportRows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public NetworkReportSpecMetricsEnum[] metrics;
    public NetworkReportSpec withMetrics(NetworkReportSpecMetricsEnum[] metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortConditions")
    public NetworkReportSpecSortCondition[] sortConditions;
    public NetworkReportSpec withSortConditions(NetworkReportSpecSortCondition[] sortConditions) {
        this.sortConditions = sortConditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public String timeZone;
    public NetworkReportSpec withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
}