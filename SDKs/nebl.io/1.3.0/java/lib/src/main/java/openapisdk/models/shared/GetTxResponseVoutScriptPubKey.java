package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTxResponseVoutScriptPubKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addresses")
    public String[] addresses;
    public GetTxResponseVoutScriptPubKey withAddresses(String[] addresses) {
        this.addresses = addresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asm")
    public String asm;
    public GetTxResponseVoutScriptPubKey withAsm(String asm) {
        this.asm = asm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hex")
    public String hex;
    public GetTxResponseVoutScriptPubKey withHex(String hex) {
        this.hex = hex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reqSigs")
    public Double reqSigs;
    public GetTxResponseVoutScriptPubKey withReqSigs(Double reqSigs) {
        this.reqSigs = reqSigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GetTxResponseVoutScriptPubKey withType(String type) {
        this.type = type;
        return this;
    }
}