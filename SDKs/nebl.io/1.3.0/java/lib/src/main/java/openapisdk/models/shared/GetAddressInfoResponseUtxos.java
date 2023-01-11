package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAddressInfoResponseUtxos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockheight")
    public Double blockheight;
    public GetAddressInfoResponseUtxos withBlockheight(Double blockheight) {
        this.blockheight = blockheight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blocktime")
    public Double blocktime;
    public GetAddressInfoResponseUtxos withBlocktime(Double blocktime) {
        this.blocktime = blocktime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("index")
    public Double index;
    public GetAddressInfoResponseUtxos withIndex(Double index) {
        this.index = index;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scriptPubKey")
    public java.util.Map<String, Object> scriptPubKey;
    public GetAddressInfoResponseUtxos withScriptPubKey(java.util.Map<String, Object> scriptPubKey) {
        this.scriptPubKey = scriptPubKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokens")
    public GetAddressInfoResponseUtxosTokens[] tokens;
    public GetAddressInfoResponseUtxos withTokens(GetAddressInfoResponseUtxosTokens[] tokens) {
        this.tokens = tokens;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("txid")
    public String txid;
    public GetAddressInfoResponseUtxos withTxid(String txid) {
        this.txid = txid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("used")
    public Boolean used;
    public GetAddressInfoResponseUtxos withUsed(Boolean used) {
        this.used = used;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Double value;
    public GetAddressInfoResponseUtxos withValue(Double value) {
        this.value = value;
        return this;
    }
}