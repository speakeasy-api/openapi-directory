package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AutoRenewingBasePlanType
 * Represents a base plan that automatically renews at the end of its subscription period.
**/
public class AutoRenewingBasePlanType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingPeriodDuration")
    public String billingPeriodDuration;
    public AutoRenewingBasePlanType withBillingPeriodDuration(String billingPeriodDuration) {
        this.billingPeriodDuration = billingPeriodDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gracePeriodDuration")
    public String gracePeriodDuration;
    public AutoRenewingBasePlanType withGracePeriodDuration(String gracePeriodDuration) {
        this.gracePeriodDuration = gracePeriodDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legacyCompatible")
    public Boolean legacyCompatible;
    public AutoRenewingBasePlanType withLegacyCompatible(Boolean legacyCompatible) {
        this.legacyCompatible = legacyCompatible;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legacyCompatibleSubscriptionOfferId")
    public String legacyCompatibleSubscriptionOfferId;
    public AutoRenewingBasePlanType withLegacyCompatibleSubscriptionOfferId(String legacyCompatibleSubscriptionOfferId) {
        this.legacyCompatibleSubscriptionOfferId = legacyCompatibleSubscriptionOfferId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prorationMode")
    public AutoRenewingBasePlanTypeProrationModeEnum prorationMode;
    public AutoRenewingBasePlanType withProrationMode(AutoRenewingBasePlanTypeProrationModeEnum prorationMode) {
        this.prorationMode = prorationMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resubscribeState")
    public AutoRenewingBasePlanTypeResubscribeStateEnum resubscribeState;
    public AutoRenewingBasePlanType withResubscribeState(AutoRenewingBasePlanTypeResubscribeStateEnum resubscribeState) {
        this.resubscribeState = resubscribeState;
        return this;
    }
}