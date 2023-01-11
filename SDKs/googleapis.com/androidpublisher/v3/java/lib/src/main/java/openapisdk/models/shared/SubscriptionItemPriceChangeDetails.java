package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubscriptionItemPriceChangeDetails
 * Price change related information of a subscription item.
**/
public class SubscriptionItemPriceChangeDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expectedNewPriceChargeTime")
    public String expectedNewPriceChargeTime;
    public SubscriptionItemPriceChangeDetails withExpectedNewPriceChargeTime(String expectedNewPriceChargeTime) {
        this.expectedNewPriceChargeTime = expectedNewPriceChargeTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newPrice")
    public Money newPrice;
    public SubscriptionItemPriceChangeDetails withNewPrice(Money newPrice) {
        this.newPrice = newPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceChangeMode")
    public SubscriptionItemPriceChangeDetailsPriceChangeModeEnum priceChangeMode;
    public SubscriptionItemPriceChangeDetails withPriceChangeMode(SubscriptionItemPriceChangeDetailsPriceChangeModeEnum priceChangeMode) {
        this.priceChangeMode = priceChangeMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceChangeState")
    public SubscriptionItemPriceChangeDetailsPriceChangeStateEnum priceChangeState;
    public SubscriptionItemPriceChangeDetails withPriceChangeState(SubscriptionItemPriceChangeDetailsPriceChangeStateEnum priceChangeState) {
        this.priceChangeState = priceChangeState;
        return this;
    }
}