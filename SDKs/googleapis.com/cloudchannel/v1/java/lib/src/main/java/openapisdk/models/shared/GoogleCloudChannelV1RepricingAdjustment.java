package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1RepricingAdjustment
 * A type that represents the various adjustments you can apply to a bill.
**/
public class GoogleCloudChannelV1RepricingAdjustment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentageAdjustment")
    public GoogleCloudChannelV1PercentageAdjustment percentageAdjustment;
    public GoogleCloudChannelV1RepricingAdjustment withPercentageAdjustment(GoogleCloudChannelV1PercentageAdjustment percentageAdjustment) {
        this.percentageAdjustment = percentageAdjustment;
        return this;
    }
}