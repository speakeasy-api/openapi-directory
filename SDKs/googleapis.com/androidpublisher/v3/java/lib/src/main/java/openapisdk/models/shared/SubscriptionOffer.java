package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubscriptionOffer
 * A single, temporary offer
**/
public class SubscriptionOffer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basePlanId")
    public String basePlanId;
    public SubscriptionOffer withBasePlanId(String basePlanId) {
        this.basePlanId = basePlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offerId")
    public String offerId;
    public SubscriptionOffer withOfferId(String offerId) {
        this.offerId = offerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offerTags")
    public OfferTag[] offerTags;
    public SubscriptionOffer withOfferTags(OfferTag[] offerTags) {
        this.offerTags = offerTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otherRegionsConfig")
    public OtherRegionsSubscriptionOfferConfig otherRegionsConfig;
    public SubscriptionOffer withOtherRegionsConfig(OtherRegionsSubscriptionOfferConfig otherRegionsConfig) {
        this.otherRegionsConfig = otherRegionsConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packageName")
    public String packageName;
    public SubscriptionOffer withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phases")
    public SubscriptionOfferPhase[] phases;
    public SubscriptionOffer withPhases(SubscriptionOfferPhase[] phases) {
        this.phases = phases;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public SubscriptionOffer withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionalConfigs")
    public RegionalSubscriptionOfferConfig[] regionalConfigs;
    public SubscriptionOffer withRegionalConfigs(RegionalSubscriptionOfferConfig[] regionalConfigs) {
        this.regionalConfigs = regionalConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public SubscriptionOfferStateEnum state;
    public SubscriptionOffer withState(SubscriptionOfferStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targeting")
    public SubscriptionOfferTargeting targeting;
    public SubscriptionOffer withTargeting(SubscriptionOfferTargeting targeting) {
        this.targeting = targeting;
        return this;
    }
}