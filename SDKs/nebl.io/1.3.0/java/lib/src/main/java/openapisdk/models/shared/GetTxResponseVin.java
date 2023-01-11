package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTxResponseVin {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("n")
    public Double n;
    public GetTxResponseVin withN(Double n) {
        this.n = n;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scriptSig")
    public GetTxResponseVinScriptSig scriptSig;
    public GetTxResponseVin withScriptSig(GetTxResponseVinScriptSig scriptSig) {
        this.scriptSig = scriptSig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sequence")
    public Double sequence;
    public GetTxResponseVin withSequence(Double sequence) {
        this.sequence = sequence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("txid")
    public String txid;
    public GetTxResponseVin withTxid(String txid) {
        this.txid = txid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Double value;
    public GetTxResponseVin withValue(Double value) {
        this.value = value;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueSat")
    public Double valueSat;
    public GetTxResponseVin withValueSat(Double valueSat) {
        this.valueSat = valueSat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vout")
    public Double vout;
    public GetTxResponseVin withVout(Double vout) {
        this.vout = vout;
        return this;
    }
}