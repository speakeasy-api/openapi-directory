package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Aes128Encryption
 * Configuration for AES-128 encryption.
**/
public class Aes128Encryption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyUri")
    public String keyUri;
    public Aes128Encryption withKeyUri(String keyUri) {
        this.keyUri = keyUri;
        return this;
    }
}