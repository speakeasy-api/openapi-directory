package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OperatingSystemAssignedTargetingOptionDetailsInput
 * Assigned operating system targeting option details. This will be populated in the operating_system_details field when targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`.
**/
public class OperatingSystemAssignedTargetingOptionDetailsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("negative")
    public Boolean negative;
    public OperatingSystemAssignedTargetingOptionDetailsInput withNegative(Boolean negative) {
        this.negative = negative;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingOptionId")
    public String targetingOptionId;
    public OperatingSystemAssignedTargetingOptionDetailsInput withTargetingOptionId(String targetingOptionId) {
        this.targetingOptionId = targetingOptionId;
        return this;
    }
}