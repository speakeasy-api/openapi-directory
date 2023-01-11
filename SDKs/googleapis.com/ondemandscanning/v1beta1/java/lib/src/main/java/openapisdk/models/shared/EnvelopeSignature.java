package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnvelopeSignature {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyid")
    public String keyid;
    public EnvelopeSignature withKeyid(String keyid) {
        this.keyid = keyid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sig")
    public String sig;
    public EnvelopeSignature withSig(String sig) {
        this.sig = sig;
        return this;
    }
}