package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BulkEditAssignedInventorySourcesResponse
 * Response message for AssignedInventorySourceService.BulkEdit.
**/
public class BulkEditAssignedInventorySourcesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignedInventorySources")
    public AssignedInventorySource[] assignedInventorySources;
    public BulkEditAssignedInventorySourcesResponse withAssignedInventorySources(AssignedInventorySource[] assignedInventorySources) {
        this.assignedInventorySources = assignedInventorySources;
        return this;
    }
}