package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMarketdataSnapshot200ApplicationJsonClosing {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Double price;
    public GetMarketdataSnapshot200ApplicationJsonClosing withPrice(Double price) {
        this.price = price;
        return this;
    }
}