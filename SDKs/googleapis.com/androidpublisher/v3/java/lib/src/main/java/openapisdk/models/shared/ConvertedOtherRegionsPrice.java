package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConvertedOtherRegionsPrice
 * Converted other regions prices.
**/
public class ConvertedOtherRegionsPrice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eurPrice")
    public Money eurPrice;
    public ConvertedOtherRegionsPrice withEurPrice(Money eurPrice) {
        this.eurPrice = eurPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usdPrice")
    public Money usdPrice;
    public ConvertedOtherRegionsPrice withUsdPrice(Money usdPrice) {
        this.usdPrice = usdPrice;
        return this;
    }
}