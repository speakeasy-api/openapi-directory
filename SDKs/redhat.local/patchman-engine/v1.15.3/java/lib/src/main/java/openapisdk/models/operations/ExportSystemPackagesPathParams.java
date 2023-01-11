package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportSystemPackagesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=inventory_id")
    public String inventoryId;
    public ExportSystemPackagesPathParams withInventoryId(String inventoryId) {
        this.inventoryId = inventoryId;
        return this;
    }
}