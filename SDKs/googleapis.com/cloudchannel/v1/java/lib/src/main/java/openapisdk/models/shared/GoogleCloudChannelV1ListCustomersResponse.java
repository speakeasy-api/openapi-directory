package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1ListCustomersResponse
 * Response message for CloudChannelService.ListCustomers.
**/
public class GoogleCloudChannelV1ListCustomersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customers")
    public GoogleCloudChannelV1Customer[] customers;
    public GoogleCloudChannelV1ListCustomersResponse withCustomers(GoogleCloudChannelV1Customer[] customers) {
        this.customers = customers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudChannelV1ListCustomersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}