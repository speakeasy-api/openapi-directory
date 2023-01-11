package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1ChannelPartnerRepricingConfigInput
 * Configuration for how a distributor will rebill a channel partner (also known as a distributor-authorized reseller).
**/
public class GoogleCloudChannelV1ChannelPartnerRepricingConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repricingConfig")
    public GoogleCloudChannelV1RepricingConfig repricingConfig;
    public GoogleCloudChannelV1ChannelPartnerRepricingConfigInput withRepricingConfig(GoogleCloudChannelV1RepricingConfig repricingConfig) {
        this.repricingConfig = repricingConfig;
        return this;
    }
}