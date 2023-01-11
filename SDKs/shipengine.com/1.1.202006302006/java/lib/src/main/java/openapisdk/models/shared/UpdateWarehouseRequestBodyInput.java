package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateWarehouseRequestBodyInput
 * A warehouse
**/
public class UpdateWarehouseRequestBodyInput {
    @JsonProperty("name")
    public String name;
    public UpdateWarehouseRequestBodyInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("origin_address")
    public Address originAddress;
    public UpdateWarehouseRequestBodyInput withOriginAddress(Address originAddress) {
        this.originAddress = originAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("return_address")
    public Address returnAddress;
    public UpdateWarehouseRequestBodyInput withReturnAddress(Address returnAddress) {
        this.returnAddress = returnAddress;
        return this;
    }
}