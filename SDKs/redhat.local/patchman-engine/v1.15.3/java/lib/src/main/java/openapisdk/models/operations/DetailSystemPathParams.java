package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetailSystemPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=inventory_id")
    public String inventoryId;
    public DetailSystemPathParams withInventoryId(String inventoryId) {
        this.inventoryId = inventoryId;
        return this;
    }
}