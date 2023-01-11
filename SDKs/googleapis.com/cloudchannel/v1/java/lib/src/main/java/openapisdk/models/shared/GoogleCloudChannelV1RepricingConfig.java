package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1RepricingConfig
 * Configuration for repricing a Google bill over a period of time.
**/
public class GoogleCloudChannelV1RepricingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adjustment")
    public GoogleCloudChannelV1RepricingAdjustment adjustment;
    public GoogleCloudChannelV1RepricingConfig withAdjustment(GoogleCloudChannelV1RepricingAdjustment adjustment) {
        this.adjustment = adjustment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelPartnerGranularity")
    public java.util.Map<String, Object> channelPartnerGranularity;
    public GoogleCloudChannelV1RepricingConfig withChannelPartnerGranularity(java.util.Map<String, Object> channelPartnerGranularity) {
        this.channelPartnerGranularity = channelPartnerGranularity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conditionalOverrides")
    public GoogleCloudChannelV1ConditionalOverride[] conditionalOverrides;
    public GoogleCloudChannelV1RepricingConfig withConditionalOverrides(GoogleCloudChannelV1ConditionalOverride[] conditionalOverrides) {
        this.conditionalOverrides = conditionalOverrides;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveInvoiceMonth")
    public GoogleTypeDate effectiveInvoiceMonth;
    public GoogleCloudChannelV1RepricingConfig withEffectiveInvoiceMonth(GoogleTypeDate effectiveInvoiceMonth) {
        this.effectiveInvoiceMonth = effectiveInvoiceMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entitlementGranularity")
    public GoogleCloudChannelV1RepricingConfigEntitlementGranularity entitlementGranularity;
    public GoogleCloudChannelV1RepricingConfig withEntitlementGranularity(GoogleCloudChannelV1RepricingConfigEntitlementGranularity entitlementGranularity) {
        this.entitlementGranularity = entitlementGranularity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rebillingBasis")
    public GoogleCloudChannelV1RepricingConfigRebillingBasisEnum rebillingBasis;
    public GoogleCloudChannelV1RepricingConfig withRebillingBasis(GoogleCloudChannelV1RepricingConfigRebillingBasisEnum rebillingBasis) {
        this.rebillingBasis = rebillingBasis;
        return this;
    }
}