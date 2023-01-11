package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BasePlanInput
 * A single base plan for a subscription.
**/
public class BasePlanInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoRenewingBasePlanType")
    public AutoRenewingBasePlanType autoRenewingBasePlanType;
    public BasePlanInput withAutoRenewingBasePlanType(AutoRenewingBasePlanType autoRenewingBasePlanType) {
        this.autoRenewingBasePlanType = autoRenewingBasePlanType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basePlanId")
    public String basePlanId;
    public BasePlanInput withBasePlanId(String basePlanId) {
        this.basePlanId = basePlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offerTags")
    public OfferTag[] offerTags;
    public BasePlanInput withOfferTags(OfferTag[] offerTags) {
        this.offerTags = offerTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otherRegionsConfig")
    public OtherRegionsBasePlanConfig otherRegionsConfig;
    public BasePlanInput withOtherRegionsConfig(OtherRegionsBasePlanConfig otherRegionsConfig) {
        this.otherRegionsConfig = otherRegionsConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prepaidBasePlanType")
    public PrepaidBasePlanType prepaidBasePlanType;
    public BasePlanInput withPrepaidBasePlanType(PrepaidBasePlanType prepaidBasePlanType) {
        this.prepaidBasePlanType = prepaidBasePlanType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionalConfigs")
    public RegionalBasePlanConfig[] regionalConfigs;
    public BasePlanInput withRegionalConfigs(RegionalBasePlanConfig[] regionalConfigs) {
        this.regionalConfigs = regionalConfigs;
        return this;
    }
}