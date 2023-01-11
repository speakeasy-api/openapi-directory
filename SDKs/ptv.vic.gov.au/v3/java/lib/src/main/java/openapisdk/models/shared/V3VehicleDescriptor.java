package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3VehicleDescriptor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("air_conditioned")
    public Boolean airConditioned;
    public V3VehicleDescriptor withAirConditioned(Boolean airConditioned) {
        this.airConditioned = airConditioned;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public V3VehicleDescriptor withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public V3VehicleDescriptor withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("length")
    public String length;
    public V3VehicleDescriptor withLength(String length) {
        this.length = length;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("low_floor")
    public Boolean lowFloor;
    public V3VehicleDescriptor withLowFloor(Boolean lowFloor) {
        this.lowFloor = lowFloor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operator")
    public String operator;
    public V3VehicleDescriptor withOperator(String operator) {
        this.operator = operator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supplier")
    public String supplier;
    public V3VehicleDescriptor withSupplier(String supplier) {
        this.supplier = supplier;
        return this;
    }
}