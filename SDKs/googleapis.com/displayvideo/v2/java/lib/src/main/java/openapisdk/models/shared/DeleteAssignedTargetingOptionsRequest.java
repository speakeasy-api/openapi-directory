package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteAssignedTargetingOptionsRequest
 * A request listing which assigned targeting options of a given targeting type should be deleted.
**/
public class DeleteAssignedTargetingOptionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignedTargetingOptionIds")
    public String[] assignedTargetingOptionIds;
    public DeleteAssignedTargetingOptionsRequest withAssignedTargetingOptionIds(String[] assignedTargetingOptionIds) {
        this.assignedTargetingOptionIds = assignedTargetingOptionIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingType")
    public DeleteAssignedTargetingOptionsRequestTargetingTypeEnum targetingType;
    public DeleteAssignedTargetingOptionsRequest withTargetingType(DeleteAssignedTargetingOptionsRequestTargetingTypeEnum targetingType) {
        this.targetingType = targetingType;
        return this;
    }
}