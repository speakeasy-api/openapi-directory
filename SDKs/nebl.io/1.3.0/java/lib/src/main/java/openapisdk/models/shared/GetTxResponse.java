package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTxResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockhash")
    public String blockhash;
    public GetTxResponse withBlockhash(String blockhash) {
        this.blockhash = blockhash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockheight")
    public Double blockheight;
    public GetTxResponse withBlockheight(Double blockheight) {
        this.blockheight = blockheight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blocktime")
    public Double blocktime;
    public GetTxResponse withBlocktime(Double blocktime) {
        this.blocktime = blocktime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confirmations")
    public Double confirmations;
    public GetTxResponse withConfirmations(Double confirmations) {
        this.confirmations = confirmations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fee")
    public Double fee;
    public GetTxResponse withFee(Double fee) {
        this.fee = fee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fees")
    public Double fees;
    public GetTxResponse withFees(Double fees) {
        this.fees = fees;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locktime")
    public Double locktime;
    public GetTxResponse withLocktime(Double locktime) {
        this.locktime = locktime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Double size;
    public GetTxResponse withSize(Double size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time")
    public Double time;
    public GetTxResponse withTime(Double time) {
        this.time = time;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalsent")
    public Double totalsent;
    public GetTxResponse withTotalsent(Double totalsent) {
        this.totalsent = totalsent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("txid")
    public String txid;
    public GetTxResponse withTxid(String txid) {
        this.txid = txid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueIn")
    public Double valueIn;
    public GetTxResponse withValueIn(Double valueIn) {
        this.valueIn = valueIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueOut")
    public Double valueOut;
    public GetTxResponse withValueOut(Double valueOut) {
        this.valueOut = valueOut;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Double version;
    public GetTxResponse withVersion(Double version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vin")
    public GetTxResponseVin[] vin;
    public GetTxResponse withVin(GetTxResponseVin[] vin) {
        this.vin = vin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vout")
    public GetTxResponseVout[] vout;
    public GetTxResponse withVout(GetTxResponseVout[] vout) {
        this.vout = vout;
        return this;
    }
}