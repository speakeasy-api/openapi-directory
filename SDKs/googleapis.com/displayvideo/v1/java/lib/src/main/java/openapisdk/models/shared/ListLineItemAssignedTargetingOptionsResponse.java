package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListLineItemAssignedTargetingOptionsResponse
 * Response message for ListLineItemAssignedTargetingOptions.
**/
public class ListLineItemAssignedTargetingOptionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignedTargetingOptions")
    public AssignedTargetingOption[] assignedTargetingOptions;
    public ListLineItemAssignedTargetingOptionsResponse withAssignedTargetingOptions(AssignedTargetingOption[] assignedTargetingOptions) {
        this.assignedTargetingOptions = assignedTargetingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListLineItemAssignedTargetingOptionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}