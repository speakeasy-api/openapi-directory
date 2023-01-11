package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceMakeModelAssignedTargetingOptionDetailsInput
 * Assigned device make and model targeting option details. This will be populated in the device_make_model_details field when targeting_type is `TARGETING_TYPE_DEVICE_MAKE_MODEL`.
**/
public class DeviceMakeModelAssignedTargetingOptionDetailsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("negative")
    public Boolean negative;
    public DeviceMakeModelAssignedTargetingOptionDetailsInput withNegative(Boolean negative) {
        this.negative = negative;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingOptionId")
    public String targetingOptionId;
    public DeviceMakeModelAssignedTargetingOptionDetailsInput withTargetingOptionId(String targetingOptionId) {
        this.targetingOptionId = targetingOptionId;
        return this;
    }
}