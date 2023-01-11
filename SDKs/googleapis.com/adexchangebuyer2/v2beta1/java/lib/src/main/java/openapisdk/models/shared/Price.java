package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Price
 * Represents a price and a pricing type for a product / deal.
**/
public class Price {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Money amount;
    public Price withAmount(Money amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pricingType")
    public PricePricingTypeEnum pricingType;
    public Price withPricingType(PricePricingTypeEnum pricingType) {
        this.pricingType = pricingType;
        return this;
    }
}