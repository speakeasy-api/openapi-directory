package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMarketdataExchangeComponents200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Complete")
    public Boolean complete;
    public GetMarketdataExchangeComponents200ApplicationJson withComplete(Boolean complete) {
        this.complete = complete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConId")
    public Double conId;
    public GetMarketdataExchangeComponents200ApplicationJson withConId(Double conId) {
        this.conId = conId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mapping")
    public GetMarketdataExchangeComponents200ApplicationJsonMapping[] mapping;
    public GetMarketdataExchangeComponents200ApplicationJson withMapping(GetMarketdataExchangeComponents200ApplicationJsonMapping[] mapping) {
        this.mapping = mapping;
        return this;
    }
}