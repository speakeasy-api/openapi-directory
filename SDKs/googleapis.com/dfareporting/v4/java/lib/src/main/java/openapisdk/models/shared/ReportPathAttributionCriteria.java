package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportPathAttributionCriteria
 * The report criteria for a report of type "PATH_ATTRIBUTION".
**/
public class ReportPathAttributionCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activityFilters")
    public DimensionValue[] activityFilters;
    public ReportPathAttributionCriteria withActivityFilters(DimensionValue[] activityFilters) {
        this.activityFilters = activityFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customChannelGrouping")
    public ChannelGrouping customChannelGrouping;
    public ReportPathAttributionCriteria withCustomChannelGrouping(ChannelGrouping customChannelGrouping) {
        this.customChannelGrouping = customChannelGrouping;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateRange")
    public DateRange dateRange;
    public ReportPathAttributionCriteria withDateRange(DateRange dateRange) {
        this.dateRange = dateRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public SortedDimension[] dimensions;
    public ReportPathAttributionCriteria withDimensions(SortedDimension[] dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floodlightConfigId")
    public DimensionValue floodlightConfigId;
    public ReportPathAttributionCriteria withFloodlightConfigId(DimensionValue floodlightConfigId) {
        this.floodlightConfigId = floodlightConfigId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricNames")
    public String[] metricNames;
    public ReportPathAttributionCriteria withMetricNames(String[] metricNames) {
        this.metricNames = metricNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pathFilters")
    public PathFilter[] pathFilters;
    public ReportPathAttributionCriteria withPathFilters(PathFilter[] pathFilters) {
        this.pathFilters = pathFilters;
        return this;
    }
}