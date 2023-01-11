package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ParentalStatusAssignedTargetingOptionDetails
 * Details for assigned parental status targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_PARENTAL_STATUS`.
**/
public class ParentalStatusAssignedTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentalStatus")
    public ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum parentalStatus;
    public ParentalStatusAssignedTargetingOptionDetails withParentalStatus(ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum parentalStatus) {
        this.parentalStatus = parentalStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingOptionId")
    public String targetingOptionId;
    public ParentalStatusAssignedTargetingOptionDetails withTargetingOptionId(String targetingOptionId) {
        this.targetingOptionId = targetingOptionId;
        return this;
    }
}