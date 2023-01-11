package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportFloodlightCriteria
 * The report criteria for a report of type "FLOODLIGHT".
**/
public class ReportFloodlightCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customRichMediaEvents")
    public DimensionValue[] customRichMediaEvents;
    public ReportFloodlightCriteria withCustomRichMediaEvents(DimensionValue[] customRichMediaEvents) {
        this.customRichMediaEvents = customRichMediaEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateRange")
    public DateRange dateRange;
    public ReportFloodlightCriteria withDateRange(DateRange dateRange) {
        this.dateRange = dateRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionFilters")
    public DimensionValue[] dimensionFilters;
    public ReportFloodlightCriteria withDimensionFilters(DimensionValue[] dimensionFilters) {
        this.dimensionFilters = dimensionFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public SortedDimension[] dimensions;
    public ReportFloodlightCriteria withDimensions(SortedDimension[] dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floodlightConfigId")
    public DimensionValue floodlightConfigId;
    public ReportFloodlightCriteria withFloodlightConfigId(DimensionValue floodlightConfigId) {
        this.floodlightConfigId = floodlightConfigId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricNames")
    public String[] metricNames;
    public ReportFloodlightCriteria withMetricNames(String[] metricNames) {
        this.metricNames = metricNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportProperties")
    public ReportFloodlightCriteriaReportProperties reportProperties;
    public ReportFloodlightCriteria withReportProperties(ReportFloodlightCriteriaReportProperties reportProperties) {
        this.reportProperties = reportProperties;
        return this;
    }
}