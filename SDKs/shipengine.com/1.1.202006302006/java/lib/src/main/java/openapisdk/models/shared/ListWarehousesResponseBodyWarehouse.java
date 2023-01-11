package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ListWarehousesResponseBodyWarehouse
 * A warehouse
**/
public class ListWarehousesResponseBodyWarehouse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public ListWarehousesResponseBodyWarehouse withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListWarehousesResponseBodyWarehouse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("origin_address")
    public Address originAddress;
    public ListWarehousesResponseBodyWarehouse withOriginAddress(Address originAddress) {
        this.originAddress = originAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("return_address")
    public Address returnAddress;
    public ListWarehousesResponseBodyWarehouse withReturnAddress(Address returnAddress) {
        this.returnAddress = returnAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warehouse_id")
    public java.util.Map<String, Object> warehouseId;
    public ListWarehousesResponseBodyWarehouse withWarehouseId(java.util.Map<String, Object> warehouseId) {
        this.warehouseId = warehouseId;
        return this;
    }
}