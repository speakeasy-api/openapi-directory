package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BroadcastTxRequest {
    @JsonProperty("txHex")
    public String txHex;
    public BroadcastTxRequest withTxHex(String txHex) {
        this.txHex = txHex;
        return this;
    }
}