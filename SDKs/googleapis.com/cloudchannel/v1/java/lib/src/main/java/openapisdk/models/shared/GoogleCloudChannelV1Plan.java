package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1Plan
 * The payment plan for the Offer. Describes how to make a payment.
**/
public class GoogleCloudChannelV1Plan {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingAccount")
    public String billingAccount;
    public GoogleCloudChannelV1Plan withBillingAccount(String billingAccount) {
        this.billingAccount = billingAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentCycle")
    public GoogleCloudChannelV1Period paymentCycle;
    public GoogleCloudChannelV1Plan withPaymentCycle(GoogleCloudChannelV1Period paymentCycle) {
        this.paymentCycle = paymentCycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentPlan")
    public GoogleCloudChannelV1PlanPaymentPlanEnum paymentPlan;
    public GoogleCloudChannelV1Plan withPaymentPlan(GoogleCloudChannelV1PlanPaymentPlanEnum paymentPlan) {
        this.paymentPlan = paymentPlan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentType")
    public GoogleCloudChannelV1PlanPaymentTypeEnum paymentType;
    public GoogleCloudChannelV1Plan withPaymentType(GoogleCloudChannelV1PlanPaymentTypeEnum paymentType) {
        this.paymentType = paymentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trialPeriod")
    public GoogleCloudChannelV1Period trialPeriod;
    public GoogleCloudChannelV1Plan withTrialPeriod(GoogleCloudChannelV1Period trialPeriod) {
        this.trialPeriod = trialPeriod;
        return this;
    }
}