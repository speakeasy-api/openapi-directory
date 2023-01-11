package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportRequest
 * The main request class which specifies the Reporting API request.
**/
public class ReportRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cohortGroup")
    public CohortGroup cohortGroup;
    public ReportRequest withCohortGroup(CohortGroup cohortGroup) {
        this.cohortGroup = cohortGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateRanges")
    public DateRange[] dateRanges;
    public ReportRequest withDateRanges(DateRange[] dateRanges) {
        this.dateRanges = dateRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionFilterClauses")
    public DimensionFilterClause[] dimensionFilterClauses;
    public ReportRequest withDimensionFilterClauses(DimensionFilterClause[] dimensionFilterClauses) {
        this.dimensionFilterClauses = dimensionFilterClauses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public Dimension[] dimensions;
    public ReportRequest withDimensions(Dimension[] dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filtersExpression")
    public String filtersExpression;
    public ReportRequest withFiltersExpression(String filtersExpression) {
        this.filtersExpression = filtersExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hideTotals")
    public Boolean hideTotals;
    public ReportRequest withHideTotals(Boolean hideTotals) {
        this.hideTotals = hideTotals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hideValueRanges")
    public Boolean hideValueRanges;
    public ReportRequest withHideValueRanges(Boolean hideValueRanges) {
        this.hideValueRanges = hideValueRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeEmptyRows")
    public Boolean includeEmptyRows;
    public ReportRequest withIncludeEmptyRows(Boolean includeEmptyRows) {
        this.includeEmptyRows = includeEmptyRows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricFilterClauses")
    public MetricFilterClause[] metricFilterClauses;
    public ReportRequest withMetricFilterClauses(MetricFilterClause[] metricFilterClauses) {
        this.metricFilterClauses = metricFilterClauses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public Metric[] metrics;
    public ReportRequest withMetrics(Metric[] metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderBys")
    public OrderBy[] orderBys;
    public ReportRequest withOrderBys(OrderBy[] orderBys) {
        this.orderBys = orderBys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageSize")
    public Integer pageSize;
    public ReportRequest withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageToken")
    public String pageToken;
    public ReportRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pivots")
    public Pivot[] pivots;
    public ReportRequest withPivots(Pivot[] pivots) {
        this.pivots = pivots;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("samplingLevel")
    public ReportRequestSamplingLevelEnum samplingLevel;
    public ReportRequest withSamplingLevel(ReportRequestSamplingLevelEnum samplingLevel) {
        this.samplingLevel = samplingLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segments")
    public Segment[] segments;
    public ReportRequest withSegments(Segment[] segments) {
        this.segments = segments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viewId")
    public String viewId;
    public ReportRequest withViewId(String viewId) {
        this.viewId = viewId;
        return this;
    }
}