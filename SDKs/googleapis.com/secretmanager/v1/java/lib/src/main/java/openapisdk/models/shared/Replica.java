package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Replica
 * Represents a Replica for this Secret.
**/
public class Replica {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerManagedEncryption")
    public CustomerManagedEncryption customerManagedEncryption;
    public Replica withCustomerManagedEncryption(CustomerManagedEncryption customerManagedEncryption) {
        this.customerManagedEncryption = customerManagedEncryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public Replica withLocation(String location) {
        this.location = location;
        return this;
    }
}