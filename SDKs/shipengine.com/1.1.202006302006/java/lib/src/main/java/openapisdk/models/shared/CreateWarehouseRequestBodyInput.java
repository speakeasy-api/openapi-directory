package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateWarehouseRequestBodyInput
 * A warehouse
**/
public class CreateWarehouseRequestBodyInput {
    @JsonProperty("name")
    public String name;
    public CreateWarehouseRequestBodyInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("origin_address")
    public Address originAddress;
    public CreateWarehouseRequestBodyInput withOriginAddress(Address originAddress) {
        this.originAddress = originAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("return_address")
    public Address returnAddress;
    public CreateWarehouseRequestBodyInput withReturnAddress(Address returnAddress) {
        this.returnAddress = returnAddress;
        return this;
    }
}