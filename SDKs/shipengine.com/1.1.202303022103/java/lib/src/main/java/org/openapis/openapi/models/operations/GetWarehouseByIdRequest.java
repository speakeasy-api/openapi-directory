/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetWarehouseByIdRequest {
    /**
     * Warehouse ID
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=warehouse_id")
    public String warehouseId;
    public GetWarehouseByIdRequest withWarehouseId(String warehouseId) {
        this.warehouseId = warehouseId;
        return this;
    }
    
}
