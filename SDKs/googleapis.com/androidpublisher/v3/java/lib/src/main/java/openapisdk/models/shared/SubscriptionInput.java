package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubscriptionInput
 * A single subscription for an app.
**/
public class SubscriptionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basePlans")
    public BasePlanInput[] basePlans;
    public SubscriptionInput withBasePlans(BasePlanInput[] basePlans) {
        this.basePlans = basePlans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listings")
    public SubscriptionListing[] listings;
    public SubscriptionInput withListings(SubscriptionListing[] listings) {
        this.listings = listings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packageName")
    public String packageName;
    public SubscriptionInput withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public SubscriptionInput withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxAndComplianceSettings")
    public SubscriptionTaxAndComplianceSettings taxAndComplianceSettings;
    public SubscriptionInput withTaxAndComplianceSettings(SubscriptionTaxAndComplianceSettings taxAndComplianceSettings) {
        this.taxAndComplianceSettings = taxAndComplianceSettings;
        return this;
    }
}