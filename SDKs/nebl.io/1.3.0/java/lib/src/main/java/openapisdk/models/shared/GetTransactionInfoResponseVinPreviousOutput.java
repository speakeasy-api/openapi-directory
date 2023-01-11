package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTransactionInfoResponseVinPreviousOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addresses")
    public String[] addresses;
    public GetTransactionInfoResponseVinPreviousOutput withAddresses(String[] addresses) {
        this.addresses = addresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asm")
    public String asm;
    public GetTransactionInfoResponseVinPreviousOutput withAsm(String asm) {
        this.asm = asm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hex")
    public String hex;
    public GetTransactionInfoResponseVinPreviousOutput withHex(String hex) {
        this.hex = hex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reqSigs")
    public Double reqSigs;
    public GetTransactionInfoResponseVinPreviousOutput withReqSigs(Double reqSigs) {
        this.reqSigs = reqSigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GetTransactionInfoResponseVinPreviousOutput withType(String type) {
        this.type = type;
        return this;
    }
}