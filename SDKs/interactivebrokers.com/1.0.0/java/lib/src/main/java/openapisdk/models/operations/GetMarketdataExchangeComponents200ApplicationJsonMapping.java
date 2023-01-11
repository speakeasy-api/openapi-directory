package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMarketdataExchangeComponents200ApplicationJsonMapping {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bit")
    public Double bit;
    public GetMarketdataExchangeComponents200ApplicationJsonMapping withBit(Double bit) {
        this.bit = bit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public GetMarketdataExchangeComponents200ApplicationJsonMapping withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exchange")
    public String exchange;
    public GetMarketdataExchangeComponents200ApplicationJsonMapping withExchange(String exchange) {
        this.exchange = exchange;
        return this;
    }
}