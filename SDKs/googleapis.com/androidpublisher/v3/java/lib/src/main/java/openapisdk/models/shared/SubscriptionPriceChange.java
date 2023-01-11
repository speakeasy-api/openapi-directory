package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubscriptionPriceChange
 * Contains the price change information for a subscription that can be used to control the user journey for the price change in the app. This can be in the form of seeking confirmation from the user or tailoring the experience for a successful conversion.
**/
public class SubscriptionPriceChange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newPrice")
    public Price newPrice;
    public SubscriptionPriceChange withNewPrice(Price newPrice) {
        this.newPrice = newPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public Integer state;
    public SubscriptionPriceChange withState(Integer state) {
        this.state = state;
        return this;
    }
}