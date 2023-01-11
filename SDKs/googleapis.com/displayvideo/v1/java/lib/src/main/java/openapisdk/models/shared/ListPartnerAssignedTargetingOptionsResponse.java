package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPartnerAssignedTargetingOptionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignedTargetingOptions")
    public AssignedTargetingOption[] assignedTargetingOptions;
    public ListPartnerAssignedTargetingOptionsResponse withAssignedTargetingOptions(AssignedTargetingOption[] assignedTargetingOptions) {
        this.assignedTargetingOptions = assignedTargetingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListPartnerAssignedTargetingOptionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}