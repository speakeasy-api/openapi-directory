package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OnScreenPositionAssignedTargetingOptionDetails
 * On screen position targeting option details. This will be populated in the on_screen_position_details field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`.
**/
public class OnScreenPositionAssignedTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adType")
    public OnScreenPositionAssignedTargetingOptionDetailsAdTypeEnum adType;
    public OnScreenPositionAssignedTargetingOptionDetails withAdType(OnScreenPositionAssignedTargetingOptionDetailsAdTypeEnum adType) {
        this.adType = adType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onScreenPosition")
    public OnScreenPositionAssignedTargetingOptionDetailsOnScreenPositionEnum onScreenPosition;
    public OnScreenPositionAssignedTargetingOptionDetails withOnScreenPosition(OnScreenPositionAssignedTargetingOptionDetailsOnScreenPositionEnum onScreenPosition) {
        this.onScreenPosition = onScreenPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingOptionId")
    public String targetingOptionId;
    public OnScreenPositionAssignedTargetingOptionDetails withTargetingOptionId(String targetingOptionId) {
        this.targetingOptionId = targetingOptionId;
        return this;
    }
}