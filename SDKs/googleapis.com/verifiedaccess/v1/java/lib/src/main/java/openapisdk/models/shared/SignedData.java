package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SignedData
 * The wrapper message of any data and its signature.
**/
public class SignedData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public String data;
    public SignedData withData(String data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signature")
    public String signature;
    public SignedData withSignature(String signature) {
        this.signature = signature;
        return this;
    }
}