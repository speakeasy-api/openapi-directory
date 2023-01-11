package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportPathCriteria
 * The report criteria for a report of type "PATH".
**/
public class ReportPathCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activityFilters")
    public DimensionValue[] activityFilters;
    public ReportPathCriteria withActivityFilters(DimensionValue[] activityFilters) {
        this.activityFilters = activityFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customChannelGrouping")
    public ChannelGrouping customChannelGrouping;
    public ReportPathCriteria withCustomChannelGrouping(ChannelGrouping customChannelGrouping) {
        this.customChannelGrouping = customChannelGrouping;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateRange")
    public DateRange dateRange;
    public ReportPathCriteria withDateRange(DateRange dateRange) {
        this.dateRange = dateRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public SortedDimension[] dimensions;
    public ReportPathCriteria withDimensions(SortedDimension[] dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floodlightConfigId")
    public DimensionValue floodlightConfigId;
    public ReportPathCriteria withFloodlightConfigId(DimensionValue floodlightConfigId) {
        this.floodlightConfigId = floodlightConfigId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricNames")
    public String[] metricNames;
    public ReportPathCriteria withMetricNames(String[] metricNames) {
        this.metricNames = metricNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pathFilters")
    public PathFilter[] pathFilters;
    public ReportPathCriteria withPathFilters(PathFilter[] pathFilters) {
        this.pathFilters = pathFilters;
        return this;
    }
}