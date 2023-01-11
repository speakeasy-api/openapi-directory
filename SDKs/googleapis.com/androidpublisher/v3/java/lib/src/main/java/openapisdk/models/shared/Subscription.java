package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Subscription
 * A single subscription for an app.
**/
public class Subscription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;
    public Subscription withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basePlans")
    public BasePlan[] basePlans;
    public Subscription withBasePlans(BasePlan[] basePlans) {
        this.basePlans = basePlans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listings")
    public SubscriptionListing[] listings;
    public Subscription withListings(SubscriptionListing[] listings) {
        this.listings = listings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packageName")
    public String packageName;
    public Subscription withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public Subscription withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxAndComplianceSettings")
    public SubscriptionTaxAndComplianceSettings taxAndComplianceSettings;
    public Subscription withTaxAndComplianceSettings(SubscriptionTaxAndComplianceSettings taxAndComplianceSettings) {
        this.taxAndComplianceSettings = taxAndComplianceSettings;
        return this;
    }
}