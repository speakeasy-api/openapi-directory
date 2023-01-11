package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RateTier
 * Pricing details for a service tier.
**/
public class RateTier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Money price;
    public RateTier withPrice(Money price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startAmount")
    public Double startAmount;
    public RateTier withStartAmount(Double startAmount) {
        this.startAmount = startAmount;
        return this;
    }
}