package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1ListCustomerRepricingConfigsResponse
 * Response message for CloudChannelService.ListCustomerRepricingConfigs.
**/
public class GoogleCloudChannelV1ListCustomerRepricingConfigsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerRepricingConfigs")
    public GoogleCloudChannelV1CustomerRepricingConfig[] customerRepricingConfigs;
    public GoogleCloudChannelV1ListCustomerRepricingConfigsResponse withCustomerRepricingConfigs(GoogleCloudChannelV1CustomerRepricingConfig[] customerRepricingConfigs) {
        this.customerRepricingConfigs = customerRepricingConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudChannelV1ListCustomerRepricingConfigsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}