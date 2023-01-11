package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoInventorySourcesPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=inventorySourceId")
    public String inventorySourceId;
    public DisplayvideoInventorySourcesPatchPathParams withInventorySourceId(String inventorySourceId) {
        this.inventorySourceId = inventorySourceId;
        return this;
    }
}