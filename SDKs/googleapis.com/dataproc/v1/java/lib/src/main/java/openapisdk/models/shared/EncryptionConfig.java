package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EncryptionConfig
 * Encryption settings for the cluster.
**/
public class EncryptionConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcePdKmsKeyName")
    public String gcePdKmsKeyName;
    public EncryptionConfig withGcePdKmsKeyName(String gcePdKmsKeyName) {
        this.gcePdKmsKeyName = gcePdKmsKeyName;
        return this;
    }
}