package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse
 * Response message for CloudChannelService.ListChannelPartnerRepricingConfigs.
**/
public class GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelPartnerRepricingConfigs")
    public GoogleCloudChannelV1ChannelPartnerRepricingConfig[] channelPartnerRepricingConfigs;
    public GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse withChannelPartnerRepricingConfigs(GoogleCloudChannelV1ChannelPartnerRepricingConfig[] channelPartnerRepricingConfigs) {
        this.channelPartnerRepricingConfigs = channelPartnerRepricingConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}