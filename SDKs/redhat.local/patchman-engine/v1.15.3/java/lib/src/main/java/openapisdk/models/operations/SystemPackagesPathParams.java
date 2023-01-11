package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SystemPackagesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=inventory_id")
    public String inventoryId;
    public SystemPackagesPathParams withInventoryId(String inventoryId) {
        this.inventoryId = inventoryId;
        return this;
    }
}