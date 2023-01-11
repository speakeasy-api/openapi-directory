package openapisdk.models.shared;



/**
 * SubscriptionPriceChange
 * Contains the price change information for a subscription that can be used to control the user journey for the price change in the app. This can be in the form of seeking confirmation from the user or tailoring the experience for a successful conversion.
**/
public class SubscriptionPriceChange {
    public Price newPrice;
    public SubscriptionPriceChange withNewPrice(Price newPrice) {
        this.newPrice = newPrice;
        return this;
    }
    public Integer state;
    public SubscriptionPriceChange withState(Integer state) {
        this.state = state;
        return this;
    }
}