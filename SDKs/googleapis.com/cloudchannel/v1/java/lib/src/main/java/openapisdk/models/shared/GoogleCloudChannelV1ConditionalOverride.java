package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1ConditionalOverride
 * Specifies the override to conditionally apply.
**/
public class GoogleCloudChannelV1ConditionalOverride {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adjustment")
    public GoogleCloudChannelV1RepricingAdjustment adjustment;
    public GoogleCloudChannelV1ConditionalOverride withAdjustment(GoogleCloudChannelV1RepricingAdjustment adjustment) {
        this.adjustment = adjustment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rebillingBasis")
    public GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum rebillingBasis;
    public GoogleCloudChannelV1ConditionalOverride withRebillingBasis(GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum rebillingBasis) {
        this.rebillingBasis = rebillingBasis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repricingCondition")
    public GoogleCloudChannelV1RepricingCondition repricingCondition;
    public GoogleCloudChannelV1ConditionalOverride withRepricingCondition(GoogleCloudChannelV1RepricingCondition repricingCondition) {
        this.repricingCondition = repricingCondition;
        return this;
    }
}