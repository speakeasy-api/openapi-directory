package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BulkEditAdvertiserAssignedTargetingOptionsRequestInput
 * Request message for BulkEditAdvertiserAssignedTargetingOptions.
**/
public class BulkEditAdvertiserAssignedTargetingOptionsRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createRequests")
    public CreateAssignedTargetingOptionsRequestInput[] createRequests;
    public BulkEditAdvertiserAssignedTargetingOptionsRequestInput withCreateRequests(CreateAssignedTargetingOptionsRequestInput[] createRequests) {
        this.createRequests = createRequests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteRequests")
    public DeleteAssignedTargetingOptionsRequest[] deleteRequests;
    public BulkEditAdvertiserAssignedTargetingOptionsRequestInput withDeleteRequests(DeleteAssignedTargetingOptionsRequest[] deleteRequests) {
        this.deleteRequests = deleteRequests;
        return this;
    }
}