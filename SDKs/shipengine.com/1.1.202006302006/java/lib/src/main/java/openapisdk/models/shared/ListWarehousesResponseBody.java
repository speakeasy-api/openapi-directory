package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListWarehousesResponseBody
 * A warehouse list response body
**/
public class ListWarehousesResponseBody {
    @JsonProperty("warehouses")
    public ListWarehousesResponseBodyWarehouse[] warehouses;
    public ListWarehousesResponseBody withWarehouses(ListWarehousesResponseBodyWarehouse[] warehouses) {
        this.warehouses = warehouses;
        return this;
    }
}