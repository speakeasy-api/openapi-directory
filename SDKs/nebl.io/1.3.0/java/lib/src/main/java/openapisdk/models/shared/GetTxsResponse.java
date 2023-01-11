package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetTxsResponse
 * Object containing an array of transaction objects
**/
public class GetTxsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pagesTotal")
    public Double pagesTotal;
    public GetTxsResponse withPagesTotal(Double pagesTotal) {
        this.pagesTotal = pagesTotal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("txs")
    public GetTxResponse[] txs;
    public GetTxsResponse withTxs(GetTxResponse[] txs) {
        this.txs = txs;
        return this;
    }
}