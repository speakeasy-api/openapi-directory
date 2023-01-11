package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NativeContentPositionAssignedTargetingOptionDetails
 * Details for native content position assigned targeting option. This will be populated in the native_content_position_details field when targeting_type is `TARGETING_TYPE_NATIVE_CONTENT_POSITION`. Explicitly targeting all options is not supported. Remove all native content position targeting options to achieve this effect.
**/
public class NativeContentPositionAssignedTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentPosition")
    public NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum contentPosition;
    public NativeContentPositionAssignedTargetingOptionDetails withContentPosition(NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum contentPosition) {
        this.contentPosition = contentPosition;
        return this;
    }
}