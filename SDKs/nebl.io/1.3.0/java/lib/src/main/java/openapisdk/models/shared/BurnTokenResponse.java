package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BurnTokenResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multisigOutputs")
    public Double[] multisigOutputs;
    public BurnTokenResponse withMultisigOutputs(Double[] multisigOutputs) {
        this.multisigOutputs = multisigOutputs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ntp1OutputIndexes")
    public Double[] ntp1OutputIndexes;
    public BurnTokenResponse withNtp1OutputIndexes(Double[] ntp1OutputIndexes) {
        this.ntp1OutputIndexes = ntp1OutputIndexes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("txHex")
    public String txHex;
    public BurnTokenResponse withTxHex(String txHex) {
        this.txHex = txHex;
        return this;
    }
}