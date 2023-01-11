package openapisdk.models.shared;



/**
 * SubscriptionPurchase
 * A SubscriptionPurchase resource indicates the status of a user's subscription purchase.
**/
public class SubscriptionPurchase {
    public Boolean autoRenewing;
    public SubscriptionPurchase withAutoRenewing(Boolean autoRenewing) {
        this.autoRenewing = autoRenewing;
        return this;
    }
    public String initiationTimestampMsec;
    public SubscriptionPurchase withInitiationTimestampMsec(String initiationTimestampMsec) {
        this.initiationTimestampMsec = initiationTimestampMsec;
        return this;
    }
    public String kind;
    public SubscriptionPurchase withKind(String kind) {
        this.kind = kind;
        return this;
    }
    public String validUntilTimestampMsec;
    public SubscriptionPurchase withValidUntilTimestampMsec(String validUntilTimestampMsec) {
        this.validUntilTimestampMsec = validUntilTimestampMsec;
        return this;
    }
}