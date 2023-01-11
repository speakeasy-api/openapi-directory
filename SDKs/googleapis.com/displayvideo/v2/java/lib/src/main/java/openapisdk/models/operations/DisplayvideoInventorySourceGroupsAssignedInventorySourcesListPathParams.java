package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoInventorySourceGroupsAssignedInventorySourcesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=inventorySourceGroupId")
    public String inventorySourceGroupId;
    public DisplayvideoInventorySourceGroupsAssignedInventorySourcesListPathParams withInventorySourceGroupId(String inventorySourceGroupId) {
        this.inventorySourceGroupId = inventorySourceGroupId;
        return this;
    }
}