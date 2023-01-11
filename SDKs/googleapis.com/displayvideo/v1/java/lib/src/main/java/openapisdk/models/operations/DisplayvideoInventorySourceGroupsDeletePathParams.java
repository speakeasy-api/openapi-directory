package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoInventorySourceGroupsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=inventorySourceGroupId")
    public String inventorySourceGroupId;
    public DisplayvideoInventorySourceGroupsDeletePathParams withInventorySourceGroupId(String inventorySourceGroupId) {
        this.inventorySourceGroupId = inventorySourceGroupId;
        return this;
    }
}