package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReplicaStatus
 * Describes the status of a user-managed replica for the SecretVersion.
**/
public class ReplicaStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerManagedEncryption")
    public CustomerManagedEncryptionStatus customerManagedEncryption;
    public ReplicaStatus withCustomerManagedEncryption(CustomerManagedEncryptionStatus customerManagedEncryption) {
        this.customerManagedEncryption = customerManagedEncryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public ReplicaStatus withLocation(String location) {
        this.location = location;
        return this;
    }
}