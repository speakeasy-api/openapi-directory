package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubscriptionPurchaseLineItem
 * Item-level info for a subscription purchase.
**/
public class SubscriptionPurchaseLineItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoRenewingPlan")
    public AutoRenewingPlan autoRenewingPlan;
    public SubscriptionPurchaseLineItem withAutoRenewingPlan(AutoRenewingPlan autoRenewingPlan) {
        this.autoRenewingPlan = autoRenewingPlan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiryTime")
    public String expiryTime;
    public SubscriptionPurchaseLineItem withExpiryTime(String expiryTime) {
        this.expiryTime = expiryTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offerDetails")
    public OfferDetails offerDetails;
    public SubscriptionPurchaseLineItem withOfferDetails(OfferDetails offerDetails) {
        this.offerDetails = offerDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prepaidPlan")
    public PrepaidPlan prepaidPlan;
    public SubscriptionPurchaseLineItem withPrepaidPlan(PrepaidPlan prepaidPlan) {
        this.prepaidPlan = prepaidPlan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public SubscriptionPurchaseLineItem withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}