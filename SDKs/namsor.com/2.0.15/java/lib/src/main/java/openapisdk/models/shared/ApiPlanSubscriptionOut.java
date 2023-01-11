package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApiPlanSubscriptionOut
 * The API Plan governing the subscription.
**/
public class ApiPlanSubscriptionOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiKey")
    public String apiKey;
    public ApiPlanSubscriptionOut withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public ApiPlanSubscriptionOut withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyFactor")
    public Double currencyFactor;
    public ApiPlanSubscriptionOut withCurrencyFactor(Double currencyFactor) {
        this.currencyFactor = currencyFactor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("planBaseFeesKey")
    public String planBaseFeesKey;
    public ApiPlanSubscriptionOut withPlanBaseFeesKey(String planBaseFeesKey) {
        this.planBaseFeesKey = planBaseFeesKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("planEnded")
    public Long planEnded;
    public ApiPlanSubscriptionOut withPlanEnded(Long planEnded) {
        this.planEnded = planEnded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("planName")
    public String planName;
    public ApiPlanSubscriptionOut withPlanName(String planName) {
        this.planName = planName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("planQuota")
    public Long planQuota;
    public ApiPlanSubscriptionOut withPlanQuota(Long planQuota) {
        this.planQuota = planQuota;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("planStarted")
    public Long planStarted;
    public ApiPlanSubscriptionOut withPlanStarted(Long planStarted) {
        this.planStarted = planStarted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("planStatus")
    public String planStatus;
    public ApiPlanSubscriptionOut withPlanStatus(String planStatus) {
        this.planStatus = planStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Double price;
    public ApiPlanSubscriptionOut withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceOverage")
    public Double priceOverage;
    public ApiPlanSubscriptionOut withPriceOverage(Double priceOverage) {
        this.priceOverage = priceOverage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceOverageUSD")
    public Double priceOverageUSD;
    public ApiPlanSubscriptionOut withPriceOverageUsd(Double priceOverageUSD) {
        this.priceOverageUSD = priceOverageUSD;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceUSD")
    public Double priceUSD;
    public ApiPlanSubscriptionOut withPriceUsd(Double priceUSD) {
        this.priceUSD = priceUSD;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priorPlanStarted")
    public Long priorPlanStarted;
    public ApiPlanSubscriptionOut withPriorPlanStarted(Long priorPlanStarted) {
        this.priorPlanStarted = priorPlanStarted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stripeCustomerId")
    public String stripeCustomerId;
    public ApiPlanSubscriptionOut withStripeCustomerId(String stripeCustomerId) {
        this.stripeCustomerId = stripeCustomerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stripeStatus")
    public String stripeStatus;
    public ApiPlanSubscriptionOut withStripeStatus(String stripeStatus) {
        this.stripeStatus = stripeStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stripeSubscription")
    public String stripeSubscription;
    public ApiPlanSubscriptionOut withStripeSubscription(String stripeSubscription) {
        this.stripeSubscription = stripeSubscription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxRate")
    public Double taxRate;
    public ApiPlanSubscriptionOut withTaxRate(Double taxRate) {
        this.taxRate = taxRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public ApiPlanSubscriptionOut withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}