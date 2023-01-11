package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateAssignedTargetingOptionsRequestInput
 * A request listing which assigned targeting options of a given targeting type should be created and added.
**/
public class CreateAssignedTargetingOptionsRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignedTargetingOptions")
    public AssignedTargetingOptionInput[] assignedTargetingOptions;
    public CreateAssignedTargetingOptionsRequestInput withAssignedTargetingOptions(AssignedTargetingOptionInput[] assignedTargetingOptions) {
        this.assignedTargetingOptions = assignedTargetingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingType")
    public CreateAssignedTargetingOptionsRequestTargetingTypeEnum targetingType;
    public CreateAssignedTargetingOptionsRequestInput withTargetingType(CreateAssignedTargetingOptionsRequestTargetingTypeEnum targetingType) {
        this.targetingType = targetingType;
        return this;
    }
}