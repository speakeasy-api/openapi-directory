package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EncryptionKey
 * Defined a customer managed encryption key that will be used to encrypt Backup artifacts.
**/
public class EncryptionKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcpKmsEncryptionKey")
    public String gcpKmsEncryptionKey;
    public EncryptionKey withGcpKmsEncryptionKey(String gcpKmsEncryptionKey) {
        this.gcpKmsEncryptionKey = gcpKmsEncryptionKey;
        return this;
    }
}