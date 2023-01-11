package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdUnit
 * Representation of an ad unit. An ad unit represents a saved ad unit with a specific set of ad settings that have been customized within an account.
**/
public class AdUnit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentAdsSettings")
    public ContentAdsSettings contentAdsSettings;
    public AdUnit withContentAdsSettings(ContentAdsSettings contentAdsSettings) {
        this.contentAdsSettings = contentAdsSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public AdUnit withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AdUnit withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportingDimensionId")
    public String reportingDimensionId;
    public AdUnit withReportingDimensionId(String reportingDimensionId) {
        this.reportingDimensionId = reportingDimensionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public AdUnitStateEnum state;
    public AdUnit withState(AdUnitStateEnum state) {
        this.state = state;
        return this;
    }
}