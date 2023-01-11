package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTransactionInfoResponseVinScriptSig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asm")
    public String asm;
    public GetTransactionInfoResponseVinScriptSig withAsm(String asm) {
        this.asm = asm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hex")
    public String hex;
    public GetTransactionInfoResponseVinScriptSig withHex(String hex) {
        this.hex = hex;
        return this;
    }
}