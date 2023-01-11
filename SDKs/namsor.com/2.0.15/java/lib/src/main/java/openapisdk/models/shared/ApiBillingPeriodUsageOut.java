package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApiBillingPeriodUsageOut
 * The current billing period.
**/
public class ApiBillingPeriodUsageOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiKey")
    public String apiKey;
    public ApiBillingPeriodUsageOut withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingStatus")
    public String billingStatus;
    public ApiBillingPeriodUsageOut withBillingStatus(String billingStatus) {
        this.billingStatus = billingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hardLimit")
    public Long hardLimit;
    public ApiBillingPeriodUsageOut withHardLimit(Long hardLimit) {
        this.hardLimit = hardLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("periodEnded")
    public Long periodEnded;
    public ApiBillingPeriodUsageOut withPeriodEnded(Long periodEnded) {
        this.periodEnded = periodEnded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("periodStarted")
    public Long periodStarted;
    public ApiBillingPeriodUsageOut withPeriodStarted(Long periodStarted) {
        this.periodStarted = periodStarted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("softLimit")
    public Long softLimit;
    public ApiBillingPeriodUsageOut withSoftLimit(Long softLimit) {
        this.softLimit = softLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stripeCurrentPeriodEnd")
    public Long stripeCurrentPeriodEnd;
    public ApiBillingPeriodUsageOut withStripeCurrentPeriodEnd(Long stripeCurrentPeriodEnd) {
        this.stripeCurrentPeriodEnd = stripeCurrentPeriodEnd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stripeCurrentPeriodStart")
    public Long stripeCurrentPeriodStart;
    public ApiBillingPeriodUsageOut withStripeCurrentPeriodStart(Long stripeCurrentPeriodStart) {
        this.stripeCurrentPeriodStart = stripeCurrentPeriodStart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionStarted")
    public Long subscriptionStarted;
    public ApiBillingPeriodUsageOut withSubscriptionStarted(Long subscriptionStarted) {
        this.subscriptionStarted = subscriptionStarted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usage")
    public Long usage;
    public ApiBillingPeriodUsageOut withUsage(Long usage) {
        this.usage = usage;
        return this;
    }
}