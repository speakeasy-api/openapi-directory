package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Price
 * Represents a price and a pricing type for a deal.
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
    @JsonProperty("type")
    public PriceTypeEnum type;
    public Price withType(PriceTypeEnum type) {
        this.type = type;
        return this;
    }
}