package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1ChannelPartnerRepricingConfig
 * Configuration for how a distributor will rebill a channel partner (also known as a distributor-authorized reseller).
**/
public class GoogleCloudChannelV1ChannelPartnerRepricingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudChannelV1ChannelPartnerRepricingConfig withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repricingConfig")
    public GoogleCloudChannelV1RepricingConfig repricingConfig;
    public GoogleCloudChannelV1ChannelPartnerRepricingConfig withRepricingConfig(GoogleCloudChannelV1RepricingConfig repricingConfig) {
        this.repricingConfig = repricingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleCloudChannelV1ChannelPartnerRepricingConfig withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}