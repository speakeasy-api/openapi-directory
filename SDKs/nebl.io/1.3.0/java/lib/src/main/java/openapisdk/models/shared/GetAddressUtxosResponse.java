package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAddressUtxosResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public GetAddressUtxosResponse withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public GetAddressUtxosResponse withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confirmations")
    public Double confirmations;
    public GetAddressUtxosResponse withConfirmations(Double confirmations) {
        this.confirmations = confirmations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scriptPubKey")
    public String scriptPubKey;
    public GetAddressUtxosResponse withScriptPubKey(String scriptPubKey) {
        this.scriptPubKey = scriptPubKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ts")
    public Double ts;
    public GetAddressUtxosResponse withTs(Double ts) {
        this.ts = ts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("txid")
    public String txid;
    public GetAddressUtxosResponse withTxid(String txid) {
        this.txid = txid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vout")
    public Double vout;
    public GetAddressUtxosResponse withVout(Double vout) {
        this.vout = vout;
        return this;
    }
}