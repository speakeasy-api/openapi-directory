package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SasPortalListCustomersResponse
 * Response for `ListCustomers`.
**/
public class SasPortalListCustomersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customers")
    public SasPortalCustomer[] customers;
    public SasPortalListCustomersResponse withCustomers(SasPortalCustomer[] customers) {
        this.customers = customers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public SasPortalListCustomersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}