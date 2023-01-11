package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BulkEditPartnerAssignedTargetingOptionsRequestInput
 * Request message for BulkEditPartnerAssignedTargetingOptions.
**/
public class BulkEditPartnerAssignedTargetingOptionsRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createRequests")
    public CreateAssignedTargetingOptionsRequestInput[] createRequests;
    public BulkEditPartnerAssignedTargetingOptionsRequestInput withCreateRequests(CreateAssignedTargetingOptionsRequestInput[] createRequests) {
        this.createRequests = createRequests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteRequests")
    public DeleteAssignedTargetingOptionsRequest[] deleteRequests;
    public BulkEditPartnerAssignedTargetingOptionsRequestInput withDeleteRequests(DeleteAssignedTargetingOptionsRequest[] deleteRequests) {
        this.deleteRequests = deleteRequests;
        return this;
    }
}