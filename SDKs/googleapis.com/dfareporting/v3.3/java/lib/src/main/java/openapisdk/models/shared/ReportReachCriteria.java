package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportReachCriteria
 * The report criteria for a report of type "REACH".
**/
public class ReportReachCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activities")
    public Activities activities;
    public ReportReachCriteria withActivities(Activities activities) {
        this.activities = activities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customRichMediaEvents")
    public CustomRichMediaEvents customRichMediaEvents;
    public ReportReachCriteria withCustomRichMediaEvents(CustomRichMediaEvents customRichMediaEvents) {
        this.customRichMediaEvents = customRichMediaEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateRange")
    public DateRange dateRange;
    public ReportReachCriteria withDateRange(DateRange dateRange) {
        this.dateRange = dateRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionFilters")
    public DimensionValue[] dimensionFilters;
    public ReportReachCriteria withDimensionFilters(DimensionValue[] dimensionFilters) {
        this.dimensionFilters = dimensionFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public SortedDimension[] dimensions;
    public ReportReachCriteria withDimensions(SortedDimension[] dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableAllDimensionCombinations")
    public Boolean enableAllDimensionCombinations;
    public ReportReachCriteria withEnableAllDimensionCombinations(Boolean enableAllDimensionCombinations) {
        this.enableAllDimensionCombinations = enableAllDimensionCombinations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricNames")
    public String[] metricNames;
    public ReportReachCriteria withMetricNames(String[] metricNames) {
        this.metricNames = metricNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reachByFrequencyMetricNames")
    public String[] reachByFrequencyMetricNames;
    public ReportReachCriteria withReachByFrequencyMetricNames(String[] reachByFrequencyMetricNames) {
        this.reachByFrequencyMetricNames = reachByFrequencyMetricNames;
        return this;
    }
}