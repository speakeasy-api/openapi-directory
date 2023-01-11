package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Secret
 * Holds encrypted information that is only decrypted and stored in RAM by the worker VM when running the pipeline.
**/
public class Secret {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cipherText")
    public String cipherText;
    public Secret withCipherText(String cipherText) {
        this.cipherText = cipherText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyName")
    public String keyName;
    public Secret withKeyName(String keyName) {
        this.keyName = keyName;
        return this;
    }
}