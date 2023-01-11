package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddTargetedAppsRequest
 * A request to start targeting the provided app IDs in a specific pretargeting configuration. The pretargeting configuration itself specifies how these apps are targeted. in PretargetingConfig.appTargeting.mobileAppTargeting.
**/
public class AddTargetedAppsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appIds")
    public String[] appIds;
    public AddTargetedAppsRequest withAppIds(String[] appIds) {
        this.appIds = appIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingMode")
    public AddTargetedAppsRequestTargetingModeEnum targetingMode;
    public AddTargetedAppsRequest withTargetingMode(AddTargetedAppsRequestTargetingModeEnum targetingMode) {
        this.targetingMode = targetingMode;
        return this;
    }
}