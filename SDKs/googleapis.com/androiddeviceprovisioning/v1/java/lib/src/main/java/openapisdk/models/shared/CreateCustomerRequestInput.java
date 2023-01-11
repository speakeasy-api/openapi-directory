package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateCustomerRequestInput
 * Request message to create a customer.
**/
public class CreateCustomerRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customer")
    public CompanyInput customer;
    public CreateCustomerRequestInput withCustomer(CompanyInput customer) {
        this.customer = customer;
        return this;
    }
}