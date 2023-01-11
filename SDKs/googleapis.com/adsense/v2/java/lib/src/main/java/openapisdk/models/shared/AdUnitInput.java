package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdUnitInput
 * Representation of an ad unit. An ad unit represents a saved ad unit with a specific set of ad settings that have been customized within an account.
**/
public class AdUnitInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentAdsSettings")
    public ContentAdsSettings contentAdsSettings;
    public AdUnitInput withContentAdsSettings(ContentAdsSettings contentAdsSettings) {
        this.contentAdsSettings = contentAdsSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public AdUnitInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public AdUnitStateEnum state;
    public AdUnitInput withState(AdUnitStateEnum state) {
        this.state = state;
        return this;
    }
}