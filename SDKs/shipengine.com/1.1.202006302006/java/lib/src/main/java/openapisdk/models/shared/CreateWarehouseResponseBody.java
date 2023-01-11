package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * CreateWarehouseResponseBody
 * A warehouse
**/
public class CreateWarehouseResponseBody {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public CreateWarehouseResponseBody withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateWarehouseResponseBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("origin_address")
    public Address originAddress;
    public CreateWarehouseResponseBody withOriginAddress(Address originAddress) {
        this.originAddress = originAddress;
        return this;
    }
    @JsonProperty("return_address")
    public Address returnAddress;
    public CreateWarehouseResponseBody withReturnAddress(Address returnAddress) {
        this.returnAddress = returnAddress;
        return this;
    }
    @JsonProperty("warehouse_id")
    public java.util.Map<String, Object> warehouseId;
    public CreateWarehouseResponseBody withWarehouseId(java.util.Map<String, Object> warehouseId) {
        this.warehouseId = warehouseId;
        return this;
    }
}