package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWarehousePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=warehouse_id")
    public String warehouseId;
    public UpdateWarehousePathParams withWarehouseId(String warehouseId) {
        this.warehouseId = warehouseId;
        return this;
    }
}