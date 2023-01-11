package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OmnitureSettings
 * Omniture Integration Settings.
**/
public class OmnitureSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("omnitureCostDataEnabled")
    public Boolean omnitureCostDataEnabled;
    public OmnitureSettings withOmnitureCostDataEnabled(Boolean omnitureCostDataEnabled) {
        this.omnitureCostDataEnabled = omnitureCostDataEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("omnitureIntegrationEnabled")
    public Boolean omnitureIntegrationEnabled;
    public OmnitureSettings withOmnitureIntegrationEnabled(Boolean omnitureIntegrationEnabled) {
        this.omnitureIntegrationEnabled = omnitureIntegrationEnabled;
        return this;
    }
}