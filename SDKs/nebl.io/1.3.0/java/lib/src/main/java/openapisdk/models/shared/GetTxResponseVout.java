package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTxResponseVout {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockheight")
    public Double blockheight;
    public GetTxResponseVout withBlockheight(Double blockheight) {
        this.blockheight = blockheight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("n")
    public Double n;
    public GetTxResponseVout withN(Double n) {
        this.n = n;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scriptPubKey")
    public GetTxResponseVoutScriptPubKey scriptPubKey;
    public GetTxResponseVout withScriptPubKey(GetTxResponseVoutScriptPubKey scriptPubKey) {
        this.scriptPubKey = scriptPubKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("used")
    public Boolean used;
    public GetTxResponseVout withUsed(Boolean used) {
        this.used = used;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usedBlockheight")
    public Double usedBlockheight;
    public GetTxResponseVout withUsedBlockheight(Double usedBlockheight) {
        this.usedBlockheight = usedBlockheight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usedTxid")
    public String usedTxid;
    public GetTxResponseVout withUsedTxid(String usedTxid) {
        this.usedTxid = usedTxid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Double value;
    public GetTxResponseVout withValue(Double value) {
        this.value = value;
        return this;
    }
}