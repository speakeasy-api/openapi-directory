package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoInventorySourceGroupsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=inventorySourceGroupId")
    public String inventorySourceGroupId;
    public DisplayvideoInventorySourceGroupsGetPathParams withInventorySourceGroupId(String inventorySourceGroupId) {
        this.inventorySourceGroupId = inventorySourceGroupId;
        return this;
    }
}