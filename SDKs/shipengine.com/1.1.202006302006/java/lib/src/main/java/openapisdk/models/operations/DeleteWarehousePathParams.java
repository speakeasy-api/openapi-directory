package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWarehousePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=warehouse_id")
    public String warehouseId;
    public DeleteWarehousePathParams withWarehouseId(String warehouseId) {
        this.warehouseId = warehouseId;
        return this;
    }
}