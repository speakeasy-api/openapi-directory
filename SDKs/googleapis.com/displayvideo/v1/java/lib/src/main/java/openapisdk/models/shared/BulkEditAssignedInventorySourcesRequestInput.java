package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BulkEditAssignedInventorySourcesRequestInput
 * Request message for AssignedInventorySourceService.BulkEdit.
**/
public class BulkEditAssignedInventorySourcesRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public BulkEditAssignedInventorySourcesRequestInput withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdAssignedInventorySources")
    public AssignedInventorySourceInput[] createdAssignedInventorySources;
    public BulkEditAssignedInventorySourcesRequestInput withCreatedAssignedInventorySources(AssignedInventorySourceInput[] createdAssignedInventorySources) {
        this.createdAssignedInventorySources = createdAssignedInventorySources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deletedAssignedInventorySources")
    public String[] deletedAssignedInventorySources;
    public BulkEditAssignedInventorySourcesRequestInput withDeletedAssignedInventorySources(String[] deletedAssignedInventorySources) {
        this.deletedAssignedInventorySources = deletedAssignedInventorySources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerId")
    public String partnerId;
    public BulkEditAssignedInventorySourcesRequestInput withPartnerId(String partnerId) {
        this.partnerId = partnerId;
        return this;
    }
}