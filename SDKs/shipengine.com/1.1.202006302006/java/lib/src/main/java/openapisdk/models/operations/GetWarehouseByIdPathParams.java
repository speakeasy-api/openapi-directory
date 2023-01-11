package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWarehouseByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=warehouse_id")
    public String warehouseId;
    public GetWarehouseByIdPathParams withWarehouseId(String warehouseId) {
        this.warehouseId = warehouseId;
        return this;
    }
}