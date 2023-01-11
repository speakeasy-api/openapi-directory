package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMarketdataSnapshot200ApplicationJsonBid {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("market")
    public Double market;
    public GetMarketdataSnapshot200ApplicationJsonBid withMarket(Double market) {
        this.market = market;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Double price;
    public GetMarketdataSnapshot200ApplicationJsonBid withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Double size;
    public GetMarketdataSnapshot200ApplicationJsonBid withSize(Double size) {
        this.size = size;
        return this;
    }
}