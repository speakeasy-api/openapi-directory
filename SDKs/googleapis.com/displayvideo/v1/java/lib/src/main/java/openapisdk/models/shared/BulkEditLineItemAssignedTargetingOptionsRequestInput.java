package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BulkEditLineItemAssignedTargetingOptionsRequestInput
 * Request message for BulkEditLineItemAssignedTargetingOptions.
**/
public class BulkEditLineItemAssignedTargetingOptionsRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createRequests")
    public CreateAssignedTargetingOptionsRequestInput[] createRequests;
    public BulkEditLineItemAssignedTargetingOptionsRequestInput withCreateRequests(CreateAssignedTargetingOptionsRequestInput[] createRequests) {
        this.createRequests = createRequests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteRequests")
    public DeleteAssignedTargetingOptionsRequest[] deleteRequests;
    public BulkEditLineItemAssignedTargetingOptionsRequestInput withDeleteRequests(DeleteAssignedTargetingOptionsRequest[] deleteRequests) {
        this.deleteRequests = deleteRequests;
        return this;
    }
}