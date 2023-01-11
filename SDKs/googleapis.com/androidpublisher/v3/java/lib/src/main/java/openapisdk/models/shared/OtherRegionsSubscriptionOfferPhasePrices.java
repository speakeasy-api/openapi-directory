package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OtherRegionsSubscriptionOfferPhasePrices
 * Pricing information for any new locations Play may launch in.
**/
public class OtherRegionsSubscriptionOfferPhasePrices {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eurPrice")
    public Money eurPrice;
    public OtherRegionsSubscriptionOfferPhasePrices withEurPrice(Money eurPrice) {
        this.eurPrice = eurPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usdPrice")
    public Money usdPrice;
    public OtherRegionsSubscriptionOfferPhasePrices withUsdPrice(Money usdPrice) {
        this.usdPrice = usdPrice;
        return this;
    }
}