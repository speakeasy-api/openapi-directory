package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1CustomerRepricingConfigInput
 * Configuration for how a reseller will reprice a Customer.
**/
public class GoogleCloudChannelV1CustomerRepricingConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repricingConfig")
    public GoogleCloudChannelV1RepricingConfig repricingConfig;
    public GoogleCloudChannelV1CustomerRepricingConfigInput withRepricingConfig(GoogleCloudChannelV1RepricingConfig repricingConfig) {
        this.repricingConfig = repricingConfig;
        return this;
    }
}