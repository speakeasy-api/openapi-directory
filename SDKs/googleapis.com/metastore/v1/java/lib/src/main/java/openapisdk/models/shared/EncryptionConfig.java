package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EncryptionConfig
 * Encryption settings for the service.
**/
public class EncryptionConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsKey")
    public String kmsKey;
    public EncryptionConfig withKmsKey(String kmsKey) {
        this.kmsKey = kmsKey;
        return this;
    }
}