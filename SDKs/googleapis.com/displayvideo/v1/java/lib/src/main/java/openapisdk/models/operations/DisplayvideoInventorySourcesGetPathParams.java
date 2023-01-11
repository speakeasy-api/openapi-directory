package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoInventorySourcesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=inventorySourceId")
    public String inventorySourceId;
    public DisplayvideoInventorySourcesGetPathParams withInventorySourceId(String inventorySourceId) {
        this.inventorySourceId = inventorySourceId;
        return this;
    }
}