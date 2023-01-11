package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BasePlan
 * A single base plan for a subscription.
**/
public class BasePlan {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoRenewingBasePlanType")
    public AutoRenewingBasePlanType autoRenewingBasePlanType;
    public BasePlan withAutoRenewingBasePlanType(AutoRenewingBasePlanType autoRenewingBasePlanType) {
        this.autoRenewingBasePlanType = autoRenewingBasePlanType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basePlanId")
    public String basePlanId;
    public BasePlan withBasePlanId(String basePlanId) {
        this.basePlanId = basePlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offerTags")
    public OfferTag[] offerTags;
    public BasePlan withOfferTags(OfferTag[] offerTags) {
        this.offerTags = offerTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otherRegionsConfig")
    public OtherRegionsBasePlanConfig otherRegionsConfig;
    public BasePlan withOtherRegionsConfig(OtherRegionsBasePlanConfig otherRegionsConfig) {
        this.otherRegionsConfig = otherRegionsConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prepaidBasePlanType")
    public PrepaidBasePlanType prepaidBasePlanType;
    public BasePlan withPrepaidBasePlanType(PrepaidBasePlanType prepaidBasePlanType) {
        this.prepaidBasePlanType = prepaidBasePlanType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionalConfigs")
    public RegionalBasePlanConfig[] regionalConfigs;
    public BasePlan withRegionalConfigs(RegionalBasePlanConfig[] regionalConfigs) {
        this.regionalConfigs = regionalConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public BasePlanStateEnum state;
    public BasePlan withState(BasePlanStateEnum state) {
        this.state = state;
        return this;
    }
}