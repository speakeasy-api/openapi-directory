package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiPeriodUsageOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingPeriod")
    public ApiBillingPeriodUsageOut billingPeriod;
    public ApiPeriodUsageOut withBillingPeriod(ApiBillingPeriodUsageOut billingPeriod) {
        this.billingPeriod = billingPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overageCurrency")
    public String overageCurrency;
    public ApiPeriodUsageOut withOverageCurrency(String overageCurrency) {
        this.overageCurrency = overageCurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overageExclTax")
    public Double overageExclTax;
    public ApiPeriodUsageOut withOverageExclTax(Double overageExclTax) {
        this.overageExclTax = overageExclTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overageInclTax")
    public Double overageInclTax;
    public ApiPeriodUsageOut withOverageInclTax(Double overageInclTax) {
        this.overageInclTax = overageInclTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overageQuantity")
    public Long overageQuantity;
    public ApiPeriodUsageOut withOverageQuantity(Long overageQuantity) {
        this.overageQuantity = overageQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscription")
    public ApiPlanSubscriptionOut subscription;
    public ApiPeriodUsageOut withSubscription(ApiPlanSubscriptionOut subscription) {
        this.subscription = subscription;
        return this;
    }
}