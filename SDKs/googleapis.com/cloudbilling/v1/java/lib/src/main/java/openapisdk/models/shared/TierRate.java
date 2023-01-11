package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TierRate
 * The price rate indicating starting usage and its corresponding price.
**/
public class TierRate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startUsageAmount")
    public Double startUsageAmount;
    public TierRate withStartUsageAmount(Double startUsageAmount) {
        this.startUsageAmount = startUsageAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unitPrice")
    public Money unitPrice;
    public TierRate withUnitPrice(Money unitPrice) {
        this.unitPrice = unitPrice;
        return this;
    }
}