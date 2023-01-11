package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * GetWarehouseByIdResponseBody
 * A warehouse
**/
public class GetWarehouseByIdResponseBody {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public GetWarehouseByIdResponseBody withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetWarehouseByIdResponseBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("origin_address")
    public Address originAddress;
    public GetWarehouseByIdResponseBody withOriginAddress(Address originAddress) {
        this.originAddress = originAddress;
        return this;
    }
    @JsonProperty("return_address")
    public Address returnAddress;
    public GetWarehouseByIdResponseBody withReturnAddress(Address returnAddress) {
        this.returnAddress = returnAddress;
        return this;
    }
    @JsonProperty("warehouse_id")
    public java.util.Map<String, Object> warehouseId;
    public GetWarehouseByIdResponseBody withWarehouseId(java.util.Map<String, Object> warehouseId) {
        this.warehouseId = warehouseId;
        return this;
    }
}