package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BulkListInsertionOrderAssignedTargetingOptionsResponse
 * Response message for BulkListInsertionOrderAssignedTargetingOptions.
**/
public class BulkListInsertionOrderAssignedTargetingOptionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignedTargetingOptions")
    public AssignedTargetingOption[] assignedTargetingOptions;
    public BulkListInsertionOrderAssignedTargetingOptionsResponse withAssignedTargetingOptions(AssignedTargetingOption[] assignedTargetingOptions) {
        this.assignedTargetingOptions = assignedTargetingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public BulkListInsertionOrderAssignedTargetingOptionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}