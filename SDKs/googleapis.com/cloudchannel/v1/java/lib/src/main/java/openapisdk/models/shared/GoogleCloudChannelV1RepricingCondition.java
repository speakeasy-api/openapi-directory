package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1RepricingCondition
 * Represents the various repricing conditions you can use for a conditional override.
**/
public class GoogleCloudChannelV1RepricingCondition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skuGroupCondition")
    public GoogleCloudChannelV1SkuGroupCondition skuGroupCondition;
    public GoogleCloudChannelV1RepricingCondition withSkuGroupCondition(GoogleCloudChannelV1SkuGroupCondition skuGroupCondition) {
        this.skuGroupCondition = skuGroupCondition;
        return this;
    }
}