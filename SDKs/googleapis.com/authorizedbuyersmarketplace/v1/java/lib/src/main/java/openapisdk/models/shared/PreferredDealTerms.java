package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PreferredDealTerms
 * Pricing terms for Preferred Deals.
**/
public class PreferredDealTerms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixedPrice")
    public Price fixedPrice;
    public PreferredDealTerms withFixedPrice(Price fixedPrice) {
        this.fixedPrice = fixedPrice;
        return this;
    }
}