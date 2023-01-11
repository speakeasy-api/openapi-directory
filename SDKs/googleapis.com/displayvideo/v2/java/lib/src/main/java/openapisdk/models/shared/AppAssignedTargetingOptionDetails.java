package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppAssignedTargetingOptionDetails
 * Details for assigned app targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP`.
**/
public class AppAssignedTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appId")
    public String appId;
    public AppAssignedTargetingOptionDetails withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appPlatform")
    public AppAssignedTargetingOptionDetailsAppPlatformEnum appPlatform;
    public AppAssignedTargetingOptionDetails withAppPlatform(AppAssignedTargetingOptionDetailsAppPlatformEnum appPlatform) {
        this.appPlatform = appPlatform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public AppAssignedTargetingOptionDetails withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("negative")
    public Boolean negative;
    public AppAssignedTargetingOptionDetails withNegative(Boolean negative) {
        this.negative = negative;
        return this;
    }
}