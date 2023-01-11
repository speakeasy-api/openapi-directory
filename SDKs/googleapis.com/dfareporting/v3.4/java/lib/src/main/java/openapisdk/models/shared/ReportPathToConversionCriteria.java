package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportPathToConversionCriteria
 * The report criteria for a report of type "PATH_TO_CONVERSION".
**/
public class ReportPathToConversionCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activityFilters")
    public DimensionValue[] activityFilters;
    public ReportPathToConversionCriteria withActivityFilters(DimensionValue[] activityFilters) {
        this.activityFilters = activityFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversionDimensions")
    public SortedDimension[] conversionDimensions;
    public ReportPathToConversionCriteria withConversionDimensions(SortedDimension[] conversionDimensions) {
        this.conversionDimensions = conversionDimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFloodlightVariables")
    public SortedDimension[] customFloodlightVariables;
    public ReportPathToConversionCriteria withCustomFloodlightVariables(SortedDimension[] customFloodlightVariables) {
        this.customFloodlightVariables = customFloodlightVariables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customRichMediaEvents")
    public DimensionValue[] customRichMediaEvents;
    public ReportPathToConversionCriteria withCustomRichMediaEvents(DimensionValue[] customRichMediaEvents) {
        this.customRichMediaEvents = customRichMediaEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateRange")
    public DateRange dateRange;
    public ReportPathToConversionCriteria withDateRange(DateRange dateRange) {
        this.dateRange = dateRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floodlightConfigId")
    public DimensionValue floodlightConfigId;
    public ReportPathToConversionCriteria withFloodlightConfigId(DimensionValue floodlightConfigId) {
        this.floodlightConfigId = floodlightConfigId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricNames")
    public String[] metricNames;
    public ReportPathToConversionCriteria withMetricNames(String[] metricNames) {
        this.metricNames = metricNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("perInteractionDimensions")
    public SortedDimension[] perInteractionDimensions;
    public ReportPathToConversionCriteria withPerInteractionDimensions(SortedDimension[] perInteractionDimensions) {
        this.perInteractionDimensions = perInteractionDimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportProperties")
    public ReportPathToConversionCriteriaReportProperties reportProperties;
    public ReportPathToConversionCriteria withReportProperties(ReportPathToConversionCriteriaReportProperties reportProperties) {
        this.reportProperties = reportProperties;
        return this;
    }
}