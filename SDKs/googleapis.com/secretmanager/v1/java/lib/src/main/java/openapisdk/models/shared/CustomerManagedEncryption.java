package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomerManagedEncryption
 * Configuration for encrypting secret payloads using customer-managed encryption keys (CMEK).
**/
public class CustomerManagedEncryption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsKeyName")
    public String kmsKeyName;
    public CustomerManagedEncryption withKmsKeyName(String kmsKeyName) {
        this.kmsKeyName = kmsKeyName;
        return this;
    }
}