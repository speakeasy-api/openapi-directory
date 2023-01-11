package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMarketdataSnapshot200ApplicationJsonTrade {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("market")
    public Double market;
    public GetMarketdataSnapshot200ApplicationJsonTrade withMarket(Double market) {
        this.market = market;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Double price;
    public GetMarketdataSnapshot200ApplicationJsonTrade withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Double size;
    public GetMarketdataSnapshot200ApplicationJsonTrade withSize(Double size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time")
    public Double time;
    public GetMarketdataSnapshot200ApplicationJsonTrade withTime(Double time) {
        this.time = time;
        return this;
    }
}