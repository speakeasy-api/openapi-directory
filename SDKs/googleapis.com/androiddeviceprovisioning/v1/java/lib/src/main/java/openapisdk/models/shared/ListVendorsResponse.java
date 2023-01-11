package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListVendorsResponse
 * Response message to list vendors of the partner.
**/
public class ListVendorsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListVendorsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSize")
    public Integer totalSize;
    public ListVendorsResponse withTotalSize(Integer totalSize) {
        this.totalSize = totalSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vendors")
    public Company[] vendors;
    public ListVendorsResponse withVendors(Company[] vendors) {
        this.vendors = vendors;
        return this;
    }
}