package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportPathToConversionCriteriaReportProperties
 * The properties of the report.
**/
public class ReportPathToConversionCriteriaReportProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clicksLookbackWindow")
    public Integer clicksLookbackWindow;
    public ReportPathToConversionCriteriaReportProperties withClicksLookbackWindow(Integer clicksLookbackWindow) {
        this.clicksLookbackWindow = clicksLookbackWindow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("impressionsLookbackWindow")
    public Integer impressionsLookbackWindow;
    public ReportPathToConversionCriteriaReportProperties withImpressionsLookbackWindow(Integer impressionsLookbackWindow) {
        this.impressionsLookbackWindow = impressionsLookbackWindow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeAttributedIPConversions")
    public Boolean includeAttributedIPConversions;
    public ReportPathToConversionCriteriaReportProperties withIncludeAttributedIpConversions(Boolean includeAttributedIPConversions) {
        this.includeAttributedIPConversions = includeAttributedIPConversions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeUnattributedCookieConversions")
    public Boolean includeUnattributedCookieConversions;
    public ReportPathToConversionCriteriaReportProperties withIncludeUnattributedCookieConversions(Boolean includeUnattributedCookieConversions) {
        this.includeUnattributedCookieConversions = includeUnattributedCookieConversions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeUnattributedIPConversions")
    public Boolean includeUnattributedIPConversions;
    public ReportPathToConversionCriteriaReportProperties withIncludeUnattributedIpConversions(Boolean includeUnattributedIPConversions) {
        this.includeUnattributedIPConversions = includeUnattributedIPConversions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumClickInteractions")
    public Integer maximumClickInteractions;
    public ReportPathToConversionCriteriaReportProperties withMaximumClickInteractions(Integer maximumClickInteractions) {
        this.maximumClickInteractions = maximumClickInteractions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumImpressionInteractions")
    public Integer maximumImpressionInteractions;
    public ReportPathToConversionCriteriaReportProperties withMaximumImpressionInteractions(Integer maximumImpressionInteractions) {
        this.maximumImpressionInteractions = maximumImpressionInteractions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumInteractionGap")
    public Integer maximumInteractionGap;
    public ReportPathToConversionCriteriaReportProperties withMaximumInteractionGap(Integer maximumInteractionGap) {
        this.maximumInteractionGap = maximumInteractionGap;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pivotOnInteractionPath")
    public Boolean pivotOnInteractionPath;
    public ReportPathToConversionCriteriaReportProperties withPivotOnInteractionPath(Boolean pivotOnInteractionPath) {
        this.pivotOnInteractionPath = pivotOnInteractionPath;
        return this;
    }
}