package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InAppProduct {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultLanguage")
    public String defaultLanguage;
    public InAppProduct withDefaultLanguage(String defaultLanguage) {
        this.defaultLanguage = defaultLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultPrice")
    public Price defaultPrice;
    public InAppProduct withDefaultPrice(Price defaultPrice) {
        this.defaultPrice = defaultPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gracePeriod")
    public String gracePeriod;
    public InAppProduct withGracePeriod(String gracePeriod) {
        this.gracePeriod = gracePeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listings")
    public java.util.Map<String, InAppProductListing> listings;
    public InAppProduct withListings(java.util.Map<String, InAppProductListing> listings) {
        this.listings = listings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packageName")
    public String packageName;
    public InAppProduct withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prices")
    public java.util.Map<String, Price> prices;
    public InAppProduct withPrices(java.util.Map<String, Price> prices) {
        this.prices = prices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchaseType")
    public String purchaseType;
    public InAppProduct withPurchaseType(String purchaseType) {
        this.purchaseType = purchaseType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sku")
    public String sku;
    public InAppProduct withSku(String sku) {
        this.sku = sku;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public InAppProduct withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionPeriod")
    public String subscriptionPeriod;
    public InAppProduct withSubscriptionPeriod(String subscriptionPeriod) {
        this.subscriptionPeriod = subscriptionPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trialPeriod")
    public String trialPeriod;
    public InAppProduct withTrialPeriod(String trialPeriod) {
        this.trialPeriod = trialPeriod;
        return this;
    }
}