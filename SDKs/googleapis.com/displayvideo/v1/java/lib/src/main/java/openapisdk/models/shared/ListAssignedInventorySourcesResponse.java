package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAssignedInventorySourcesResponse
 * Response message for AssignedInventorySourceService.ListAssignedInventorySources.
**/
public class ListAssignedInventorySourcesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignedInventorySources")
    public AssignedInventorySource[] assignedInventorySources;
    public ListAssignedInventorySourcesResponse withAssignedInventorySources(AssignedInventorySource[] assignedInventorySources) {
        this.assignedInventorySources = assignedInventorySources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListAssignedInventorySourcesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}