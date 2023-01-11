package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assignedInventorySourceId")
    public String assignedInventorySourceId;
    public DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeletePathParams withAssignedInventorySourceId(String assignedInventorySourceId) {
        this.assignedInventorySourceId = assignedInventorySourceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=inventorySourceGroupId")
    public String inventorySourceGroupId;
    public DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeletePathParams withInventorySourceGroupId(String inventorySourceGroupId) {
        this.inventorySourceGroupId = inventorySourceGroupId;
        return this;
    }
}