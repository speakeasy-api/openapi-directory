package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BulkEditAssignedTargetingOptionsRequestInput
 * Request message for BulkEditLineItemsAssignedTargetingOptions.
**/
public class BulkEditAssignedTargetingOptionsRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createRequests")
    public CreateAssignedTargetingOptionsRequestInput[] createRequests;
    public BulkEditAssignedTargetingOptionsRequestInput withCreateRequests(CreateAssignedTargetingOptionsRequestInput[] createRequests) {
        this.createRequests = createRequests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteRequests")
    public DeleteAssignedTargetingOptionsRequest[] deleteRequests;
    public BulkEditAssignedTargetingOptionsRequestInput withDeleteRequests(DeleteAssignedTargetingOptionsRequest[] deleteRequests) {
        this.deleteRequests = deleteRequests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItemIds")
    public String[] lineItemIds;
    public BulkEditAssignedTargetingOptionsRequestInput withLineItemIds(String[] lineItemIds) {
        this.lineItemIds = lineItemIds;
        return this;
    }
}