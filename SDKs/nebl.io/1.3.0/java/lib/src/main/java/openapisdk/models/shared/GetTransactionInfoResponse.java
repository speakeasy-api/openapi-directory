package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTransactionInfoResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockhash")
    public String blockhash;
    public GetTransactionInfoResponse withBlockhash(String blockhash) {
        this.blockhash = blockhash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockheight")
    public Double blockheight;
    public GetTransactionInfoResponse withBlockheight(Double blockheight) {
        this.blockheight = blockheight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blocktime")
    public Double blocktime;
    public GetTransactionInfoResponse withBlocktime(Double blocktime) {
        this.blocktime = blocktime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confirmations")
    public Double confirmations;
    public GetTransactionInfoResponse withConfirmations(Double confirmations) {
        this.confirmations = confirmations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fee")
    public Double fee;
    public GetTransactionInfoResponse withFee(Double fee) {
        this.fee = fee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hex")
    public String hex;
    public GetTransactionInfoResponse withHex(String hex) {
        this.hex = hex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locktime")
    public Double locktime;
    public GetTransactionInfoResponse withLocktime(Double locktime) {
        this.locktime = locktime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time")
    public Double time;
    public GetTransactionInfoResponse withTime(Double time) {
        this.time = time;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalsent")
    public Double totalsent;
    public GetTransactionInfoResponse withTotalsent(Double totalsent) {
        this.totalsent = totalsent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("txid")
    public String txid;
    public GetTransactionInfoResponse withTxid(String txid) {
        this.txid = txid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Double version;
    public GetTransactionInfoResponse withVersion(Double version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vin")
    public GetTransactionInfoResponseVin[] vin;
    public GetTransactionInfoResponse withVin(GetTransactionInfoResponseVin[] vin) {
        this.vin = vin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vout")
    public GetTransactionInfoResponseVout[] vout;
    public GetTransactionInfoResponse withVout(GetTransactionInfoResponseVout[] vout) {
        this.vout = vout;
        return this;
    }
}