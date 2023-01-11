package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubscriptionOfferInput
 * A single, temporary offer
**/
public class SubscriptionOfferInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basePlanId")
    public String basePlanId;
    public SubscriptionOfferInput withBasePlanId(String basePlanId) {
        this.basePlanId = basePlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offerId")
    public String offerId;
    public SubscriptionOfferInput withOfferId(String offerId) {
        this.offerId = offerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offerTags")
    public OfferTag[] offerTags;
    public SubscriptionOfferInput withOfferTags(OfferTag[] offerTags) {
        this.offerTags = offerTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otherRegionsConfig")
    public OtherRegionsSubscriptionOfferConfig otherRegionsConfig;
    public SubscriptionOfferInput withOtherRegionsConfig(OtherRegionsSubscriptionOfferConfig otherRegionsConfig) {
        this.otherRegionsConfig = otherRegionsConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packageName")
    public String packageName;
    public SubscriptionOfferInput withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phases")
    public SubscriptionOfferPhase[] phases;
    public SubscriptionOfferInput withPhases(SubscriptionOfferPhase[] phases) {
        this.phases = phases;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public SubscriptionOfferInput withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionalConfigs")
    public RegionalSubscriptionOfferConfig[] regionalConfigs;
    public SubscriptionOfferInput withRegionalConfigs(RegionalSubscriptionOfferConfig[] regionalConfigs) {
        this.regionalConfigs = regionalConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targeting")
    public SubscriptionOfferTargeting targeting;
    public SubscriptionOfferInput withTargeting(SubscriptionOfferTargeting targeting) {
        this.targeting = targeting;
        return this;
    }
}