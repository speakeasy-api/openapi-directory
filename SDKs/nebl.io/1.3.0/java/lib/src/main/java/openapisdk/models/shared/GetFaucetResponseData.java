package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFaucetResponseData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("txId")
    public String txId;
    public GetFaucetResponseData withTxId(String txId) {
        this.txId = txId;
        return this;
    }
}