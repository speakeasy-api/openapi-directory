package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomerManagedEncryptionStatus
 * Describes the status of customer-managed encryption.
**/
public class CustomerManagedEncryptionStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsKeyVersionName")
    public String kmsKeyVersionName;
    public CustomerManagedEncryptionStatus withKmsKeyVersionName(String kmsKeyVersionName) {
        this.kmsKeyVersionName = kmsKeyVersionName;
        return this;
    }
}