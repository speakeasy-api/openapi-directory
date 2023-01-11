package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletesystemPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=inventory_id")
    public String inventoryId;
    public DeletesystemPathParams withInventoryId(String inventoryId) {
        this.inventoryId = inventoryId;
        return this;
    }
}