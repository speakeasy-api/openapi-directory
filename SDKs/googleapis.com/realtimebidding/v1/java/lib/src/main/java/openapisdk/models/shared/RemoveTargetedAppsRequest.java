package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RemoveTargetedAppsRequest
 * A request to stop targeting the provided apps in a specific pretargeting configuration. The pretargeting configuration itself specifies how these apps are targeted. in PretargetingConfig.appTargeting.mobileAppTargeting.
**/
public class RemoveTargetedAppsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appIds")
    public String[] appIds;
    public RemoveTargetedAppsRequest withAppIds(String[] appIds) {
        this.appIds = appIds;
        return this;
    }
}