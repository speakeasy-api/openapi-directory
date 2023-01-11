package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Automatic
 * A replication policy that replicates the Secret payload without any restrictions.
**/
public class Automatic {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerManagedEncryption")
    public CustomerManagedEncryption customerManagedEncryption;
    public Automatic withCustomerManagedEncryption(CustomerManagedEncryption customerManagedEncryption) {
        this.customerManagedEncryption = customerManagedEncryption;
        return this;
    }
}