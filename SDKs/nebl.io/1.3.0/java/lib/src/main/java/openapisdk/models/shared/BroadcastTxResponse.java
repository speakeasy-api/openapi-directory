package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BroadcastTxResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("txid")
    public String txid;
    public BroadcastTxResponse withTxid(String txid) {
        this.txid = txid;
        return this;
    }
}