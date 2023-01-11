package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=inventorySourceGroupId")
    public String inventorySourceGroupId;
    public DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditPathParams withInventorySourceGroupId(String inventorySourceGroupId) {
        this.inventorySourceGroupId = inventorySourceGroupId;
        return this;
    }
}