package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OnScreenPositionTargetingOptionDetails
 * Represents a targetable on screen position, which could be used by display and video ads. This will be populated in the on_screen_position_details field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`.
**/
public class OnScreenPositionTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onScreenPosition")
    public OnScreenPositionTargetingOptionDetailsOnScreenPositionEnum onScreenPosition;
    public OnScreenPositionTargetingOptionDetails withOnScreenPosition(OnScreenPositionTargetingOptionDetailsOnScreenPositionEnum onScreenPosition) {
        this.onScreenPosition = onScreenPosition;
        return this;
    }
}