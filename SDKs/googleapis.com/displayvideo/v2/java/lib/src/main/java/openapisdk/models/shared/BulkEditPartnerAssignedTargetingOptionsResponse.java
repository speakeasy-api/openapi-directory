package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BulkEditPartnerAssignedTargetingOptionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdAssignedTargetingOptions")
    public AssignedTargetingOption[] createdAssignedTargetingOptions;
    public BulkEditPartnerAssignedTargetingOptionsResponse withCreatedAssignedTargetingOptions(AssignedTargetingOption[] createdAssignedTargetingOptions) {
        this.createdAssignedTargetingOptions = createdAssignedTargetingOptions;
        return this;
    }
}