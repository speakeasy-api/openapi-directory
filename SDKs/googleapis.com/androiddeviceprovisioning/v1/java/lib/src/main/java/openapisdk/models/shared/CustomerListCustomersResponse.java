package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomerListCustomersResponse
 * Response message for listing my customers.
**/
public class CustomerListCustomersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customers")
    public Company[] customers;
    public CustomerListCustomersResponse withCustomers(Company[] customers) {
        this.customers = customers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public CustomerListCustomersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}