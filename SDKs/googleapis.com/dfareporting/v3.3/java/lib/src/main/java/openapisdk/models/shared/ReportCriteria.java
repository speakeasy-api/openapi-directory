package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportCriteria
 * The report criteria for a report of type "STANDARD".
**/
public class ReportCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activities")
    public Activities activities;
    public ReportCriteria withActivities(Activities activities) {
        this.activities = activities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customRichMediaEvents")
    public CustomRichMediaEvents customRichMediaEvents;
    public ReportCriteria withCustomRichMediaEvents(CustomRichMediaEvents customRichMediaEvents) {
        this.customRichMediaEvents = customRichMediaEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateRange")
    public DateRange dateRange;
    public ReportCriteria withDateRange(DateRange dateRange) {
        this.dateRange = dateRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionFilters")
    public DimensionValue[] dimensionFilters;
    public ReportCriteria withDimensionFilters(DimensionValue[] dimensionFilters) {
        this.dimensionFilters = dimensionFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public SortedDimension[] dimensions;
    public ReportCriteria withDimensions(SortedDimension[] dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricNames")
    public String[] metricNames;
    public ReportCriteria withMetricNames(String[] metricNames) {
        this.metricNames = metricNames;
        return this;
    }
}