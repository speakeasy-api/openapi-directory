package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1RenewalSettings
 * Renewal settings for renewable Offers.
**/
public class GoogleCloudChannelV1RenewalSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableRenewal")
    public Boolean enableRenewal;
    public GoogleCloudChannelV1RenewalSettings withEnableRenewal(Boolean enableRenewal) {
        this.enableRenewal = enableRenewal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentCycle")
    public GoogleCloudChannelV1Period paymentCycle;
    public GoogleCloudChannelV1RenewalSettings withPaymentCycle(GoogleCloudChannelV1Period paymentCycle) {
        this.paymentCycle = paymentCycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentPlan")
    public GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum paymentPlan;
    public GoogleCloudChannelV1RenewalSettings withPaymentPlan(GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum paymentPlan) {
        this.paymentPlan = paymentPlan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resizeUnitCount")
    public Boolean resizeUnitCount;
    public GoogleCloudChannelV1RenewalSettings withResizeUnitCount(Boolean resizeUnitCount) {
        this.resizeUnitCount = resizeUnitCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduledRenewalOffer")
    public String scheduledRenewalOffer;
    public GoogleCloudChannelV1RenewalSettings withScheduledRenewalOffer(String scheduledRenewalOffer) {
        this.scheduledRenewalOffer = scheduledRenewalOffer;
        return this;
    }
}