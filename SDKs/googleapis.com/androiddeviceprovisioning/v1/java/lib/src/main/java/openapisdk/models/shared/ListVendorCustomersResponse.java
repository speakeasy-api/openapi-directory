package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListVendorCustomersResponse
 * Response message to list customers of the vendor.
**/
public class ListVendorCustomersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customers")
    public Company[] customers;
    public ListVendorCustomersResponse withCustomers(Company[] customers) {
        this.customers = customers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListVendorCustomersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSize")
    public Integer totalSize;
    public ListVendorCustomersResponse withTotalSize(Integer totalSize) {
        this.totalSize = totalSize;
        return this;
    }
}