package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubscriptionOfferTargeting
 * Defines the rule a user needs to satisfy to receive this offer.
**/
public class SubscriptionOfferTargeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acquisitionRule")
    public AcquisitionTargetingRule acquisitionRule;
    public SubscriptionOfferTargeting withAcquisitionRule(AcquisitionTargetingRule acquisitionRule) {
        this.acquisitionRule = acquisitionRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upgradeRule")
    public UpgradeTargetingRule upgradeRule;
    public SubscriptionOfferTargeting withUpgradeRule(UpgradeTargetingRule upgradeRule) {
        this.upgradeRule = upgradeRule;
        return this;
    }
}