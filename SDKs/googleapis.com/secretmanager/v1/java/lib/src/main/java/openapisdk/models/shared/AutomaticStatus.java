package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AutomaticStatus
 * The replication status of a SecretVersion using automatic replication. Only populated if the parent Secret has an automatic replication policy.
**/
public class AutomaticStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerManagedEncryption")
    public CustomerManagedEncryptionStatus customerManagedEncryption;
    public AutomaticStatus withCustomerManagedEncryption(CustomerManagedEncryptionStatus customerManagedEncryption) {
        this.customerManagedEncryption = customerManagedEncryption;
        return this;
    }
}