package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListInsertionOrderAssignedTargetingOptionsResponse
 * Response message for ListInsertionOrderAssignedTargetingOptions.
**/
public class ListInsertionOrderAssignedTargetingOptionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignedTargetingOptions")
    public AssignedTargetingOption[] assignedTargetingOptions;
    public ListInsertionOrderAssignedTargetingOptionsResponse withAssignedTargetingOptions(AssignedTargetingOption[] assignedTargetingOptions) {
        this.assignedTargetingOptions = assignedTargetingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListInsertionOrderAssignedTargetingOptionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}