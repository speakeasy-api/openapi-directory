package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMarketdataSnapshotRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conid")
    public Double conid;
    public GetMarketdataSnapshotRequestBody withConid(Double conid) {
        this.conid = conid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public GetMarketdataSnapshotRequestBody withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exchange")
    public String exchange;
    public GetMarketdataSnapshotRequestBody withExchange(String exchange) {
        this.exchange = exchange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("symbol")
    public String symbol;
    public GetMarketdataSnapshotRequestBody withSymbol(String symbol) {
        this.symbol = symbol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GetMarketdataSnapshotRequestBody withType(String type) {
        this.type = type;
        return this;
    }
}