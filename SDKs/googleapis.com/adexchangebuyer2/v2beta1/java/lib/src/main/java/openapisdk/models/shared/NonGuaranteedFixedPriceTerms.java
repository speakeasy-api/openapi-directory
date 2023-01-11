package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NonGuaranteedFixedPriceTerms
 * Terms for Preferred Deals.
**/
public class NonGuaranteedFixedPriceTerms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixedPrices")
    public PricePerBuyer[] fixedPrices;
    public NonGuaranteedFixedPriceTerms withFixedPrices(PricePerBuyer[] fixedPrices) {
        this.fixedPrices = fixedPrices;
        return this;
    }
}