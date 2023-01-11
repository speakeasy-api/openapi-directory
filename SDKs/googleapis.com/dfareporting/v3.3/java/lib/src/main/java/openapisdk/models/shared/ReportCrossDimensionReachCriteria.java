package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportCrossDimensionReachCriteria
 * The report criteria for a report of type "CROSS_DIMENSION_REACH".
**/
public class ReportCrossDimensionReachCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("breakdown")
    public SortedDimension[] breakdown;
    public ReportCrossDimensionReachCriteria withBreakdown(SortedDimension[] breakdown) {
        this.breakdown = breakdown;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateRange")
    public DateRange dateRange;
    public ReportCrossDimensionReachCriteria withDateRange(DateRange dateRange) {
        this.dateRange = dateRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimension")
    public ReportCrossDimensionReachCriteriaDimensionEnum dimension;
    public ReportCrossDimensionReachCriteria withDimension(ReportCrossDimensionReachCriteriaDimensionEnum dimension) {
        this.dimension = dimension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionFilters")
    public DimensionValue[] dimensionFilters;
    public ReportCrossDimensionReachCriteria withDimensionFilters(DimensionValue[] dimensionFilters) {
        this.dimensionFilters = dimensionFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricNames")
    public String[] metricNames;
    public ReportCrossDimensionReachCriteria withMetricNames(String[] metricNames) {
        this.metricNames = metricNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overlapMetricNames")
    public String[] overlapMetricNames;
    public ReportCrossDimensionReachCriteria withOverlapMetricNames(String[] overlapMetricNames) {
        this.overlapMetricNames = overlapMetricNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pivoted")
    public Boolean pivoted;
    public ReportCrossDimensionReachCriteria withPivoted(Boolean pivoted) {
        this.pivoted = pivoted;
        return this;
    }
}