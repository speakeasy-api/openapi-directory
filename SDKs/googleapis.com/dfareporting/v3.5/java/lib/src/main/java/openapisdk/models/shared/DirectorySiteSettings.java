package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DirectorySiteSettings
 * Directory Site Settings
**/
public class DirectorySiteSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeViewOptOut")
    public Boolean activeViewOptOut;
    public DirectorySiteSettings withActiveViewOptOut(Boolean activeViewOptOut) {
        this.activeViewOptOut = activeViewOptOut;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dfpSettings")
    public DfpSettings dfpSettings;
    public DirectorySiteSettings withDfpSettings(DfpSettings dfpSettings) {
        this.dfpSettings = dfpSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instreamVideoPlacementAccepted")
    public Boolean instreamVideoPlacementAccepted;
    public DirectorySiteSettings withInstreamVideoPlacementAccepted(Boolean instreamVideoPlacementAccepted) {
        this.instreamVideoPlacementAccepted = instreamVideoPlacementAccepted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interstitialPlacementAccepted")
    public Boolean interstitialPlacementAccepted;
    public DirectorySiteSettings withInterstitialPlacementAccepted(Boolean interstitialPlacementAccepted) {
        this.interstitialPlacementAccepted = interstitialPlacementAccepted;
        return this;
    }
}