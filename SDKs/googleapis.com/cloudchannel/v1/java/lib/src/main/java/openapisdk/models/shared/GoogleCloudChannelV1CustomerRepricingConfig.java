package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1CustomerRepricingConfig
 * Configuration for how a reseller will reprice a Customer.
**/
public class GoogleCloudChannelV1CustomerRepricingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudChannelV1CustomerRepricingConfig withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repricingConfig")
    public GoogleCloudChannelV1RepricingConfig repricingConfig;
    public GoogleCloudChannelV1CustomerRepricingConfig withRepricingConfig(GoogleCloudChannelV1RepricingConfig repricingConfig) {
        this.repricingConfig = repricingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleCloudChannelV1CustomerRepricingConfig withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}