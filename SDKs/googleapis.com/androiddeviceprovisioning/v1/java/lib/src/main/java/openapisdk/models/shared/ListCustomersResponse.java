package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCustomersResponse
 * Response message of all customers related to this partner.
**/
public class ListCustomersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customers")
    public Company[] customers;
    public ListCustomersResponse withCustomers(Company[] customers) {
        this.customers = customers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListCustomersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSize")
    public Integer totalSize;
    public ListCustomersResponse withTotalSize(Integer totalSize) {
        this.totalSize = totalSize;
        return this;
    }
}