package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetListsBestSellersHistoryJson200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyright")
    public String copyright;
    public GetListsBestSellersHistoryJson200ApplicationJson withCopyright(String copyright) {
        this.copyright = copyright;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("num_results")
    public Long numResults;
    public GetListsBestSellersHistoryJson200ApplicationJson withNumResults(Long numResults) {
        this.numResults = numResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public GetListsBestSellersHistoryJson200ApplicationJsonResults[] results;
    public GetListsBestSellersHistoryJson200ApplicationJson withResults(GetListsBestSellersHistoryJson200ApplicationJsonResults[] results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GetListsBestSellersHistoryJson200ApplicationJson withStatus(String status) {
        this.status = status;
        return this;
    }
}