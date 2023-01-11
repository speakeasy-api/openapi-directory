package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMarketdataSnapshot200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Bid")
    public GetMarketdataSnapshot200ApplicationJsonBid bid;
    public GetMarketdataSnapshot200ApplicationJson withBid(GetMarketdataSnapshot200ApplicationJsonBid bid) {
        this.bid = bid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Closing")
    public GetMarketdataSnapshot200ApplicationJsonClosing closing;
    public GetMarketdataSnapshot200ApplicationJson withClosing(GetMarketdataSnapshot200ApplicationJsonClosing closing) {
        this.closing = closing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Complete")
    public Boolean complete;
    public GetMarketdataSnapshot200ApplicationJson withComplete(Boolean complete) {
        this.complete = complete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Conid")
    public String conid;
    public GetMarketdataSnapshot200ApplicationJson withConid(String conid) {
        this.conid = conid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Offer")
    public GetMarketdataSnapshot200ApplicationJsonOffer offer;
    public GetMarketdataSnapshot200ApplicationJson withOffer(GetMarketdataSnapshot200ApplicationJsonOffer offer) {
        this.offer = offer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Temporality")
    public Double temporality;
    public GetMarketdataSnapshot200ApplicationJson withTemporality(Double temporality) {
        this.temporality = temporality;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Trade")
    public GetMarketdataSnapshot200ApplicationJsonTrade trade;
    public GetMarketdataSnapshot200ApplicationJson withTrade(GetMarketdataSnapshot200ApplicationJsonTrade trade) {
        this.trade = trade;
        return this;
    }
}